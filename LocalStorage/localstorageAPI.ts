interface SStorage<T> {
  [key: string]: T;
}

abstract class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}
class MyStorage<T> extends LocalStorage<T> {}

const stringsStorage = new MyStorage<string>();
stringsStorage.set('Hello', 'How are you?');
stringsStorage.get('Hello');
stringsStorage.remove('Hello');
stringsStorage.clear();

const booleanStorage = new MyStorage<boolean>();
booleanStorage.set('Hola!', true);
booleanStorage.get('generic');
booleanStorage.remove('Hola!');
booleanStorage.clear();
