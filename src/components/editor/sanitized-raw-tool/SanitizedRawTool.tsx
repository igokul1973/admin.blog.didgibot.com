import { API, SanitizerConfig, ToolConfig } from '@editorjs/editorjs';
// @ts-expect-error Could not find a declaration file for module
import RawTool from '@editorjs/raw';

/**
 * Data structure for RawTool
 */
interface IRawData {
    html: string;
}

/**
 * Extended RawTool with HTML sanitization
 * Removes dangerous tags and attributes while preserving safe HTML
 */
class SanitizedRawTool extends RawTool {
    private data: IRawData;

    constructor({
        data,
        config,
        api,
        readOnly
    }: {
        data: IRawData;
        config: ToolConfig;
        api: API;
        readOnly: boolean;
    }) {
        super({ data, config, api, readOnly });
        this.data = data;
    }

    /**
     * Sanitizer configuration
     * Instead of allowing all HTML, we specify what's allowed
     * Note: EditorJS sanitizer uses simple boolean values, detailed attribute
     * sanitization is handled in the sanitizeHTML method
     */
    static get sanitize(): SanitizerConfig {
        return {
            html: {
                // Allow basic formatting tags
                b: true,
                i: true,
                u: true,
                s: true,
                strong: true,
                em: true,
                mark: true,
                small: true,
                sub: true,
                sup: true,

                // Allow structural tags
                p: true,
                br: true,
                div: true,
                span: true,
                blockquote: true,
                pre: true,
                code: true,

                // Allow lists
                ul: true,
                ol: true,
                li: true,

                // Allow headings
                h1: true,
                h2: true,
                h3: true,
                h4: true,
                h5: true,
                h6: true,

                // Allow links and images
                // Attributes are sanitized in sanitizeHTML method
                a: true,
                img: true,

                // Allow tables
                table: true,
                thead: true,
                tbody: true,
                tr: true,
                th: true,
                td: true
            }
        };
    }

    /**
     * Additional client-side sanitization for extra safety
     * This runs before rendering
     */
    render(): HTMLElement {
        const wrapper = super.render();

        // Get the HTML content
        const htmlContent = this.data.html || '';

        // Apply additional sanitization
        const sanitized = this.sanitizeHTML(htmlContent);

        // Update the wrapper content
        wrapper.querySelector('textarea').value = sanitized;

        return wrapper;
    }

    /**
     * Custom sanitization method
     * Removes scripts, event handlers, and dangerous protocols
     * Also removes unwanted attributes from specific tags
     */
    private sanitizeHTML(html: string): string {
        // Create a temporary div to parse HTML
        const temp = document.createElement('div');
        temp.innerHTML = html;

        // Remove script tags
        const scripts = temp.querySelectorAll('script');
        scripts.forEach((script) => script.remove());

        // Define allowed attributes per tag
        const allowedAttributes: Record<string, string[]> = {
            a: ['href', 'target', 'rel', 'title', 'class', 'id'],
            img: ['src', 'alt', 'title', 'width', 'height', 'class', 'id'],
            '*': ['class', 'id'] // Default allowed attributes for all tags
        };

        // Remove event handler attributes and unwanted attributes
        const allElements = temp.querySelectorAll('*');
        allElements.forEach((el) => {
            const tagName = el.tagName.toLowerCase();
            const allowed = allowedAttributes[tagName] || allowedAttributes['*'];

            // Remove on* event attributes and non-allowed attributes
            Array.from(el.attributes).forEach((attr) => {
                // Always remove event handlers
                if (attr.name.startsWith('on')) {
                    el.removeAttribute(attr.name);
                    return;
                }

                // Remove attributes not in allowed list
                if (!allowed.includes(attr.name)) {
                    el.removeAttribute(attr.name);
                }
            });

            // Sanitize href and src for dangerous protocols
            if (el.hasAttribute('href')) {
                const href = el.getAttribute('href');
                if (href && this.isDangerousProtocol(href)) {
                    el.removeAttribute('href');
                }
            }

            if (el.hasAttribute('src')) {
                const src = el.getAttribute('src');
                if (src && this.isDangerousProtocol(src)) {
                    el.removeAttribute('src');
                }
            }
        });

        return temp.innerHTML;
    }

    /**
     * Check if a URL uses a dangerous protocol
     */
    private isDangerousProtocol(url: string): boolean {
        if (!url) return false;

        const dangerous = ['javascript:', 'data:', 'vbscript:', 'file:'];
        const lower = url.trim().toLowerCase();

        return dangerous.some((protocol) => lower.startsWith(protocol));
    }

    /**
     * Save method - also sanitize on save
     */
    save(blockContent: HTMLElement): IRawData {
        const data = super.save(blockContent);

        // Sanitize before saving
        if (data.html) {
            data.html = this.sanitizeHTML(data.html);
        }
        return data;
    }
}

export default SanitizedRawTool;
