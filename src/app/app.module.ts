import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarCompComponent } from './toolbar-comp/toolbar-comp.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { BoardCompComponent } from './board-comp/board-comp.component'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';
import { BrdDialogComponent } from './board-comp/brd-dialog/brd-dialog.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { DisplayBoardComponent } from './display-board/display-board.component';
import { ViewBoardComponent } from './view-board/view-board.component';
import { CompviewComponent } from './view-board/compview/compview.component'
import { FormsModule} from '@angular/forms'
import { MatCardModule} from '@angular/material/card'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatCheckboxModule } from '@angular/material/checkbox'


@NgModule({
  declarations: [
    AppComponent,
    ToolbarCompComponent,
    BoardCompComponent,
    BrdDialogComponent,
    DisplayBoardComponent,
    ViewBoardComponent,
    CompviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatCheckboxModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
