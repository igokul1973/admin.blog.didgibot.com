import { IEntityDates, IRawEntityDates } from './common';
import { IArticleTranslation, IRawArticleTranslation } from './translation';

export interface IRawArticle extends IRawEntityDates {
    id: string;
    translations: IRawArticleTranslation[];
}

export interface IArticle extends IEntityDates {
    id: string;
    translations: IArticleTranslation[];
}
