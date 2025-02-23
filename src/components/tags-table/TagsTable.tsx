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

import BaseLinkIconButton from '@/base-link-icon-button/BaseLinkIconButton';
import { onPageChange, onRowsPerPageChange } from '@/components/utils';
import { useSelection } from '@/hooks/use-selection';
import { paths } from '@/paths';
import { ITableProps } from '@/types/pages';
import { ITag } from '@/types/tag';
import { gql, useMutation } from '@apollo/client';
import ModeEditOutlined from '@mui/icons-material/ModeEditOutlined';
import { JSX, useEffect, useMemo } from 'react';
import { Navigate } from 'react-router';
import { DeleteIconButton } from '../delete-icon-button/DeleteIconButton';

export interface ITagTableRow extends ITag {}

const DELETE_TAG = gql`
    mutation delete_tag($id: String!) {
        delete_tag(data: { id: $id }) {
            id
        }
    }
`;

export default function TagsTable({
    setPage,
    setRowsPerPage,
    count = 0,
    rows = [],
    page = 0,
    rowsPerPage = 0,
    loading,
    error
}: ITableProps<ITagTableRow>): JSX.Element {
    const rowIds = useMemo(() => {
        return rows.map((customer) => customer.id);
    }, [rows]);

    const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

    const [
        deleteTagFunction,
        { data: deleteTagData, error: deleteTagError, loading: deleteTagLoading }
    ] = useMutation(DELETE_TAG);

    useEffect(() => {
        if (deleteTagData) {
            // TODO: Handle deletion
            console.log('Deleted id: ', deleteTagData.delete_tag.id);
        }

        if (deleteTagError) {
            // TODO: Handle deletion
            console.log('Deleted id: ', deleteTagData.delete_tag.id);
        }
    }, [deleteTagData, deleteTagError, deleteTagLoading]);

    if (error) {
        if (error.message === 'Unauthorized user') {
            return <Navigate replace to={paths.auth.signIn} />;
        }

        // TODO: Handle error properly
        return <div>Error: {error.message}</div>;
    }

    const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
    const selectedAll = rows.length > 0 && selected?.size === rows.length;

    const deleteTag = async (id: string) => {
        // TODO: Handle deletion
        console.log('Deleting id: ', id);
        await deleteTagFunction({ variables: { id } });
    };

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
                            <TableCell width={400}>Name</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Updated At</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={3} sx={{ py: 3 }}>
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
                                                    {row.name}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell>
                                            {dayjs(row.createdAt).format('MMM D, YYYY')}
                                        </TableCell>
                                        <TableCell>
                                            {dayjs(row.updatedAt).format('MMM D, YYYY')}
                                        </TableCell>
                                        <TableCell
                                            align='center'
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <BaseLinkIconButton
                                                icon={ModeEditOutlined}
                                                ariaLabel='Update tag'
                                                href={`/tags/${row.id}/update`}
                                                title={'Update tag'}
                                            />

                                            <DeleteIconButton
                                                title={
                                                    deleteTagLoading ? 'Deleting...' : 'Delete tag'
                                                }
                                                aria-label='Delete tag'
                                                onClick={() => deleteTag(row.id)}
                                                disabled={deleteTagLoading}
                                            />
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
