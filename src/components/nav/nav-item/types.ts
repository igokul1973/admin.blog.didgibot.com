import { INavItemConfig } from '@/types/nav';

export interface INavItemProps extends Omit<INavItemConfig, 'items'> {
    readonly pathname: string;
    readonly onClose: () => void;
}
