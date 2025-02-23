import { IEntityDates, IRawEntityDates } from './common';

export interface IRawTag extends IRawEntityDates {
    id: string;
    name: string;
}

export interface ITag extends IEntityDates {
    id: string;
    name: string;
}
