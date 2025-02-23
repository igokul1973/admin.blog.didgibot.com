import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { StyledLogoIcon, StyledLogoWrapper } from './styled';
import { IProps } from './types';

const DidgibotLogo: FC<IProps> = ({ color }) => {
    return (
        <StyledLogoWrapper component='span' sx={{ color }}>
            <StyledLogoIcon />
            <Typography variant='h4' sx={{ fontFamily: 'Roboto, sans-serif' }}>
                Didgibot
            </Typography>
        </StyledLogoWrapper>
    );
};
export default DidgibotLogo;
