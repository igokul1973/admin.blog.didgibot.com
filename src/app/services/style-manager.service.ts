import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StyleManagerService {
    isDarkSubject = new BehaviorSubject<boolean>(false);
    isDark$ = this.isDarkSubject.asObservable();

    toggleDarkTheme(isDark: boolean) {
        if (isDark) {
            this.removeStyle('dark-theme');
            document.body.classList.remove('dark-theme');
            this.isDarkSubject.next(false);
        } else {
            const href = 'dark-theme.css';
            const linkEl = getLinkElementForKey('dark-theme');
            if (linkEl) {
                linkEl.setAttribute('href', href);
                document.body.classList.add('dark-theme');
                this.isDarkSubject.next(true);
            }
        }
    }
    removeStyle(style: string) {
        const existingLinkElement = getExistingLinkElementByKey(style);
        if (existingLinkElement) {
            document.head.removeChild(existingLinkElement);
        }
    }
}

function getExistingLinkElementByKey(key: string) {
    return document.head.querySelector(`link[rel="stylesheet"].${getClassNameForKey(key)}`);
}

function getClassNameForKey(key: string) {
    return `style-manager-${key}`;
}

function getLinkElementForKey(key: string) {
    return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function createLinkElementWithKey(key: string): Element | null {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
}
