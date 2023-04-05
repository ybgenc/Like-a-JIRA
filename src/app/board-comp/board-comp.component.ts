import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { BrdDialogComponent } from './brd-dialog/brd-dialog.component';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-board-comp',
  templateUrl: './board-comp.component.html',
  styleUrls: ['./board-comp.component.css']
})
export class BoardCompComponent {

  constructor(private dialog : MatDialog, public boardService : BoardService){}

  dialogOpener(){
    
    const dialogRef = this.dialog.open(BrdDialogComponent, {width :'500px'})

  } 
  deleteBoard (index : number) {

    this.boardService.deleteBoard(index);
    
  }
}
