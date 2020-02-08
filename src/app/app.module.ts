import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material";
import { MatSortModule } from "@angular/material/sort";

import { AppComponent } from "./containers/app/app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DictionaryComponent } from "./containers/dictionary/dictionary.component";
import { TestComponent } from "./containers/test/test.component";
import { NewWordDialog } from "./components/new-word-dialog/new-word-dialog.component";
import { ValidateRemoveDialog } from "./components/validate-remove-dialog/validate-remove-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    TestComponent,
    NewWordDialog,
    ValidateRemoveDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewWordDialog, ValidateRemoveDialog]
})
export class AppModule {}
