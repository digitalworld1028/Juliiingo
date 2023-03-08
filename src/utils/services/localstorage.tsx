function save(key: string, value: string): void {
    window.localStorage.setItem(key, value);
}

function get(key: string): string|null {
    return window.localStorage.getItem(key);
}

function clear(): void {
    window.localStorage.clear();
}

export { save, get, clear }