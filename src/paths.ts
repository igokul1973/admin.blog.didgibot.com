export const paths = {
    home: '/',
    auth: {
        signIn: '/auth/sign-in'
    },
    dashboard: {
        articles: '/articles',
        categories: '/categories',
        tags: '/tags',
        settings: '/settings'
    },
    errors: { notFound: '/errors/not-found' }
} as const;
