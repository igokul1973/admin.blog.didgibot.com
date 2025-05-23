import { Divider, Popover, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BlockParser from 'editor-react-parser';
import { JSX, SyntheticEvent, useCallback, useRef, useState } from 'react';
// TODO: remove when done working with the EditorJS
// import { BlockParser } from '../editorjs-parser/BlockParser';
import { StyledBlockParserWrapper } from './styled';
import { IAnnotationPopoverProps } from './types';

export default function AnnotationPopover({ translation }: IAnnotationPopoverProps): JSX.Element {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogHeader, setDialogHeader] = useState('');
    const [dialogContent, setDialogContent] = useState('');
    const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    const onClose = () => {
        setIsDialogOpen(false);
        setDialogHeader('');
        setDialogContent('');
        ref.current?.blur();
    };

    const handleMouseOver = useCallback((e: SyntheticEvent<Element, Event>) => {
        // If the current target is a span with class 'cdx-annotation', set the cursor to 'pointer'
        const target = e.target as HTMLSpanElement;
        if (target.tagName === 'SPAN' && target.classList.contains('cdx-annotation')) {
            target.style.cursor = 'pointer';
            setAnchorEl(target);
            setDialogHeader(target.getAttribute('data-title') ?? '');
            setDialogContent(target.getAttribute('data-text') ?? '');
            setIsDialogOpen(true);
        }
    }, []);

    const handleMouseOut = useCallback((e: Event | SyntheticEvent<Element, Event>) => {
        const target = e.target as HTMLSpanElement;
        if (target.tagName === 'SPAN' && target.classList.contains('cdx-annotation')) {
            setIsDialogOpen(false);
        }
    }, []);

    return (
        <>
            <StyledBlockParserWrapper
                key={translation.header}
                className='html'
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <BlockParser
                    data={translation.content}
                    config={{ image: { dimensions: { width: 400 } } }}
                />
            </StyledBlockParserWrapper>
            <Popover
                ref={ref}
                style={{ pointerEvents: 'none' }}
                slotProps={{ paper: { sx: { border: '1px solid #ccc' } } }}
                open={isDialogOpen}
                onClose={onClose}
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: -10, horizontal: 'center' }}
                transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Box sx={{ paddingLeft: '0.3rem', paddingRight: '0.3rem' }}>
                    <Typography
                        variant='h6'
                        color='primary'
                        sx={{ padding: '0.5rem', fontSize: '12px' }}
                    >
                        {dialogHeader}
                    </Typography>
                    <Divider />
                    <Typography sx={{ padding: '0.5rem', maxWidth: '300px', fontSize: '12px' }}>
                        {dialogContent}
                    </Typography>
                </Box>
            </Popover>
        </>
    );
}
