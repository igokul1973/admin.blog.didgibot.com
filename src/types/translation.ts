import { Dayjs } from 'dayjs';
import { ICategory, IRawCategory } from './category';
import { IRawTag, ITag } from './tag';

export enum LanguageEnum {
    RU = 'ru',
    EN = 'en'
}

interface IContentBlock {
    __typename?: string;
    id: string;
    type: string;
    data: object[];
}

export interface IContent extends Record<string, unknown> {
    __typename?: string;
    version?: string;
    time?: number;
    blocks: IContentBlock[];
}

export interface IRawArticleTranslation {
    language: LanguageEnum;
    header: string;
    content: IContent;
    category: IRawCategory;
    tags: IRawTag[];
    is_published: boolean;
    published_at?: string;
    __typename?: string;
}

export interface IArticleTranslation {
    language: LanguageEnum;
    header: string;
    content: IContent;
    category: ICategory;
    tags: ITag[];
    isPublished: boolean;
    publishedAt?: Dayjs;
    __typename?: string;
}
