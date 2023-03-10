"use strict";
class Word {
    constructor(term, definition) {
        this.term = term;
        this.definition = definition;
    }
}
class Dictionary {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (!this.words[word.term]) {
            this.words[word.term] === word.definition;
        }
    }
    get(term) {
        return this.words[term];
    }
    delete(term) {
        delete this.words[term];
    }
    update(word) {
        if (this.words[word.term]) {
            this.words[word.term] === word.definition;
        }
    }
    showAll() {
        Object.keys(this.words).forEach((word) => {
            console.log(`${word}: ${this.words[word]}`);
        });
    }
    count() {
        return Object.keys(this.words).length;
    }
}
const kimchi = new Word('Kimchi', 'My favorite Korean food');
const apple = new Word('Apple', 'My favorite fruit');
const dictionary = new Dictionary();
dictionary.add(kimchi);
dictionary.add(apple);
dictionary.get('Kimchi');
dictionary.update(new Word('Apple', 'My worst fruit (revised)'));
dictionary.delete('Kimchi');
dictionary.showAll();
dictionary.count();
