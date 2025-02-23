import { ChangeEvent, MouseEvent } from 'react';

export const onPageChange = (fn: (page: number) => void) => {
    return (_: MouseEvent<HTMLButtonElement> | null, page: number): void => {
        fn(page);
    };
};

export const onRowsPerPageChange = (fn: (rowsPerPage: number) => void) => {
    return (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        fn(+e.target.value);
    };
};
