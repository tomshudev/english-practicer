import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Word } from "src/app/services/words.service";

@Component({
  selector: "app-validate-remove-dialog",
  templateUrl: "./validate-remove-dialog.component.html",
  styleUrls: ["./validate-remove-dialog.component.less"]
})
export class ValidateRemoveDialog {
  constructor(
    public dialogRef: MatDialogRef<ValidateRemoveDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Word
  ) {}
}
