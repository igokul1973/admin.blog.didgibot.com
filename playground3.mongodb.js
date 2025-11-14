/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

import { rusTextGenerator } from 'rus-text-gen';

const database = 'didgibot';
const collection = 'NEW_COLLECTION_NAME';
const t = rusTextGenerator.createText(10);

// The current database to use.
use(database);

// db.articles.find();

// db.articles.deleteMany({});

// db.categories.update({ name: "Cat 1" }, { $set: { name: "Cat 2" } });

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

rusTextGenerator.createText(10);

const categoryRussian = [
    {
        name: 'Питон',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'CategoryType'
    },
    {
        name: 'Джаваскрипт',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'CategoryType'
    },
    {
        name: 'Личное',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'CategoryType'
    },
    {
        name: 'Программирование',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'CategoryType'
    },
    {
        name: 'Блог',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'CategoryType'
    }
];

const categoryEnglish = [
    {
        name: 'DevOps',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'CategoryType'
    },
    {
        name: 'Programming',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'CategoryType'
    },
    {
        name: 'Personal',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'CategoryType'
    },
    {
        name: 'Blog',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'CategoryType'
    },
    {
        name: 'Python',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'CategoryType'
    },
    {
        name: 'JavaScript',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'CategoryType'
    }
];
const tagsEnglish = [
    {
        name: 'С++',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'TagType'
    },
    {
        name: 'Closures',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'TagType'
    },
    {
        name: 'Notifications',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'TagType'
    },
    {
        name: 'Localization',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'TagType'
    },
    {
        name: 'Miscellaneous',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'TagType'
    }
];

const tagsRussian = [
    {
        name: 'Локализация',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'TagType'
    },
    {
        name: 'Уведомления',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'TagType'
    },
    {
        name: 'Реактивность',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'TagType'
    },
    {
        name: 'Замыкания',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'TagType'
    },
    {
        name: 'Редкое',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'TagType'
    },
    {
        name: 'Разное',
        created_at: new Date('2022-05-16T18:28:49.000'),
        updated_at: new Date('2022-05-16T18:28:49.000'),
        __typename: 'TagType'
    }
];

// db.categories.insert(categoryEnglish);
// db.categories.insert(categoryRussian);
// db.tags.insert(tagsEnglish);
// db.tags.insert(tagsRussian);

// const user = db.users.findOne();
// user.id = user._id;
// delete user._id;
// delete user.articles;

/**
 * Create random ID string containing 11 [a-zA-Z0-9-_] chars
 *
 * @returns {string}
 */
function randomId() {
    const length = 11;
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_';
    let text = '';
    for (let i = 0; i < length; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
}

const blocks = [
    {
        id: randomId(),
        type: 'paragraph',
        data: {
            text: 'Another text here and more editing document'
        },
        __typename: 'ContentBlockType'
    },
    {
        id: randomId(),
        type: 'code',
        data: {
            code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
            showlinenumbers: true,
            show_copy_button: true,
            lang: 'scss'
        },
        __typename: 'ContentBlockType'
    }
];

const fakeArticles = [
    {
        translations: [
            {
                language: 'en',
                header: 'First articles',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'xXxg4h6Z1O',
                            type: 'paragraph',
                            data: {
                                text: 'Another text here and more editing document'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'N7v-KpR8aT',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Шестая статтья',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'F7a2hG3yLl',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'bqZL6O_1Xm9',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2021-04-15T07:49:26.000'),
        updated_at: ISODate('2021-01-06T05:32:25.000'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T01:38:03.847'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Ninth human on earth',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'a1B2c3D4e5F',
                            type: 'paragraph',
                            data: {
                                text: 'Another very bad trial and text here and more editing document'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'xY1zA9BcD3_',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Десятый человек на Земле',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: '7aXq6L4sZ3V',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: '9pK7xS0K9Wl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2023-08-24T01:10:36.000'),
        updated_at: ISODate('2021-06-05T14:15:19.000'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T01:38:03.847'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Rabbits and rabbies',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'hK8s3g5V3xS',
                            type: 'paragraph',
                            data: {
                                text: 'Very long and may be not the best in the West'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'A1bC2-D3eF4',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Кролики и рабби',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'hY8XzB3v9l-',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'X9fG3_lQzB',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2022-05-16T18:28:49.000'),
        updated_at: ISODate('2021-11-15T10:01:15.000'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T01:38:03.847'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Full moon',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'xH8n3ZbP3O',
                            type: 'paragraph',
                            data: {
                                text: 'Kaching is not a real word. Lose it!'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'b7hQ9-XyZ2',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Забытый всеми стул оказался кладом.',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'xU7J6pNpC7',
                            type: 'paragraph',
                            data: {
                                text: 'Great and not only!'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'F8a6_xHqRl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2021-01-03T21:51:48.000'),
        updated_at: ISODate('2022-01-16T04:41:43.000'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T01:38:03.847'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Ninth human on earth',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'F7h9_xfZ2P',
                            type: 'paragraph',
                            data: {
                                text: 'Another very bad trial and text here and more editing document'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'F2h5_xfZ2P',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Десятый человек на Земле',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'H7r9x3FqMM',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'h4xH9v_Wtl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2023-10-25T02:00:28.000'),
        updated_at: ISODate('2022-03-04T10:32:58.000'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T01:38:03.847'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Horses from Mars',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'F7h8xK9lZ1O',
                            type: 'paragraph',
                            data: {
                                text: 'Next tough guy - next touchdown'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'ZyXwV4hGx1',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Травести шоу давно закончилось',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1748026125951,
                    blocks: [
                        {
                            id: 'Kx4J9uVbqL',
                            type: 'paragraph',
                            data: {
                                text: 'Волосатый друг лысого оказался медведем'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'aBcD9X_YzQ',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2022-09-18T04:02:03.000'),
        updated_at: ISODate('2022-10-12T17:42:22.000'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T01:38:03.847'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'First articles',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'x8hj3_9qf1p',
                            type: 'paragraph',
                            data: {
                                text: 'Another text here and more editing document'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'F3x4pBz_Wt1',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Шестая статтья',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'xW9yH6rJ3hM',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'G7a6_xnH5lM',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2021-11-06T18:23:28.000'),
        updated_at: ISODate('2023-01-15T20:28:22.000'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T01:38:03.847'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Rabbits and rabbies',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'XyZ1_9Ab8Qw',
                            type: 'paragraph',
                            data: {
                                text: 'Very long and may be not the best in the West'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'A1b2_Cd3Ef4',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Кролики и рабби',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'zVhGq7t9x1K',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: '9lK3hV9pZ_l',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2024-06-21T03:55:51.000'),
        updated_at: ISODate('2023-05-22T20:06:53.000'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T01:38:03.847'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'First articles',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'Fh8s_xc5-Z1P',
                            type: 'paragraph',
                            data: {
                                text: 'Very strange matters'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'Jm3a8ZqL2Xk',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Джаваскрипт все еще скрипит',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'H9aZqF6zJG',
                            type: 'paragraph',
                            data: {
                                text: 'Неизвестность Пелевина'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'hY8XzB3v9l',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2021-05-24T23:39:25.000Z'),
        updated_at: ISODate('2023-06-14T14:10:20.000Z'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T01:38:03.847'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Fifth article',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'F3hj9-fZ2P',
                            type: 'paragraph',
                            data: {
                                text: 'Another very bad trial and text here and more editing document'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'hYpA9UxHqV5',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Четвертая',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'A1b2C3d4E5F',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'X9fG3_lQzB',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2023-05-24T00:24:07.000'),
        updated_at: ISODate('2023-11-19T23:59:14.000'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T01:38:03.847'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Horses from Mars',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: '0Sp_dAnZ1O',
                            type: 'paragraph',
                            data: {
                                text: 'Next tough guy - next touchdown'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'S_WeCZtmx1',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Травести шоу давно закончилось',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1748026125951,
                    blocks: [
                        {
                            id: 'km26_LzXVC',
                            type: 'paragraph',
                            data: {
                                text: 'Волосатый друг лысого оказался медведем'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'bQdL6W_WDL',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2022-11-23T04:40:32.487'),
        updated_at: ISODate('2023-11-27T19:48:49.070'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Third and more',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'A1b_C9dE2Fg',
                            type: 'paragraph',
                            data: {
                                text: 'Very long and may be not the best in the West'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'F7h9_xf3Uq',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Триста на два',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'Z4k9_L0tBc',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'K6h9_xf3Uq1',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2024-04-02T03:26:32.000'),
        updated_at: ISODate('2024-01-12T11:21:07.000'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Third article',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'F8a_zhVt2P',
                            type: 'paragraph',
                            data: {
                                text: 'Another very bad trial and text here and more editing document'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'QqFfoktJv4',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Tретья статья',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'Fq8a9UxU9M',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'hYp9xGv_Mtl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2023-10-06T03:05:01.000'),
        updated_at: ISODate('2024-03-04T02:48:02.000'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Cabochones and their properties',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: '00rL8jlK2P',
                            type: 'paragraph',
                            data: {
                                text: 'Lost treasures be mine'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'QdJf_ktJv4',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Замыкание как признак величия',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'k_ULhG5mMM',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'bNAGnw-Wtl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2024-05-02T02:40:32.487'),
        updated_at: ISODate('2024-05-06T06:26:38.018'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Freaks and their shows',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'G3x4VfKu1O',
                            type: 'paragraph',
                            data: {
                                text: 'The snadard way of losing it'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'J8kL3mN9P1Z',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Шестьсотая',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'Km26_JroTc9',
                            type: 'paragraph',
                            data: {
                                text: 'Маньяк маньяку не товарищ'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'aB3D_9hT2Q-',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2021-11-26T06:09:14.000'),
        updated_at: ISODate('2024-07-26T22:42:16.000'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Cabochones and their properties',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: '8xHJqXhU2P',
                            type: 'paragraph',
                            data: {
                                text: 'Lost treasures be mine'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'F7hJG6pRv4',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Замыкание как признак величия',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'kxKu8dFVtM9',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'Qx4G7yRz1_t',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2021-09-21T10:20:59.000'),
        updated_at: ISODate('2024-09-19T19:52:16.000'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Fifth article',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: '0_r_8jfZ2P',
                            type: 'paragraph',
                            data: {
                                text: 'Another very bad trial and text here and more editing document'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'Qq-dEktJv4',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Четвертая',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'k--0_G5mMM',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'blanNW_Wtl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2025-02-23T02:40:32.487'),
        updated_at: ISODate('2025-04-06T17:26:38.018'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Freaks and their shows',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'CD_G8c-Z1O',
                            type: 'paragraph',
                            data: {
                                text: 'The snadard way of losing it'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'QqrRrrRtx0',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Шестьсотая',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'km26_JroTC',
                            type: 'paragraph',
                            data: {
                                text: 'Маньяк маньяку не товарищ'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'bqZL60KN-_',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2025-03-22T04:56:32.487'),
        updated_at: ISODate('2025-04-27T06:16:18.018'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'First articles',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: '0Dpb8jfZ1P',
                            type: 'paragraph',
                            data: {
                                text: 'Another text here and more editing document'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'Qq-FaZtJx1',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Шестая статтья',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'km26_L5mMM',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'bqZT6W_Wtl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2025-04-23T04:40:32.487'),
        updated_at: ISODate('2025-04-28T16:26:38.018'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'First articles',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'Nfspb8jfZ1P',
                            type: 'paragraph',
                            data: {
                                text: 'Very strange matters'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'QqRfyZtJx1',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Джаваскрипт все еще скрипит',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'km35_dlmMM',
                            type: 'paragraph',
                            data: {
                                text: 'Неизвестность Пелевина'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'bqZT6LkWtl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2025-04-23T04:40:32.487'),
        updated_at: ISODate('2025-04-28T16:26:38.018'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Third article',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: '0Dpb8jfZ2P',
                            type: 'paragraph',
                            data: {
                                text: 'Another very bad trial and text here and more editing document'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'Qq-FaZtJv4',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Tретья статья',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'km90_G5mMM',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'bgXC6W_Wtl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2025-04-23T04:40:32.487'),
        updated_at: ISODate('2025-04-28T17:26:38.018'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Ninth human on earth',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: '0FrL8jfZ2P',
                            type: 'paragraph',
                            data: {
                                text: 'Another very bad trial and text here and more editing document'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'QqFfoktJv4',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Десятый человек на Земле',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'k_U-_G5mMM',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'blAGnW_Wtl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2025-05-02T02:40:32.487'),
        updated_at: ISODate('2025-05-06T17:26:38.018'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Rabbits and rabbies',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'CDfz8_Jk-O',
                            type: 'paragraph',
                            data: {
                                text: 'Very long and may be not the best in the West'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'QqpL-gbtJx1',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Кролики и рабби',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'kT3S_J9zmH',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'b02nw6OKl_l',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2025-04-01T04:40:32.487'),
        updated_at: ISODate('2025-05-10T22:26:38.018'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Third and more',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'CDfb8_Jk1O',
                            type: 'paragraph',
                            data: {
                                text: 'Very long and may be not the best in the West'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'Qq_L-gDtJx1',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Триста на два',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'kT8S_J9zMC',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'bKlSw6OKl_l',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2025-04-21T04:40:32.487'),
        updated_at: ISODate('2025-05-11T16:26:38.018'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Full moon',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: '0Dp-Gcfr1O',
                            type: 'paragraph',
                            data: {
                                text: 'Kaching is not a real word. Lose it!'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'iq-FgETsx2',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Забытый всеми стул оказался кладом.',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'k6d6sf7mBC',
                            type: 'paragraph',
                            data: {
                                text: 'Great and not only!'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'bQsLVOxutl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2025-04-22T04:40:22.477'),
        updated_at: ISODate('2025-05-13T10:16:58.018'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Second but not the last',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: 'CDfb8cfZ1O',
                            type: 'paragraph',
                            data: {
                                text: 'Very long and may be not the best in the West'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'Qq-FgDtJx1',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Шестьсотая',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'km26_J9zMC',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'bqZL6OKl_l',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2025-04-22T04:40:32.487'),
        updated_at: ISODate('2025-05-13T16:26:38.018'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'First articles',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: '0Dpb8cfZ1O',
                            type: 'paragraph',
                            data: {
                                text: 'Another text here and more editing document'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'Qq-FgDtJx1',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Шестая статтья',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'km26_L7mMC',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'bqZL6O_Wtl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2025-04-22T04:40:32.487'),
        updated_at: ISODate('2025-05-13T16:26:38.018'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Different types of Go language',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: '0_pb8j-Z2P',
                            type: 'paragraph',
                            data: {
                                text: 'Another very bad trial and text here and more editing document'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'QqRfbZtJv4',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Дорохов и его команда',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'Sm9N_G8VM-',
                            type: 'paragraph',
                            data: {
                                text: 'Нужные вещи всегда были здесь невовремя'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'bgSS6W_Wtl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2025-05-23T10:40:32.487'),
        updated_at: ISODate('2025-05-23T10:26:38.018'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'Fifty fifth article',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: '0_r_8jTjTP',
                            type: 'paragraph',
                            data: {
                                text: 'Hope for the best'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'QqRk-EktJv4',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Сто Четвертая',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747978266723,
                    blocks: [
                        {
                            id: 'kAQ0_G5mMM',
                            type: 'paragraph',
                            data: {
                                text: 'My best of the hellish helicopters'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'blanNBoZtl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2025-02-23T02:40:32.487'),
        updated_at: ISODate('2025-05-23T12:26:38.018'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'First article',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: '0Spb8jfZ1O',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here and second article will be nex'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'Sq-FgZtJx1',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Шестая статтья',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1748026125951,
                    blocks: [
                        {
                            id: 'km26_L5mMC',
                            type: 'paragraph',
                            data: {
                                text: 'Something else here и письмецо напишу и надо если, то сделаю все что хотите время'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'bqZL6W_Wtl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2025-05-23T04:40:32.487'),
        updated_at: ISODate('2025-05-23T18:48:49.070'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    },
    {
        translations: [
            {
                language: 'en',
                header: 'First article',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1747981604088,
                    blocks: [
                        {
                            id: '0Spj3qfZ1O',
                            type: 'paragraph',
                            data: {
                                text: 'Not too long of a text here'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'S-_-gZtJx1',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'scss'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc75e296bd21c1381726e',
                    name: 'Python',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc722296bd21c13817269',
                        name: 'Tag 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            },
            {
                language: 'ru',
                header: 'Девятая статья',
                content: {
                    version: '2.31.0-rc.7',
                    time: 1748026125951,
                    blocks: [
                        {
                            id: 'k2m9_g5mSC',
                            type: 'paragraph',
                            data: {
                                text: 'Немного, но много. Завтра приходите.'
                            },
                            __typename: 'ContentBlockType'
                        },
                        {
                            id: 'bQdL1W_Wtl',
                            type: 'code',
                            data: {
                                code: 'from typing import Annotated\n\nfrom beanie import Document, Indexed\nfrom pydantic import Field\nfrom pymongo import ASCENDING, TEXT, IndexModel\n\nfrom app.models.pydantic import ArticleModel, CategoryModel, TagModel, UserModel\n\n\nclass ArticleDocument(Document, ArticleModel):\n    class Settings:\n        name = "articles"\n        indexes = [\n            IndexModel(\n                [\n                    ("translations.header", TEXT),\n                    ("translations.tags.name", TEXT),\n                    ("translations.category.name", TEXT),\n                    ("translations.content.blocks.data.text", TEXT),\n                    ("translations.content.blocks.data.content", TEXT),\n                    ("translations.content.blocks.data.code", TEXT),\n                    ("translations.content.blocks.data.items.content", TEXT),\n                    ("translations.content.blocks.data.items.code", TEXT),\n                    ("translations.content.blocks.data.items.cols.text", TEXT),\n                    ("translations.content.blocks.data.items.cols.content", TEXT),\n                ],\n                name="search_article_index",\n                weights={\n                    "translations.header": 10,\n                    "translations.tags.name": 5,\n                    "translations.category.name": 5,\n                    "translations.content.blocks.data.text": 5,\n                    "translations.content.blocks.data.content": 5,\n                    "translations.content.blocks.data.code": 5,\n                    "translations.content.blocks.data.items.content": 5,\n                    "translations.content.blocks.data.items.code": 5,\n                    "translations.content.blocks.data.items.cols.text": 5,\n                    "translations.content.blocks.data.items.cols.content": 5,\n                },\n                default_language="russian",\n            )\n        ]',
                                showlinenumbers: true,
                                show_copy_button: true,
                                lang: 'python'
                            },
                            __typename: 'ContentBlockType'
                        }
                    ],
                    __typename: 'ContentType'
                },
                is_published: false,
                published_at: null,
                category: {
                    id: '682fc77b296bd21c13817270',
                    name: 'Питон',
                    __typename: 'CategoryType'
                },
                tags: [
                    {
                        id: '682fc741296bd21c1381726b',
                        name: 'Тэг 1',
                        __typename: 'TagType'
                    }
                ],
                __typename: 'TranslationType'
            }
        ],
        created_at: ISODate('2024-07-13T05:28:32.487'),
        updated_at: ISODate('2024-11-21T20:48:49.070'),
        author: {
            id: ObjectId('682fc6e9d1b8df284665d0fb'),
            created_at: ISODate('2025-05-23T00:52:57.120'),
            updated_at: ISODate('2025-05-25T01:01:43.516'),
            email: 'igk100@fake.com',
            phone: '+1-5031112233‬',
            first_name: 'Igor',
            last_name: 'Kniazev',
            ip: '172.19.0.1',
            last_logged_at: ISODate('2025-05-25T02:09:55.281'),
            articles: [
                {
                    id: '682ffc40688ab2c6443ff75d',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12a',
                    __typename: 'IdType'
                },
                {
                    id: '6830cd4f997378eaa374f12b',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce32',
                    __typename: 'IdType'
                },
                {
                    id: '6830ce6325e6907fc6f5ce33',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cb',
                    __typename: 'IdType'
                },
                {
                    id: '6830cf456d4b69831bf206cc',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865fe',
                    __typename: 'IdType'
                },
                {
                    id: '6830d03c44081ece11b865ff',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaad',
                    __typename: 'IdType'
                },
                {
                    id: '68326bf72f6275427933aaae',
                    __typename: 'IdType'
                }
            ],
            __typename: 'UserTypePartial'
        },
        __typename: 'ArticleType'
    }
];

// fakeArticles.forEach((article) => {
//     article.author = user;
//     db.articles.insertOne(article);
// });

// db.articles.insertMany(fakeArticles);

// For date replacement:
// "created_at":\s*"([^"]*)"
// "created_at": ISODate("$1")
