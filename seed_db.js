import { faker } from '@faker-js/faker';
import TextGenerator from '@igk19/rus-text-gen';
import * as dotenv from 'dotenv';
import { expand } from 'dotenv-expand';
import * as mongoDB from 'mongodb';

expand(dotenv.config());

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGO_INITDB_DATABASE;
console.log('uri', uri);
const client = new mongoDB.MongoClient(uri);
const db = client.db(dbName);

// An example of how to get all articles
// const articles = db
//     .collection('articles')
//     .find({})
//     .toArray()
//     .then((articles) => {
//         console.log('articles: ', articles);
//     });

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

const user = {
    created_at: new Date('2025-05-23T00:52:57.120'),
    updated_at: new Date('2025-05-25T01:01:43.516'),
    email: 'igk100@fake.com',
    phone: '+1-‪5031112233‬',
    first_name: 'Igor',
    last_name: 'Kniazev',
    ip: '172.19.0.1',
    last_logged_at: new Date(),
    articles: [],
    __typename: 'UserTypePartial'
};

const getRussianCategories = () => {
    const russianCategoryNames = [
        'Питон',
        'Джаваскрипт',
        'Личное',
        'Программирование',
        'Блог',
        'Разное'
    ];
    const createdAt = new Date('2022-05-23T18:28:49.000');
    const updatedAt = new Date('2022-05-23T18:28:49.000');
    const __typename = 'CategoryType';
    return russianCategoryNames.map((name) => {
        return {
            name,
            created_at: createdAt,
            updated_at: updatedAt,
            __typename
        };
    });
};

const getEnglishCategories = () => {
    const englishCategoryNames = [
        'Python',
        'Javascript',
        'Personal',
        'Programming',
        'Blog',
        'Miscellaneous'
    ];
    const createdAt = new Date('2022-05-23T18:28:49.000');
    const updatedAt = new Date('2022-05-23T18:28:49.000');
    const __typename = 'CategoryType';
    return englishCategoryNames.map((name) => {
        return {
            name,
            created_at: createdAt,
            updated_at: updatedAt,
            __typename
        };
    });
};

const getRussianTags = () => {
    const russianTagNames = [
        'Локализация',
        'Уведомления',
        'Реактивность',
        'Замыкания',
        'Редкое',
        'Разное'
    ];
    const createdAt = new Date('2022-05-23T18:28:49.000');
    const updatedAt = new Date('2022-05-23T18:28:49.000');
    const __typename = 'TagType';
    return russianTagNames.map((name) => {
        return {
            name,
            created_at: createdAt,
            updated_at: updatedAt,
            __typename
        };
    });
};

const getEnglishTags = () => {
    const englishTagNames = [
        'Localization',
        'Notifications',
        'Reactivity',
        'Closures',
        'Rare',
        'Miscellaneous'
    ];
    const createdAt = new Date('2022-05-23T18:28:49.000');
    const updatedAt = new Date('2022-05-23T18:28:49.000');
    const __typename = 'TagType';
    return englishTagNames.map((name) => {
        return {
            name,
            created_at: createdAt,
            updated_at: updatedAt,
            __typename
        };
    });
};

const createArticles = async (length, author) => {
    const rusTextGenerator = await TextGenerator.build();

    const englishArticleNames = Array.from({ length }, (_, i) => {
        let name = faker.book.title();
        if (name.length > 40) {
            name = name.slice(0, 40);
        }
        return name;
    });

    const russianArticleNames = Array.from({ length }, (_, i) => {
        let name = rusTextGenerator.createRandomText(5, true);
        if (name.length > 40) {
            name = name.slice(0, 40);
        }

        return name;
    });

    const articlesArray = Array(length).fill(undefined);
    const articles = [];

    for (let i = 0; i < articlesArray.length; i++) {
        const randomCategoryIndex = Math.floor(Math.random() * 6);
        const randomTagIndex1 = Math.floor(Math.random() * 6);
        const randomTagIndex2 = Math.floor(Math.random() * 6);
        const randomRussianCategoryName = getRussianCategories()[randomCategoryIndex]['name'];
        const randomRussianCategory = await db
            .collection('categories')
            .findOne({ name: randomRussianCategoryName });
        const randomEnglishCategoryName = getEnglishCategories()[randomCategoryIndex]['name'];
        const randomEnglishCategory = await db
            .collection('categories')
            .findOne({ name: randomEnglishCategoryName });

        const randomRussianTag1Name = getRussianTags()[randomTagIndex1]['name'];
        const randomRussianTag2Name = getRussianTags()[randomTagIndex2]['name'];
        const randomEnglishTag1Name = getEnglishTags()[randomTagIndex1]['name'];
        const randomEnglishTag2Name = getEnglishTags()[randomTagIndex2]['name'];
        const randomRussianTag1 = await db
            .collection('tags')
            .findOne({ name: randomRussianTag1Name });
        const randomRussianTag2 = await db
            .collection('tags')
            .findOne({ name: randomRussianTag2Name });
        const randomEnglishTag1 = await db
            .collection('tags')
            .findOne({ name: randomEnglishTag1Name });
        const randomEnglishTag2 = await db
            .collection('tags')
            .findOne({ name: randomEnglishTag2Name });

        const { _id: authorId, ...authorRest } = author;
        const { _id: russianCategoryId, ...russianCategoryRest } = randomRussianCategory;
        const { _id: englishCategoryId, ...englishCategoryRest } = randomEnglishCategory;
        const { _id: russianTag1Id, ...russianTag1Rest } = randomRussianTag1;
        const { _id: russianTag2Id, ...russianTag2Rest } = randomRussianTag2;
        const { _id: englishTag1Id, ...englishTag1Rest } = randomEnglishTag1;
        const { _id: englishTag2Id, ...englishTag2Rest } = randomEnglishTag2;

        const created_at = faker.date.between({
            from: new Date('2022-01-06T05:32:25.000'),
            to: new Date('2025-05-30T07:49:26.000')
        });
        const updated_at = faker.date.soon({ refDate: created_at });

        articles.push({
            translations: [
                {
                    language: 'en',
                    header: englishArticleNames[i],
                    content: {
                        version: '2.31.0-rc.7',
                        time: 1747981604088,
                        blocks: [
                            {
                                id: randomId(),
                                type: 'paragraph',
                                data: {
                                    text: faker.lorem.paragraph()
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
                        ],
                        __typename: 'ContentType'
                    },
                    is_published: false,
                    published_at: null,
                    category: { id: englishCategoryId, ...englishCategoryRest },
                    tags: [
                        { id: englishTag1Id, ...englishTag1Rest },
                        { id: englishTag2Id, ...englishTag2Rest }
                    ],
                    __typename: 'TranslationType'
                },
                {
                    language: 'ru',
                    header: russianArticleNames[i],
                    content: {
                        version: '2.31.0-rc.7',
                        time: 1747981604088,
                        blocks: [
                            {
                                id: randomId(),
                                type: 'paragraph',
                                data: {
                                    text: rusTextGenerator.createText(50, true)
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
                                }
                            }
                        ],
                        __typename: 'ContentType'
                    },
                    is_published: false,
                    published_at: null,
                    category: { id: russianCategoryId, ...russianCategoryRest },
                    tags: [
                        { id: russianTag1Id, ...russianTag1Rest },
                        { id: russianTag2Id, ...russianTag2Rest }
                    ],
                    __typename: 'TranslationType'
                }
            ],

            created_at,
            updated_at,
            author: {
                id: authorId,
                ...authorRest
            },
            __typename: 'ArticleType'
        });
    }

    return articles;
};

// delete collections
async function deleteCollections() {
    const collections = ['users', 'articles', 'categories', 'tags'];
    for (const collection of collections) {
        console.log(`Deleting collection: ${collection}`);
        await db.collection(collection).drop();
    }
}

async function emptyCollections() {
    const collections = ['users', 'articles', 'categories', 'tags'];
    for (const collection of collections) {
        console.log(`Emptying collection: ${collection}`);
        await db.collection(collection).deleteMany({});
    }
}

async function createUser(user) {
    const users = db.collection('users');
    const { insertedId } = await users.insertOne(user);
    console.log(`User created: ${insertedId}`);
    return insertedId;
}
async function createCategories(categories) {
    const categoriesCollection = db.collection('categories');
    const result = await categoriesCollection.insertMany(categories);
    console.log(`Categories created: ${result.insertedCount}`);
}

async function createTags(tags) {
    const tagsCollection = db.collection('tags');
    const result = await tagsCollection.insertMany(tags);
    console.log(`Tags created: ${result.insertedCount}`);
}

function main() {
    const articlesNumber = 73;
    return (async () => {
        // First - empty all collections.
        // Note: deleting them will mess up the collection's watcher
        // that uses the ChangeStream to propagate changes in backend
        // /app/watch.py file.
        await emptyCollections();
        console.log('All collections deleted');
        // Second - create a user.
        const userId = await createUser(user);
        const author = await db.collection('users').findOne({ _id: userId });
        console.log('User created: ', userId);
        console.log('Type of userId: ', typeof userId);
        console.log('Author: ', author);
        // Create categories and tags
        await createCategories(getRussianCategories());
        await createCategories(getEnglishCategories());
        console.log('Categories created');
        await createTags(getRussianTags());
        await createTags(getEnglishTags());
        console.log('Tags created');
        // Create articles
        const articles = await createArticles(articlesNumber, author);
        for (const article of articles) {
            await db.collection('articles').insertOne(article);
        }
        console.log(`${articlesNumber} Articles created`);
        process.exit();
    })();
}

main();
