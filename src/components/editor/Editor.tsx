import { TArticleFormContent } from '@/components/article-form/types';
import Code from '@editorjs/code';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import InlineCode from '@editorjs/inline-code';
import List from '@editorjs/list';
// @ts-expect-error
import Marker from '@editorjs/marker';
import Paragraph from '@editorjs/paragraph';
import Underline from '@editorjs/underline';
// @ts-expect-error
import Annotation from 'editorjs-annotation';
import { RefObject, useEffect, useRef } from 'react';
import { StyledEditor } from './styled';

interface IProps {
    readonly editor: RefObject<EditorJS | null>;
    readonly onChange: (...event: any[]) => void;
    readonly initialValue?: TArticleFormContent;
    readonly index: number;
}

export function Editor({ editor, onChange, initialValue, index }: IProps) {
    const isReady = useRef(false);
    useEffect(() => {
        if (!isReady.current) {
            const editorJs = new EditorJS({
                minHeight: 200,
                holder: `editorjs-container-${index}`,
                placeholder: 'Type here to write the article',
                // inlineToolbar: true,
                onReady: () => {
                    editor.current = editorJs;
                },
                tools: {
                    // Add your desired tools here
                    header: Header,
                    paragraph: Paragraph,
                    list: List,
                    code: {
                        class: Code,
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
            editor.current?.destroy && editor.current.destroy();
            editor.current = null;
        };
    }, []);

    return <StyledEditor id={`editorjs-container-${index}`} />;
}
