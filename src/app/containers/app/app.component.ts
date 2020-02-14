import { Component } from "@angular/core";
import { TestService } from "src/app/services/test.service";
import { WordsService } from "src/app/services/words.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  constructor(
    private testSerice: TestService,
    private wordsService: WordsService
  ) {}

  handleTestGeneration(index: number) {
    this.testSerice.nextTest.next(
      index === 1 ? this.testSerice.generateNewTest() : []
    );
  }
}
