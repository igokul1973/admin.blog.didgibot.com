import { IArticle, IArticlePartial, IRawArticle } from '@/types/article';
import { ICategory, IRawCategory } from '@/types/category';
import { IRawTag, ITag } from '@/types/tag';
import {
    IArticleTranslation,
    IContent,
    IRawArticleTranslation,
    LanguageEnum
} from '@/types/translation';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { ChangeEvent, MouseEvent } from 'react';
import { TArticleFormInput } from './article-form/types';

dayjs.extend(utc);
dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(timezone);

export const onPageChange = (fn: (page: number) => void) => {
    return (_: MouseEvent<HTMLButtonElement> | null, page: number): void => {
        fn(page);
    };
};

export const onRowsPerPageChange = (fn: (rowsPerPage: number) => void) => {
    return (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        fn(+e.target.value);
    };
};

export const transformRawCategory = (
    category: IRawCategory,
    isRemoveDateFields = false
): ICategory => {
    const { id, name, created_at, updated_at } = category;
    let c: ICategory = { id, name };

    if (!isRemoveDateFields) {
        c = {
            ...c,
            createdAt: dayjs.utc(created_at),
            updatedAt: dayjs.utc(updated_at)
        };
    }
    return c;
};

export const transformRawCategories = (
    categories: IRawCategory[],
    isRemoveDateFields = false
): ICategory[] => {
    return categories.map((category) => transformRawCategory(category, isRemoveDateFields));
};

export const transformRawTag = (tag: IRawTag, isRemoveDateFields = false): ITag => {
    const { id, name, created_at, updated_at } = tag;
    let t: ITag = { id, name };

    if (!isRemoveDateFields) {
        t = {
            ...t,
            createdAt: dayjs.utc(created_at),
            updatedAt: dayjs.utc(updated_at)
        };
    }
    return t;
};

export const transformRawTags = (tags: IRawTag[], isRemoveDateFields = false): ITag[] => {
    return tags.map((tag) => transformRawTag(tag, isRemoveDateFields));
};

export function transformRawContent(rawContent: IContent) {
    const { __typename, version, time, blocks, ...content } = rawContent;
    const transformedBlocks = [];
    for (const block of blocks) {
        const { __typename, ...blockRest } = block;
        transformedBlocks.push(blockRest);
    }

    const transformedContent: IContent = {
        ...content,
        blocks: transformedBlocks
    };

    if (version !== null) {
        transformedContent.version = version;
    }

    if (time !== null) {
        transformedContent.time = time;
    }

    return transformedContent;
}

export const transformRawTranslations = (
    translations: IRawArticleTranslation[],
    removeTranslationFields: (keyof IArticleTranslation)[] = [],
    isRemoveDateFields = false
) => {
    return translations.map((t) => {
        const {
            is_published,
            published_at,
            category: rawCategory,
            content: rawContentSnakeCase,
            tags: rawTags,
            ...rest
        } = t;

        const rawContent = camelCaseKeys<IContent, IContent>(rawContentSnakeCase);

        const category = transformRawCategory(rawCategory, isRemoveDateFields);
        const tags = transformRawTags(rawTags, isRemoveDateFields);
        const content = removeTranslationFields.includes('__typename')
            ? transformRawContent(rawContent)
            : rawContent;

        const transformedTranslation = {
            ...rest,
            content,
            category,
            tags,
            isPublished: is_published,
            publishedAt: published_at ? dayjs.utc(published_at) : undefined
        } as IArticleTranslation;

        // type TTransformedTranslationKeys = keyof typeof transformedTranslation;

        if (removeTranslationFields.length > 0) {
            const newTranslation = (
                Object.keys(transformedTranslation) as (keyof IArticleTranslation)[]
            ).reduce<Partial<IArticleTranslation>>((acc, key) => {
                if (!removeTranslationFields.includes(key)) {
                    (acc as Record<string, unknown>)[key] = transformedTranslation[key];
                }
                return acc;
            }, {});

            return newTranslation;
        }

        return transformedTranslation;
    });
};

export const transformRawArticle = (
    article: IRawArticle,
    removeTranslationFields: (keyof IArticle['translations'][number] | '__typename')[] = [],
    isRemoveDateFields = false
): IArticlePartial => {
    const { translations: rawTranslations, created_at, updated_at, ...rest } = article;
    const translations = transformRawTranslations(
        rawTranslations,
        removeTranslationFields,
        isRemoveDateFields
    );
    let a: IArticlePartial = {
        ...rest,
        translations
    };

    console.log('a: ', a);

    if (!isRemoveDateFields) {
        a = {
            ...a,
            createdAt: dayjs.utc(created_at),
            updatedAt: dayjs.utc(updated_at)
        };
    }

    return a;
};

export const transformRawArticles = (rawArticles: IRawArticle[]): IArticlePartial[] => {
    return rawArticles.map((rawArticle: IRawArticle): IArticlePartial => {
        return transformRawArticle(rawArticle);
    });
};

export const getEmptyTranslationByLanguage = (
    language: LanguageEnum
): TArticleFormInput['translations'][number] => {
    return {
        language,
        header: '',
        content: {
            blocks: []
        },
        category: null,
        tags: [],
        isPublished: false
    };
};

export const getEmptyArticle = (): TArticleFormInput => {
    return {
        id: null,
        translations: [
            getEmptyTranslationByLanguage(LanguageEnum.EN),
            getEmptyTranslationByLanguage(LanguageEnum.RU)
        ]
    };
};

export const deepDiff = <T extends Record<string, unknown> | null>(
    obj1: T,
    obj2: T
): { [key: string]: unknown } => {
    if (obj1 === null && obj2 === null) {
        return {};
    }

    if (obj1 === null) {
        return obj2 ? { ...obj2 } : {};
    }

    if (obj2 === null) {
        return obj1 ? { ...obj1 } : {};
    }
    const diff: { [key: string]: unknown } = {};

    Object.keys(obj1).forEach((key) => {
        if (obj2 && !Object.hasOwn(obj2, key)) {
            diff[key] = obj1[key];
        } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            const nestedDiff = deepDiff(
                obj1[key] as Record<string, unknown>,
                obj2[key] as Record<string, unknown>
            );
            if (Object.keys(nestedDiff).length > 0) {
                diff[key] = nestedDiff;
            }
        } else if (obj1[key] !== obj2[key]) {
            diff[key] = obj1[key];
        }
    });

    Object.keys(obj2).forEach((key) => {
        if (!Object.hasOwn(obj1, key)) {
            diff[key] = obj2[key];
        }
    });

    return diff;
};

/**
 * Deep compares two objects to determine if they are equal
 *
 * @param obj1 - The first object to compare
 * @param obj2 - The second object to compare
 * @returns true if the objects are equal, false otherwise
 */
export const areObjectsDeepEqual = (obj1: unknown, obj2: unknown): boolean => {
    const isSameObjects = (obj1: object, obj2: object): boolean => {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            if (
                !areObjectsDeepEqual(
                    (obj1 as Record<string, unknown>)[key],
                    (obj2 as Record<string, unknown>)[key]
                )
            ) {
                return false;
            }
        }
        return true;
    };

    // Check if the objects are of the same type
    if (typeof obj1 !== typeof obj2) {
        return false;
    }

    // Check if the objects are arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) {
            return false;
        }
        for (let i = 0; i < obj1.length; i++) {
            if (!areObjectsDeepEqual(obj1[i], obj2[i])) {
                return false;
            }
        }
        return true;
    }

    // Check if the objects are the same
    if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
        return isSameObjects(obj1, obj2);
    }

    // Compare primitive values
    return obj1 === obj2;
};

export const camelCaseKeys = <
    T extends Record<keyof T, unknown>,
    K extends Record<keyof K, unknown>
>(
    obj: T | T[]
): K => {
    if (Array.isArray(obj)) {
        return obj.map((item) => camelCaseKeys<T, K>(item)) as unknown as K;
    }

    if (typeof obj === 'object' && obj !== null) {
        return (Object.keys(obj) as Array<keyof T>).reduce<K>((acc, key) => {
            const camelKey = toCamelCase<keyof T, keyof K>(key);
            acc[camelKey] = camelCaseKeys(obj[key]);
            return acc;
        }, {} as K);
    }

    return obj;
};

const toCamelCase = <T, K>(str: T): K => {
    return (str as string).replace(/_([a-z])/g, (_: string, group: string) =>
        group.toUpperCase()
    ) as K;
};

/**
 * Recursively converts the keys of an object or an array of objects from camelCase to snake_case.
 *
 * @template T - The type of the input object or array.
 * @template K - The type of the returned object or array.
 * @param {T | T[]} obj - The object or array of objects to convert.
 * @returns {K} - A new object or array with keys in snake_case format.
 *
 * @remarks
 * - If the input is an array, each element is converted and returned as an array.
 * - If the input is an object, each key is converted to snake_case, excluding keys that are '__typename'.
 * - The function is recursive, converting all nested objects and arrays.
 * - Primitive values are returned as-is.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const snakeCaseKeys = <T extends Record<string, any>, K extends Record<string, any>>(
    obj: T | T[]
): K => {
    if (Array.isArray(obj)) {
        return obj.map((item) => snakeCaseKeys(item)) as unknown as K;
    }

    if (typeof obj === 'object' && obj !== null) {
        return (Object.keys(obj) as Array<keyof T>).reduce<K>((acc, key) => {
            if (key === '__typename') {
                return acc;
            }
            const snakeKey = toSnakeCase<keyof T, keyof K>(key);
            acc[snakeKey] = snakeCaseKeys(obj[key]);
            return acc;
        }, {} as K);
    }

    return obj;
};

const toSnakeCase = <T, K>(str: T): K => {
    return (str as string).replace(
        /([A-Z])/g,
        (_: string, group: string) => `_${group.toLowerCase()}`
    ) as K;
};

/**
 * Converts an article title into an SEO-optimized URL slug.
 *
 * @param {string} title - The article title to convert
 * @param {string|null} suffix - Optional suffix to append to the slug
 * @returns {string} SEO-friendly URL slug
 */
export const generateSlug = (title: string, suffix?: string) => {
    // Convert to lowercase
    let slug = title.toLowerCase();

    // Remove accents and convert to ASCII
    slug = slug.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');

    // Replace spaces and underscores with hyphens
    slug = slug.replace(/[\s_]+/g, '-');

    // Remove all non-alphanumeric characters except hyphens
    slug = slug.replace(/[^a-z0-9-]/g, '');

    // Add suffix if provided
    if (suffix) {
        slug += '-' + suffix.toLocaleLowerCase();
    }

    // Remove common stop words (optional but recommended for SEO)
    const stopWords = [
        'a',
        'an',
        'and',
        'at',
        'by',
        'for',
        'in',
        'is',
        'it',
        'on',
        'or',
        'the',
        'to',
        'with'
    ];
    let words = slug.split('-');
    // Keep stop word if it is first
    words = words.filter((w, index) => !stopWords.includes(w) || index === 0);
    slug = words.join('-');

    // Remove consecutive hyphens and trim hyphens from ends
    slug = slug
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '')
        .trim();

    return slug;
};
