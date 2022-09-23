import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateBookComponent} from "./create-book/create-book.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'create-book',
    pathMatch: 'full',
    component: CreateBookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
