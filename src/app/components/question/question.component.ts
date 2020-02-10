import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Question } from "src/app/services/test.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.less"]
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Output() finishedQuestion = new EventEmitter<boolean>();

  selectedAnswer: number = -1;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {}

  timerUp() {
    this.openSnackBar("The timer is up!", "");

    this.nextQuestion();
  }

  nextQuestion() {
    this.finishedQuestion.emit(
      this.selectedAnswer === this.question.correctIndex
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: "center"
    });
  }
}
