import { paths } from '@/paths';
import type { INavItemConfig } from '@/types/nav';

export const navItems = [
    { key: 'articles', title: 'Articles', href: paths.dashboard.articles, icon: 'articles' },
    {
        key: 'categories',
        title: 'Categories',
        href: paths.dashboard.categories,
        icon: 'categories'
    },
    { key: 'tags', title: 'Tags', href: paths.dashboard.tags, icon: 'tags' }
] satisfies INavItemConfig[];
