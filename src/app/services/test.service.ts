import { Injectable } from "@angular/core";
import { WordsService, Word } from "./words.service";
import { tap } from "rxjs/operators";
import { Subject, BehaviorSubject } from "rxjs";

export interface Question {
  word: string;
  answers: string[];
  correctIndex: number;
}

@Injectable({
  providedIn: "root"
})
export class TestService {
  currentTest: Question[];

  nextTest = new BehaviorSubject<Question[]>([]);

  constructor(private wordsService: WordsService) {}

  generateNewTest() {
    this.generateTest(this.wordsService.words);
    return this.currentTest;
  }

  generateTest(words: Word[]) {
    if (words.length < 4) {
      this.currentTest = [];
    } else {
      let test: Question[] = [];
      let shuffledWords = this.shuffle(words).slice(0, 10);

      shuffledWords.forEach(currWord => {
        let answers: string[] = [];
        let answersOptions = shuffledWords.filter(
          word => word.id !== currWord.id
        );
        for (let curr = 0; curr < 3; curr++) {
          let selectedIndex = Math.floor(Math.random() * answersOptions.length);
          answers.push(answersOptions[selectedIndex].translation);
          answersOptions.splice(selectedIndex, 1);
        }
        answers.push(`[correct]${currWord.translation}`);
        answers = this.shuffle(answers);
        let correctAnswerIndex = answers.findIndex((answer: string) =>
          answer.startsWith("[correct]")
        );
        answers[correctAnswerIndex] = currWord.translation;

        test.push({
          word: currWord.word,
          answers: answers,
          correctIndex: correctAnswerIndex
        });
      });

      this.currentTest = test;
    }
  }

  private shuffle(words: any[]): any[] {
    var j, x, i;
    for (i = words.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = words[i];
      words[i] = words[j];
      words[j] = x;
    }
    return words;
  }
}
