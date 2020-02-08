import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Word } from "src/app/services/words.service";

@Component({
  selector: "app-new-word-dialog",
  templateUrl: "./new-word-dialog.component.html",
  styleUrls: ["./new-word-dialog.component.less"]
})
export class NewWordDialog {
  constructor(
    public dialogRef: MatDialogRef<NewWordDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Word
  ) {}
}
