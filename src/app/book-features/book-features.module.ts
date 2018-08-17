import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBookComponent } from './list-book/list-book.component';
import { DetailsBookComponent } from './details-book/details-book.component';
import { Routes, RouterModule } from '@angular/router';
import { BookService } from './book.service';
import { SortDirective } from './sort.directive';

const routes: Routes = [
  { path: ':id', component: DetailsBookComponent },
  { path: '', component: ListBookComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ListBookComponent, DetailsBookComponent, SortDirective],
  providers: [BookService],
})
export class BookFeaturesModule { }
