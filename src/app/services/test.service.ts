import { Injectable } from "@angular/core";
import { WordsService, Word } from "./words.service";
import { tap } from "rxjs/operators";

interface Question {
  word: string;
  ansewrs: string[];
  correctIndex: number;
}

@Injectable({
  providedIn: "root"
})
export class TestService {
  currentTest: Question[];

  wordsData = this.wordsService.wordsSubject
    .pipe(
      tap(words => {
        if (words) {
          this.generateTest(words);
        }
      })
    )
    .subscribe();

  constructor(private wordsService: WordsService) {}

  generateTest(words: Word[]) {
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
        ansewrs: answers,
        correctIndex: correctAnswerIndex
      });
    });

    console.log(test);
    this.currentTest = test;
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
