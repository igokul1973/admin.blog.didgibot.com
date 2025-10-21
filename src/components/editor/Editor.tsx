import { TArticleFormContent } from '@/components/article-form/types';
import Quote from '@/editorjs-quote';
import { authClient } from '@/lib/auth/AuthClient';
import Delimiter from '@editorjs/delimiter';
import EditorJS, { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
// @ts-expect-error Could not find a declaration file for module
import editorjsCodecup from '@calumk/editorjs-codecup';
// @ts-expect-error Could not find a declaration file for module
import EditorjsColumns from '@calumk/editorjs-columns';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import List from '@editorjs/list';
// @ts-expect-error Could not find a declaration file for module
import Alert from 'editorjs-alert';
// @ts-expect-error Could not find a declaration file for module
import Marker from '@editorjs/marker';
import Paragraph from '@editorjs/paragraph';
// @ts-expect-error Could not find a declaration file for module
import RawTool from '@editorjs/raw';
import Table from '@editorjs/table';
import Underline from '@editorjs/underline';
// @ts-expect-error Could not find a declaration file for module
import Annotation from 'editorjs-annotation';
import { RefObject, useEffect, useRef } from 'react';
import { StyledEditor } from './styled';

interface IProps {
    readonly editor: RefObject<EditorJS | null>;
    readonly onChange: (...event: unknown[]) => void;
    readonly initialValue?: TArticleFormContent;
    readonly index: number;
}

const commonTools: Record<string, ToolConstructable | ToolSettings> = {
    alert: {
        class: Alert as unknown as ToolConstructable,
        inlineToolbar: true
    },
    header: {
        class: Header as unknown as ToolConstructable,
        inlineToolbar: true
    },
    paragraph: {
        class: Paragraph as unknown as ToolConstructable,
        inlineToolbar: true
    },
    list: {
        class: List,
        inlineToolbar: true
    },
    delimiter: {
        class: Delimiter,
        inlineToolbar: true
    },
    inlineCode: {
        class: InlineCode,
        inlineToolbar: true
    },
    marker: {
        class: Marker,
        inlineToolbar: true
    },
    underline: {
        class: Underline,
        inlineToolbar: true
    },
    annotation: {
        class: Annotation,
        inlineToolbar: true
    },
    quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+O',
        config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: "Quote's author"
        }
    },
    raw: {
        class: RawTool,
        inlineToolbar: true
    }
};

export function Editor({ editor, onChange, initialValue, index }: IProps) {
    const isReady = useRef(false);
    useEffect(() => {
        if (!isReady.current) {
            const editorJs = new EditorJS({
                minHeight: 200,
                holder: `editorjs-container-${index}`,
                placeholder: 'Type here to write the article',
                inlineToolbar: true,
                onReady: () => {
                    editor.current = editorJs;
                },
                tools: {
                    // Add your desired tools here
                    ...commonTools,
                    code: editorjsCodecup,
                    // code: {
                    //     class: CodeBox,
                    //     config: {
                    //         themeName: 'atom-one-dark'
                    //     }
                    // },
                    columns: {
                        class: EditorjsColumns,
                        config: {
                            EditorJsLibrary: EditorJS, // Pass the library instance to the columns instance.
                            tools: commonTools // IMPORTANT! ref the column_tools
                        }
                    },
                    image: {
                        class: ImageTool,
                        inlineToolbar: true,
                        config: {
                            // endpoints: {
                            //     byFile: `${siteUrl}api/uploadFile` // Your backend file uploader endpoint
                            //     //     byUrl: `${siteUrl}api/fetchUrl` // Your endpoint that provides uploading by Url
                            // },
                            // additionalRequestHeaders: {
                            //     Authorization: `Bearer ${authClient.getUser().token}`
                            // }
                            field: 'image',
                            types: 'image/jpeg,image/png,image/gif,image/webp,image/svg+xml',
                            additionalRequestData: {
                                token: authClient.getUser().token
                            },
                            uploader: {
                                uploadByFile: async (file: File) => {
                                    if (file.size > 524288) {
                                        return {
                                            success: 0,
                                            message: 'File must be less than 500kb'
                                        };
                                    }
                                    const formData = new FormData();
                                    formData.append('image', file);
                                    try {
                                        const res = await fetch('/api/uploadFile', {
                                            method: 'POST',
                                            body: formData,
                                            headers: {
                                                Authorization: `Bearer ${authClient.getUser().token}`
                                            }
                                        });
                                        const json = await res.json();
                                        if (!res.ok) {
                                            return {
                                                success: 0,
                                                message: json.message
                                            };
                                        }
                                        return {
                                            success: 1,
                                            file: {
                                                url: json.url
                                            }
                                        };
                                    } catch (e) {
                                        if (e instanceof Error) {
                                            return {
                                                success: 0,
                                                message: e.message
                                            };
                                        }
                                        return {
                                            success: 0,
                                            message: 'Upload Failed'
                                        };
                                    }
                                },
                                uploadByUrl(url: string) {
                                    // your ajax request for uploading
                                    return {
                                        success: 1,
                                        file: {
                                            url
                                        }
                                    };
                                }
                            }
                        }
                    },
                    table: {
                        class: Table as unknown as ToolConstructable,
                        inlineToolbar: true,
                        config: {
                            rows: 2,
                            cols: 3,
                            maxRows: 5,
                            maxCols: 5,
                            stretched: true
                        }
                    }
                },
                data: initialValue,
                onChange: () => {
                    const save = async () => {
                        const content = await editorJs.save();
                        onChange(content);
                    };

                    save();
                }
            });
            isReady.current = true;
            editor.current = editorJs;
        }

        return () => {
            if (editor.current?.destroy) {
                editor.current.destroy();
            }
            editor.current = null;
        };
    }, []);

    return <StyledEditor id={`editorjs-container-${index}`} />;
}
