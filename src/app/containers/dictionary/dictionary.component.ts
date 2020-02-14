import { Component, OnInit, ViewChild } from "@angular/core";
import { WordsService, Word } from "src/app/services/words.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { NewWordDialog } from "src/app/components/new-word-dialog/new-word-dialog.component";
import { tap } from "rxjs/operators";
import { MatSort } from "@angular/material";
import { ValidateRemoveDialog } from "src/app/components/validate-remove-dialog/validate-remove-dialog.component";

@Component({
  selector: "app-dictionary",
  templateUrl: "./dictionary.component.html",
  styleUrls: ["./dictionary.component.less"]
})
export class DictionaryComponent implements OnInit {
  displayedColumns: string[] = ["word", "translation", "remove"];
  dataSource;
  wordsData = this.wordsService.wordsSubject
    .pipe(
      tap(words => {
        if (!this.dataSource) {
          this.dataSource = new MatTableDataSource<Word>([...words]);
          setTimeout(() => {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          });
        } else {
          this.dataSource.data = [...words];
        }
      })
    )
    .subscribe();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private wordsService: WordsService, public dialog: MatDialog) {}

  ngOnInit() {}

  addNewWord() {
    const dialogRef = this.dialog.open(NewWordDialog, {
      width: "50rem",
      data: new Word()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.wordsService.addNewWord(result);
      }
    });
  }

  removeWord(word: Word) {
    const dialogRef = this.dialog.open(ValidateRemoveDialog, {
      width: "50rem",
      data: word
    });

    dialogRef.afterClosed().subscribe((shouldRemove: boolean) => {
      if (shouldRemove) {
        this.wordsService.removeWord(word.id);
      }
    });
  }
}
