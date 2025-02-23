import { paths } from '@/paths';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Box, Button, Stack, Typography } from '@mui/material';
import { JSX } from 'react';
import { Link, useNavigate } from 'react-router';

interface IEntitiesPageHeaderProps {
    readonly entityNamePlural: string;
    readonly isDisplayImportExport?: boolean;
    readonly isDisplayBackButton?: boolean;
    readonly isDisplayAddButton?: boolean;
    readonly isDisplayUpdateButton?: boolean;
}

export default function EntitiesPageHeader({
    entityNamePlural,
    isDisplayImportExport = true,
    isDisplayBackButton = false,
    isDisplayAddButton = false,
    isDisplayUpdateButton = false
}: IEntitiesPageHeaderProps): JSX.Element {
    const navigate = useNavigate();

    return (
        <Stack direction='row' spacing={3}>
            <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
                <Typography variant='h1'>{entityNamePlural}</Typography>
                {isDisplayBackButton && (
                    <Stack direction='row' spacing={1}>
                        <Button
                            component={Link}
                            to={paths.dashboard.tags}
                            color='inherit'
                            startIcon={<KeyboardBackspaceOutlinedIcon fontSize='medium' />}
                        >
                            Go back
                        </Button>
                    </Stack>
                )}

                {isDisplayImportExport && (
                    <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }}>
                        <Button
                            color='inherit'
                            startIcon={<FileUploadOutlinedIcon fontSize='medium' />}
                        >
                            Import
                        </Button>
                        <Button
                            color='inherit'
                            startIcon={<FileDownloadOutlinedIcon fontSize='medium' />}
                        >
                            Export
                        </Button>
                    </Stack>
                )}
            </Stack>
            {isDisplayAddButton && (
                <Box>
                    <Button
                        onClick={() => {
                            navigate(`/${entityNamePlural.toLocaleLowerCase()}/create`);
                        }}
                        startIcon={<AddOutlinedIcon fontSize='medium' />}
                        variant='contained'
                    >
                        Add
                    </Button>
                </Box>
            )}
            {isDisplayUpdateButton && (
                <Box>
                    <Button
                        onClick={() => {
                            navigate(`/${entityNamePlural.toLocaleLowerCase()}/update`);
                        }}
                        startIcon={<AddOutlinedIcon fontSize='medium' />}
                        variant='contained'
                    >
                        Update
                    </Button>
                </Box>
            )}
        </Stack>
    );
}
