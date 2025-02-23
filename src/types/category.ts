import { IEntityDates, IRawEntityDates } from './common';

export interface IRawCategory extends IRawEntityDates {
    id: string;
    name: string;
}

export interface ICategory extends IEntityDates {
    id: string;
    name: string;
}
