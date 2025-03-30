import { ApolloError } from '@apollo/client';

export interface ITableProps<T> {
    readonly setPage: (page: number) => void;
    readonly setCount: (count: number) => void;
    readonly setRowsPerPage: (rowsPerPage: number) => void;
    readonly count?: number;
    readonly page?: number;
    readonly rows?: T[];
    readonly rowsPerPage?: number;
    readonly loading?: boolean;
    readonly error?: ApolloError;
}
