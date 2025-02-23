// TODO: replace this with your own site URL
// and check if it is needed at all
export function getSiteURL(): string {
    let url = 'http://localhost:5173/';
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`;
    // Make sure to include a trailing `/`.
    url = url.endsWith('/') ? url : `${url}/`;
    return url;
}
