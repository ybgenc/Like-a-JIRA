import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../services/board.service';
import {MatDialog} from '@angular/material/dialog'
import { CompviewComponent } from './compview/compview.component';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent {

  boardIndex : any = 0
  boardTitle : string = ''

  constructor (private route:ActivatedRoute, public boardService : BoardService, private dialog : MatDialog) {}

  ngOnInit () : void {
    this.boardIndex = this.route.snapshot.paramMap.get('boardIndex');
    this.boardTitle = this.boardService.boards[this.boardIndex].title;

  }

  cardOpener() {
    
      const dialogRef = this.dialog.open(CompviewComponent, {width :'500px',
                                                             data : {boardIndex : this.boardIndex, editMode : false}})
  
  }

  deleteCard(indexCard : number) {
    this.boardService.boards[this.boardIndex].cards.splice(indexCard,1)
    this.boardService.localStorageUpdater()
  }

  updateCard(indexCard : number, card : any) {

    const dialogRef = this.dialog.open(CompviewComponent, {width :'500px',
                                                             data : {boardIndex : this.boardIndex, cardIndex : indexCard, editMode : true}})

  }

}
