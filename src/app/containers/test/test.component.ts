import { Component, OnInit } from "@angular/core";
import { TestService } from "src/app/services/test.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.less"]
})
export class TestComponent implements OnInit {
  constructor(private testService: TestService) {}

  ngOnInit() {}
}