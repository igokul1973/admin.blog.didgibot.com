import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { debounce } from '@mui/material';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { JSX } from 'react';

interface IFilterProps {
    readonly setFilter: (filter: string) => void;
    readonly entityToSearch?: string;
    readonly placeholder?: string;
}

export default function Filter({
    setFilter,
    entityToSearch,
    placeholder
}: IFilterProps): JSX.Element {
    const handleChange = debounce((event: React.ChangeEvent<HTMLInputElement>): void => {
        setFilter(event.target.value);
    }, 400);

    return (
        <Card sx={{ p: 2 }}>
            <OutlinedInput
                defaultValue=''
                fullWidth
                placeholder={placeholder ?? `Search ${entityToSearch}`}
                onChange={handleChange}
                startAdornment={
                    <InputAdornment position='start'>
                        <SearchOutlinedIcon fontSize='medium' />
                    </InputAdornment>
                }
                sx={{ maxWidth: '500px' }}
            />
        </Card>
    );
}
