import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BehaviorSubject, timer, NEVER, interval } from "rxjs";
import {
  switchMap,
  map,
  takeWhile,
  tap,
  startWith,
  delay,
  mapTo,
  take
} from "rxjs/operators";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.less"]
})
export class TimerComponent implements OnInit {
  @Output() timerDone = new EventEmitter<boolean>();

  amount: number = 60;
  currentTime: string = "01:00";

  constructor() {}

  ngOnInit() {}

  timer$ = timer(0, 1000)
    .pipe(
      take(this.amount + 1),
      map(t => this.amount - t)
    )
    .subscribe({
      next: t => {
        this.currentTime = t === 60 ? "01:00" : `00:${t < 10 ? "0" + t : t}`;
      },
      complete: () => this.timerDone.emit(true)
    });
}
