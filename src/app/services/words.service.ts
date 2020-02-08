import { Injectable } from "@angular/core";
import * as UUID from "uuid";
import { Subject, BehaviorSubject } from "rxjs";

export class Word {
  id: string;
  word: string;
  translation: string;

  constructor() {
    this.id = UUID.v4();
  }
}

const WORDS_ID = "english-practicer-words";

@Injectable({
  providedIn: "root"
})
export class WordsService {
  words: Word[];

  wordsSubject = new BehaviorSubject<Word[]>([]);

  constructor() {
    this.words = this.getAllWords();

    if (!this.words) {
      this.initializeWordsArray();
      this.words = this.getAllWords();
    }

    this.wordsSubject.next(this.words);
  }

  addNewWord(word: Word) {
    this.words.push(word);
    this.saveToLocalStorage(this.words);
    this.wordsSubject.next(this.words);
  }

  removeWord(id: string) {
    this.words = this.words.filter(word => word.id !== id);
    this.saveToLocalStorage(this.words);
    this.wordsSubject.next(this.words);
  }

  getAllWords() {
    return JSON.parse(localStorage.getItem(WORDS_ID));
  }

  initializeWordsArray() {
    this.saveToLocalStorage([]);
  }

  saveToLocalStorage(words) {
    localStorage.setItem(WORDS_ID, JSON.stringify(words));
  }
}
