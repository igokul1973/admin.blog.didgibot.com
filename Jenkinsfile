/* Requires the Kubernetes Pipeline plugin */
pipeline {
    environment {
      RESULTS_FILE_NAME = 'job-results.txt'
      IMAGE_TAG_NUMBER = "${BUILD_NUMBER}"
      DOCKER_IMAGE_NAME = "igk19/blog-admin:${BUILD_NUMBER}"
    }
    agent {
      kubernetes {
        yamlFile 'node-git-chromium-pod.yaml'
      }
    }
    stages {
        stage('Prepare') { steps { check() } }
        // stage('Test') {
        //   when {
        //       environment name: 'SHOULD_BUMP_VERSION', value: 'false'
        //   }
        //   steps {
        //       container('node-git-chromium') {
        //         sh 'yarn'
        //         sh 'yarn test:headless'
        //       }
        //   }
        // }
        stage('Bump version') {
          when {
            environment name: 'SHOULD_BUMP_VERSION', value: 'true'
          }
          steps {
            container('node-git-chromium') {
              withCredentials([
                sshUserPrivateKey(credentialsId: 'github_ssh_credentials', keyFileVariable: 'SSH_KEY'),
                usernamePassword(
                    credentialsId: 'bc934908-4192-4b50-bb32-5fad86943329',
                    usernameVariable: 'USERNAME',
                    passwordVariable: 'GH_TOKEN'
                )
              ]) {
                script {
                  sh """
                    git config --global --add safe.directory ${env.WORKSPACE}
                    git checkout ${env.BRANCH_NAME}
                    npm version --no-git-tag-version patch
                    git add --all
                  """
                  def new_app_version = readJSON text: sh(returnStdout: true, script: 'npm version')
                  env.NEW_APP_VERSION = new_app_version['admin.blog.didgibot.com']
                  def commit_message = "Upgrade to new application version - ${env.NEW_APP_VERSION} - [version bump]"
                  def encodedPassword = URLEncoder.encode("$GH_TOKEN", 'UTF-8')
                  sh "git commit -m '${commit_message}'"
                  sh "git push https://${USERNAME}:${encodedPassword}@github.com/${USERNAME}/admin.blog.didgibot.com.git"
                }
              }
            }
          }
        }
        stage('Build') {
      when {
        environment name: 'SHOULD_BUMP_VERSION', value: 'false'
      }
      steps {
        container('node-git-chromium') {
          sh '''
            echo 'Building the app...'
            npm i
            npm run build
          '''
        }
      }
        }
        // Build image and push it to Docker Hub
        stage('Kaniko') {
          when {
            environment name: 'SHOULD_BUMP_VERSION', value: 'false'
          }
          steps {
            container('kaniko') {
              sh """
                        echo 'Starting Kaniko build...'
                        pwd
                        ls -lah
                        /kaniko/executor --dockerfile `pwd`/Dockerfile \
                                          --context `pwd` \
                                          --destination=${env.DOCKER_IMAGE_NAME}
                      """
            }
            script {
              env.BUILD_RESULT = "Successfully built docker image for admin.blog.didgibot.com with version - ${env.DOCKER_IMAGE_NAME} - and pushed it to docker repository."
            }
          }
        }
        // Start another job
        stage('Change image in admin.blog.didgibot.com deployment') {
          when {
            environment name: 'SHOULD_BUMP_VERSION', value: 'false'
          }
          steps {
            build job: 'change-image-name-in-admin-blog-didgibot-com/' + env.BRANCH_NAME, parameters: [
                      string(name: 'IMAGE_TAG_NUMBER', value: env.IMAGE_TAG_NUMBER)
                    ]
          }
        }
    }

    post {
      always {
          postProcess()
      }
    }
}

void check() {
  env.BUILD_RESULT = 'ABORTED'
  env.SHOULD_BUMP_VERSION = 'false'
  result = sh(script: "git log -1 | grep '.*\\[version bump\\].*'", returnStatus: true)
  if (result != 0) {
    env.SHOULD_BUMP_VERSION = 'true'
  }
}

void postProcess() {
  if (env.SHOULD_BUMP_VERSION == 'true') {
    env.BUILD_RESULT = "BUMPED APPLICATION VERSION TO ${env.NEW_APP_VERSION}"
  }
  writeFile file: env.RESULTS_FILE_NAME, text: "The job build result: ${env.BUILD_RESULT}"
  archiveArtifacts env.RESULTS_FILE_NAME
}
