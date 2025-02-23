import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import UsersIcon from '@mui/icons-material/People';
import UserIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import type SvgIcon from '@mui/material/SvgIcon';

import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';

export const navIcons = {
    articles: ArticleOutlinedIcon,
    categories: CategoryOutlinedIcon,
    tags: TagOutlinedIcon,
    'gear-six': SettingsIcon,
    'plugs-connected': ElectricalServicesIcon,
    'x-square': DisabledByDefaultOutlinedIcon,
    user: UserIcon,
    users: UsersIcon
} as Record<string, typeof SvgIcon>;
