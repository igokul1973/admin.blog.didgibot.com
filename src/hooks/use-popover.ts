import { RefObject, useCallback, useRef, useState } from 'react';

interface IPopoverController<T> {
    anchorRef: RefObject<T | null>;
    handleOpen: () => void;
    handleClose: () => void;
    handleToggle: () => void;
    open: boolean;
}

export function usePopover<T = HTMLElement>(): IPopoverController<T> {
    const anchorRef = useRef<T>(null);
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const handleToggle = useCallback(() => {
        setOpen((prevState) => !prevState);
    }, []);

    return { anchorRef, handleClose, handleOpen, handleToggle, open };
}
