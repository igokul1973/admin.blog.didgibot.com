import { Dayjs } from 'dayjs';

export interface IRawEntityDates {
    created_at: string;
    updated_at: string;
}

export interface IEntityDates {
    createdAt?: Dayjs;
    updatedAt?: Dayjs;
}
