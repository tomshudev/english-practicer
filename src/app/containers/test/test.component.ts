import { Component, OnInit, ViewChild } from "@angular/core";
import { TestService, Question } from "src/app/services/test.service";
import { FormGroup } from "@angular/forms";
import { MatStepper, MatSnackBar } from "@angular/material";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.less"]
})
export class TestComponent implements OnInit {
  questions: Question[] = this.testService.currentTest;
  questionFormGroup: FormGroup;
  currStep: number = 0;

  score: number = 0;

  @ViewChild(MatStepper, { static: false }) stepper: MatStepper;

  constructor(private testService: TestService) {}

  ngOnInit() {}

  finishedQuestion(isCorrectAnswer: boolean) {
    this.score += isCorrectAnswer ? 1 : 0;
    this.stepper.next();
  }

  startNewTest() {
    this.questions = this.testService.generateNewTest();
    this.currStep = -1;
    this.stepper.reset();
  }
}
