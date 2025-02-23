import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

import { useSelection } from '@/hooks/use-selection';
import { paths } from '@/paths';
import { IArticle } from '@/types/article';
import { ITableProps } from '@/types/pages';
import { useMemo } from 'react';
import { Navigate } from 'react-router';
import { onPageChange, onRowsPerPageChange } from '../utils';

export interface IArticlesTableRow extends IArticle {}

export default function ArticlesTable({
    setPage,
    setRowsPerPage,
    count = 0,
    rows = [],
    page = 0,
    rowsPerPage = 0,
    loading,
    error
}: ITableProps<IArticlesTableRow>): React.JSX.Element {
    const rowIds = useMemo(() => {
        return rows.map((customer) => customer.id);
    }, [rows]);

    const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

    if (error) {
        debugger;
        const m = error.message.toLocaleLowerCase();
        if (m.startsWith('unauthorized user') || m.startsWith('invalid or missing jwt token')) {
            return <Navigate replace to={paths.auth.signIn} />;
        }

        // TODO: Handle error properly
        return <div>Error: {error.message}</div>;
    }

    const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
    const selectedAll = rows.length > 0 && selected?.size === rows.length;

    return (
        <Card>
            <Box sx={{ overflowX: 'auto' }}>
                <Table sx={{ minWidth: '800px' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell padding='checkbox'>
                                <Checkbox
                                    checked={selectedAll}
                                    indeterminate={selectedSome}
                                    onChange={(event) => {
                                        if (event.target.checked) {
                                            selectAll();
                                        } else {
                                            deselectAll();
                                        }
                                    }}
                                />
                            </TableCell>
                            <TableCell width={150}>Header</TableCell>
                            <TableCell width={250}>Content</TableCell>
                            <TableCell width={180}>Categories</TableCell>
                            <TableCell width={100}>Tags</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Updated At</TableCell>
                            <TableCell>Is Published</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={5} sx={{ py: 3 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Typography variant='h6'>Loading...</Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ) : (
                            rows.map((row) => {
                                const isSelected = selected?.has(row.id);

                                return (
                                    <TableRow hover key={row.id} selected={isSelected}>
                                        <TableCell padding='checkbox'>
                                            <Checkbox
                                                checked={isSelected}
                                                onChange={(event) => {
                                                    if (event.target.checked) {
                                                        selectOne(row.id);
                                                    } else {
                                                        deselectOne(row.id);
                                                    }
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Stack
                                                sx={{ alignItems: 'center' }}
                                                direction='row'
                                                spacing={2}
                                            >
                                                <Typography variant='subtitle2'>
                                                    {row.translations[0].header}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell>
                                            <Stack
                                                sx={{ alignItems: 'center' }}
                                                direction='row'
                                                spacing={2}
                                            >
                                                <Typography
                                                    variant='subtitle2'
                                                    dangerouslySetInnerHTML={{
                                                        __html: row.translations[0].content
                                                    }}
                                                ></Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell>{row.translations[0].category.name}</TableCell>
                                        <TableCell>
                                            {row.translations[0].tags
                                                .map((tag) => tag.name)
                                                .join(', ')}
                                        </TableCell>
                                        <TableCell>
                                            {dayjs(row.createdAt).format('MMM D, YYYY')}
                                        </TableCell>
                                        <TableCell>
                                            {dayjs(row.updatedAt).format('MMM D, YYYY')}
                                        </TableCell>
                                        <TableCell>
                                            {row.translations[0].isPublished ? 'Yes' : 'No'}
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        )}
                    </TableBody>
                </Table>
            </Box>
            <Divider />
            <TablePagination
                component='div'
                count={count}
                onPageChange={onPageChange(setPage)}
                onRowsPerPageChange={onRowsPerPageChange(setRowsPerPage)}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
}
