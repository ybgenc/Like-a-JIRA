import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-compview',
  templateUrl: './compview.component.html',
  styleUrls: ['./compview.component.css']
})
export class CompviewComponent {

  title: string = '';
  tasks: Array <string> =[''];
  taskChecks : any = [false];

  constructor (private dialogRef : MatDialogRef<CompviewComponent>, 
              @Inject (MAT_DIALOG_DATA) public data : any, 
              public boardService : BoardService,
              private _snackBar : MatSnackBar) {}

  ngOnInit () {

    if(this.data.editMode){
      this.title = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title
      this.taskChecks = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status
      this.tasks = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].taskCheck
    }
  }

  deleteTask (i : number){
    this.tasks.splice(i,1)
    this.taskChecks.splice(i,1)
  }

  addTask() {
    this.tasks.push("")
    this.taskChecks.push(false)
  }

  closer() {

    this.dialogRef.close()
  }

  add() {
    if (this.tasks.some((element: string) => element === '')) {
      this._snackBar.open("Enter new task", "Ok");
    } 
    else {
      
      if(!this.data.editMode){
        this.boardService.boards[this.data.boardIndex].cards.push({
          title: this.title,
          taskCheck: this.tasks,
          status: this.taskChecks
        });
      }
      else{ 
         this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title = this.title
         this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status = this.taskChecks
         this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].taskCheck = this.tasks
      }
      
      this.boardService.localStorageUpdater();
      this.closer()
    }
  }
}
