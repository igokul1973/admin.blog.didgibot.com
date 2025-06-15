import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { ButtonStyled, StyledButtonWrapper } from './styled';

const Scroller = () => {
    const [showUpButton, setShowUpButton] = useState(false);
    const [showDownButton, setShowDownButton] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShowUpButton(window.scrollY >= 1000);
            setShowDownButton(
                document.documentElement.scrollHeight - (window.innerHeight + window.scrollY) >= 800
            );
            console.log(
                'window.scrollY + window.innerHeight: ',
                window.scrollY + window.innerHeight
            );
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    return (
        <StyledButtonWrapper>
            {showUpButton && (
                <ButtonStyled variant='contained' onClick={handleScrollToTop}>
                    <ArrowUpward />
                </ButtonStyled>
            )}
            {showDownButton && (
                <ButtonStyled variant='contained' onClick={handleScrollToBottom}>
                    <ArrowDownward />
                </ButtonStyled>
            )}
        </StyledButtonWrapper>
    );
};

export default Scroller;
