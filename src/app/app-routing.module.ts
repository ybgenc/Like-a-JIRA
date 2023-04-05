import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardCompComponent } from './board-comp/board-comp.component';
import { ViewBoardComponent } from './view-board/view-board.component';

const routes: Routes = [
  {path: '' , pathMatch:'full' , component:BoardCompComponent},
  {path: 'boards' , component : BoardCompComponent},
  {path: 'view-board/:boardIndex' ,  component : ViewBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
