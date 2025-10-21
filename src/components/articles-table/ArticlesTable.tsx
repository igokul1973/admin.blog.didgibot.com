import AnnotationPopover from '@/components/annotation-popover/AnnotationPopover';
import BaseLinkIconButton from '@/components/base-link-icon-button/BaseLinkIconButton';
import { DeleteIconButton } from '@/components/delete-icon-button/DeleteIconButton';
import { useSnackbar } from '@/contexts/snackbar/provider';
import { useSelection } from '@/hooks/use-selection';
import { DELETE_ARTICLE } from '@/operations';
import { IArticle } from '@/types/article';
import { ITableProps } from '@/types/pages';
import { useMutation } from '@apollo/client';
import ModeEditOutlined from '@mui/icons-material/ModeEditOutlined';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { useEffect, useMemo } from 'react';
import { onPageChange, onRowsPerPageChange } from '../utils';
import { StyledCard, StyledStack } from './styled';

dayjs.extend(utc);
dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(timezone);

export default function ArticlesTable({
    setPage,
    setRowsPerPage,
    count = 0,
    rows = [],
    page = 0,
    rowsPerPage = 0,
    loading,
    error
}: ITableProps<IArticle>): React.JSX.Element {
    const { openSnackbar } = useSnackbar();
    const rowIds = useMemo(() => {
        return rows.map((customer) => customer.id);
    }, [rows]);

    const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

    const [
        deleteArticleFunction,
        { data: deleteArticleData, error: deleteArticleError, loading: deleteArticleLoading }
    ] = useMutation(DELETE_ARTICLE, {
        update(cache, _, context) {
            const { variables } = context;
            if (!variables) {
                return;
            }
            cache.modify({
                fields: {
                    articles(existingArticles = []) {
                        return existingArticles.filter(
                            (article: { __ref: string }) =>
                                article.__ref !== 'ArticleType:' + variables.id
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
        if (deleteArticleData) {
            openSnackbar('Article deleted successfully', 'success');
        }

        if (deleteArticleError) {
            openSnackbar(deleteArticleError.message, 'error');
        }
    }, [deleteArticleData, deleteArticleError, deleteArticleLoading]);

    const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
    const selectedAll = rows.length > 0 && selected?.size === rows.length;

    const deleteArticle = async (id: string) => {
        try {
            await deleteArticleFunction({ variables: { id } });
        } catch (e) {
            if (e instanceof Error || e instanceof String) {
                openSnackbar('Something went wrong while deleting an article', 'error');
            }
        }
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <StyledCard>
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
                            <TableCell width='150px'>Header</TableCell>

                            <TableCell sx={{ maxWidth: '300px' }}>Content</TableCell>
                            <TableCell width={180}>Categories</TableCell>
                            <TableCell width={100}>Tags</TableCell>
                            <TableCell>Is Published</TableCell>
                            <TableCell>Published At</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Updated At</TableCell>
                            <TableCell align='center'>Actions</TableCell>
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
                                            <StyledStack>
                                                {row.translations.map((translation) => (
                                                    <Box key={translation.header}>
                                                        <b>{translation.header}</b>
                                                    </Box>
                                                ))}
                                            </StyledStack>
                                        </TableCell>
                                        <TableCell sx={{ maxWidth: '300px' }}>
                                            <StyledStack>
                                                {row.translations.map((translation) => (
                                                    <AnnotationPopover
                                                        key={translation.header}
                                                        translation={translation}
                                                    />
                                                ))}
                                            </StyledStack>
                                        </TableCell>
                                        <TableCell>
                                            <StyledStack>
                                                {row.translations.map((translation) => (
                                                    <Box key={translation.header}>
                                                        {translation.category.name}
                                                    </Box>
                                                ))}
                                            </StyledStack>
                                        </TableCell>
                                        <TableCell>
                                            <StyledStack>
                                                {row.translations.map((translation) => (
                                                    <Box key={translation.header}>
                                                        {translation.tags
                                                            .map((tag) => tag.name)
                                                            .join(', ') || 'No tags'}
                                                    </Box>
                                                ))}
                                            </StyledStack>
                                        </TableCell>
                                        <TableCell>
                                            <StyledStack>
                                                {row.translations.map((translation) => (
                                                    <Box key={translation.header}>
                                                        {translation.isPublished ? 'Yes' : 'No'}
                                                    </Box>
                                                ))}
                                            </StyledStack>
                                        </TableCell>
                                        <TableCell>
                                            <StyledStack>
                                                {row.translations.map((translation) => (
                                                    <Box key={translation.header}>
                                                        {translation.publishedAt
                                                            ? translation.publishedAt
                                                                  ?.local()
                                                                  .format('MMM D, YYYY HH:mm:ss')
                                                            : '-----'}
                                                    </Box>
                                                ))}
                                            </StyledStack>
                                        </TableCell>
                                        <TableCell>
                                            {row.createdAt?.local().format('MMM D, YYYY HH:mm:ss')}
                                        </TableCell>
                                        <TableCell>
                                            {row.updatedAt?.local().format('MMM D, YYYY HH:mm:ss')}
                                        </TableCell>
                                        <TableCell
                                            align='center'
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                height: 130
                                            }}
                                        >
                                            <BaseLinkIconButton
                                                icon={ModeEditOutlined}
                                                ariaLabel='Update article'
                                                href={`/articles/${row.id}/update`}
                                                title={'Update article'}
                                            />

                                            <DeleteIconButton
                                                title={
                                                    deleteArticleLoading
                                                        ? 'Deleting...'
                                                        : 'Delete Article'
                                                }
                                                aria-label='Delete tag'
                                                onClick={() => deleteArticle(row.id)}
                                                disabled={deleteArticleLoading}
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
            {/* <Dialog
                open={isDialogOpen}
                onClose={handleDialogClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Disagree</Button>
                </DialogActions>
            </Dialog> */}
        </StyledCard>
    );
}
