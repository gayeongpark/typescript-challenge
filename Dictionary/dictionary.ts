class Word {
  constructor(public term: string, public definition: string) {}
}
type Words = {
  [key: string]: string;
};
class Dictionary {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (!this.words[word.term]) {
      this.words[word.term] === word.definition;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(word: Word) {
    if (this.words[word.term]) {
      this.words[word.term] === word.definition;
    }
  }
  showAll() {
    Object.keys(this.words).forEach((word) => {
      console.log(`${word}: ${this.words[word]}`);
    });
  }
  count(): number {
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
