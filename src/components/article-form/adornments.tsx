import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import { InputAdornment } from '@mui/material';

export const CategoryAdornment = () => {
    return (
        <InputAdornment position='start'>
            <CategoryOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        </InputAdornment>
    );
};

export const TagAdornment = () => {
    return (
        <InputAdornment position='start'>
            <TagOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        </InputAdornment>
    );
};
