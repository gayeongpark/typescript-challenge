"use strict";
class LocalStorage {
    constructor() {
        this.storage = {};
    }
    set(key, value) {
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    get(key) {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
class MyStorage extends LocalStorage {
}
const stringsStorage = new MyStorage();
stringsStorage.set('Hello', 'How are you?');
stringsStorage.get('Hello');
stringsStorage.remove('Hello');
stringsStorage.clear();
const booleanStorage = new MyStorage();
booleanStorage.set('Hola!', true);
booleanStorage.get('generic');
booleanStorage.remove('Hola!');
booleanStorage.clear();
