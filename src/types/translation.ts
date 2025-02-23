import { ICategory } from './category';
import { ITag } from './tag';

export enum LanguageEnum {
    RU = 'ru',
    EN = 'en'
}

export interface IRawArticleTranslation {
    language: LanguageEnum;
    header: string;
    content: string;
    category: string;
    tags: string[];
    is_published: boolean;
    published_at?: Date;
}

export interface IArticleTranslation {
    header: string;
    content: string;
    category: ICategory;
    tags: ITag[];
    isPublished: boolean;
    publishedAt?: Date;
}
