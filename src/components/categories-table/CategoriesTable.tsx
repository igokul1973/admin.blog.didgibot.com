import BaseLinkIconButton from '@/components/base-link-icon-button/BaseLinkIconButton';
import { onPageChange, onRowsPerPageChange } from '@/components/utils';
import { useSnackbar } from '@/contexts/snackbar/provider';
import { useSelection } from '@/hooks/use-selection';
import { DELETE_CATEGORY } from '@/operations';
import { ICategory } from '@/types/category';
import { ITableProps } from '@/types/pages';
import { useMutation } from '@apollo/client';
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

export interface ICategoryTableRow extends ICategory {}

export default function CategoriesTable({
    setPage,
    setRowsPerPage,
    setCount,
    count = 0,
    rows = [],
    page = 0,
    rowsPerPage = 0,
    loading,
    error
}: ITableProps<ICategoryTableRow>): JSX.Element {
    const { openSnackbar } = useSnackbar();
    const rowIds = useMemo(() => {
        return rows.map((customer) => customer.id);
    }, [rows]);

    const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

    const [
        deleteCategoryFunction,
        { data: deleteCategoryData, error: deleteCategoryError, loading: deleteCategoryLoading }
    ] = useMutation(DELETE_CATEGORY, {
        update(cache, _, context) {
            const { variables } = context;
            if (!variables) {
                return;
            }
            cache.modify({
                fields: {
                    categories(existingCategories = []) {
                        return existingCategories.filter(
                            (category: { __ref: string }) =>
                                category.__ref !== 'CategoryType:' + variables.id
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
        if (deleteCategoryData) {
            openSnackbar('Category deleted successfully', 'success');
        }

        if (deleteCategoryError) {
            openSnackbar(deleteCategoryError.message, 'error');
        }
    }, [deleteCategoryData, deleteCategoryError, deleteCategoryLoading]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
    const selectedAll = rows.length > 0 && selected?.size === rows.length;

    const deleteCategory = async (id: string) => {
        try {
            await deleteCategoryFunction({ variables: { id } });
        } catch (e) {
            if (e instanceof Error || e instanceof String) {
                openSnackbar('Something went wrong while deleting a category', 'error');
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
                                                ariaLabel='Update category'
                                                href={`/categories/${row.id}/update`}
                                                title={'Update category'}
                                            />

                                            <DeleteIconButton
                                                title={'Delete category'}
                                                aria-label='Delete category'
                                                onClick={() => deleteCategory(row.id)}
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
