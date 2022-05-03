export enum RoutePathEnum {
    HOME = '',
    ARTICLES = 'articles',
    CATEGORIES = 'categories',
    LOGIN = 'login',
    NOT_FOUND = '**'
}

export enum RouteUrlEnum {
    HOME = '/',
    ARTICLES = '/articles',
    CATEGORIES = '/categories',
    LOGIN = '/login'
}

export interface ITokenPayload {
    id: string;
    email: string;
    exp?: number;
    iat?: number;
    iss?: string;
}

export enum FormTypeEnum {
    CREATE = 'create',
    UPDATE = 'update'
}
