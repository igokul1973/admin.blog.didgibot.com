export const paths = {
    home: '/',
    auth: {
        signIn: '/auth/sign-in'
    },
    dashboard: {
        articles: '/articles',
        categories: '/categories',
        tags: '/tags'
    },
    errors: { notFound: '/errors/not-found' }
} as const;
