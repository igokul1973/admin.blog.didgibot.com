import { IEntityDates, IRawEntityDates } from './common';
import { IArticleTranslation, IRawArticleTranslation } from './translation';

export interface IRawArticle extends IRawEntityDates {
    id: string;
    translations: IRawArticleTranslation[];
    slug: string;
    priority?: number;
}

export interface IArticle extends IEntityDates {
    id: string;
    translations: IArticleTranslation[];
    slug: string;
    priority?: number;
}

export interface IArticlePartial extends IEntityDates {
    id: string;
    translations: Partial<IArticleTranslation>[];
    slug?: string;
    priority?: number;
}
