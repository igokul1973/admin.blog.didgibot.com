import { LanguageEnum } from '@/types/translation';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

interface IProps {
    readonly language: LanguageEnum;
    readonly setLanguage: (language: LanguageEnum) => void;
}

const LanguageForm = ({ language, setLanguage }: IProps) => {
    return (
        <form>
            <FormControl>
                <FormLabel>Language</FormLabel>
                <RadioGroup
                    aria-labelledby='language'
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as LanguageEnum)}
                >
                    <FormControlLabel value={LanguageEnum.EN} control={<Radio />} label='English' />
                    <FormControlLabel value={LanguageEnum.RU} control={<Radio />} label='Russian' />
                </RadioGroup>
            </FormControl>
        </form>
    );
};

export default LanguageForm;
