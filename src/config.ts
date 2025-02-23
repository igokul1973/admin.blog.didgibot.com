import { getSiteURL } from '@/lib/get-site-url';
import { LogLevel } from '@/lib/logger';

export interface IConfig {
    site: { name: string; description: string; themeColor: string; url: string };
    logLevel: keyof typeof LogLevel;
}

export const config: IConfig = {
    site: { name: 'Devias Kit', description: '', themeColor: '#090a0b', url: getSiteURL() },
    logLevel: LogLevel.ALL
};
