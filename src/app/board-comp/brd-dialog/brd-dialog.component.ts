import { Component,OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { MatDialog , MatDialogRef} from '@angular/material/dialog'
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-brd-dialog',
  templateUrl: './brd-dialog.component.html',
  styleUrls: ['./brd-dialog.component.css']
})
export class BrdDialogComponent {

  boardForm = new FormGroup ({
    title : new FormControl(null,[Validators.required])
})

constructor(private dialogRef : MatDialogRef<BrdDialogComponent>, private brdService : BoardService){}

  ngOnInit() {}

  cancel(){

    this.dialogRef.close()
  }

  add() {
    this.brdService.createBoard(this.boardForm.get('title')?.value)
  }
}

