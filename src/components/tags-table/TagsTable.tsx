import BaseLinkIconButton from '@/components/base-link-icon-button/BaseLinkIconButton';
import { onPageChange, onRowsPerPageChange } from '@/components/utils';
import { useSelection } from '@/hooks/use-selection';
import { useSnackbar } from '@/hooks/use-snackbar';
import { DELETE_TAG } from '@/operations';
import { ITableProps } from '@/types/pages';
import { ITag } from '@/types/tag';
import { useMutation } from '@apollo/client/react';
import ModeEditOutlined from '@mui/icons-material/ModeEditOutlined';
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
import { JSX, useEffect, useMemo } from 'react';
import { DeleteIconButton } from '../delete-icon-button/DeleteIconButton';

export default function TagsTable({
    setPage,
    setRowsPerPage,
    count = 0,
    rows = [],
    page = 0,
    rowsPerPage = 0,
    loading,
    error
}: ITableProps<ITag>): JSX.Element {
    const { openSnackbar } = useSnackbar();
    const rowIds = useMemo(() => {
        return rows.map((customer) => customer.id);
    }, [rows]);

    const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

    const [
        deleteTagFunction,
        { data: deleteTagData, error: deleteTagError, loading: deleteTagLoading }
    ] = useMutation(DELETE_TAG, {
        update(cache, _, context) {
            const { variables } = context;
            if (!variables) {
                return;
            }
            cache.modify({
                fields: {
                    tags(existingTags = []) {
                        return existingTags.filter(
                            (tag: { __ref: string }) => tag.__ref !== 'TagType:' + variables.id
                        );
                    },
                    count(existingCount) {
                        return existingCount.count - 1;
                    }
                }
            });
        }
    });

    useEffect(() => {
        if (deleteTagData) {
            openSnackbar('Tag deleted successfully', 'success');
        }

        if (deleteTagError) {
            openSnackbar(deleteTagError.message, 'error');
        }
    }, [deleteTagData, deleteTagError, deleteTagLoading, openSnackbar]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
    const selectedAll = rows.length > 0 && selected?.size === rows.length;

    const deleteTag = async (id: string) => {
        try {
            await deleteTagFunction({ variables: { id } });
        } catch (e) {
            if (e instanceof Error || e instanceof String) {
                openSnackbar('Something went wrong while deleting a tag', 'error');
            }
        }
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
                            <TableCell align='center'>Actions</TableCell>
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
                                                <Typography variant='body2'>
                                                    <b>{row.name}</b>
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
                component={Box}
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
