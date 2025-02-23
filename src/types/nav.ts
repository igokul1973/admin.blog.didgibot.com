export interface INavItemConfig {
    readonly key: string;
    readonly title?: string;
    readonly disabled?: boolean;
    readonly external?: boolean;
    readonly label?: string;
    readonly icon?: string;
    readonly href?: string;
    readonly items?: INavItemConfig[];
    // Matcher cannot be a function in order
    // to be able to use it on the server.
    // If you need to match multiple paths,
    // can extend it to accept multiple matchers.
    readonly matcher?: { type: 'startsWith' | 'equals'; href: string };
}
