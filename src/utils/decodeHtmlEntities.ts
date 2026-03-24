export function decodeHtmlEntities(text: string): string {
    if (!text) return '';
    const entities: Record<string, string> = {
        '&#8216;': '‘',
        '&#8217;': '’',
        '&#8220;': '“',
        '&#8221;': '”',
        '&#8211;': '–',
        '&#8212;': '—',
        '&hellip;': '…',
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&#039;': "'",
        '&nbsp;': ' ',
    };
    return text.replace(/&#?\w+;/g, match => entities[match] || match);
}
