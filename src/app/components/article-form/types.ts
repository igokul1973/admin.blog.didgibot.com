import { IArticleCreateInput, ICategory } from '@src/generated/types';

export type TArticleFormVariables = IArticleCreateInput & { category: ICategory };
