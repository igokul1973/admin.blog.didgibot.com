import { TArticleFormInput } from '../article-form/types';

type TArticleTranslation = TArticleFormInput['translations'][number];

export interface IAnnotationPopoverProps {
    readonly translation: TArticleTranslation;
}
