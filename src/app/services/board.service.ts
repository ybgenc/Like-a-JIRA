import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public boards : Array<any> = [];

  constructor() { 

    let storage = localStorage.getItem('boards')

    if (storage != null){
      this.boards = JSON.parse(storage);
    }

  }

  public createBoard(title : any) {

    let newBoardObject = {

      title:title,
      cards : []
    }
    this.boards.push(newBoardObject)

    localStorage.setItem('boards', JSON.stringify(this.boards))
  }

  public deleteBoard(boardNumber : number) {
    this.boards.splice(boardNumber,1);
    localStorage.setItem('boards', JSON.stringify(this.boards))
  }

  public localStorageUpdater () {
    localStorage.setItem('boards',JSON.stringify(this.boards))
  }
}
