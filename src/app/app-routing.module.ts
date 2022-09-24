import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateBookComponent} from "./create-book/create-book.component";
import {IndexComponent} from "./index/index.component";
import {SearchBookComponent} from "./search-book/search-book.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'create-book',
    pathMatch: 'full',
    component: CreateBookComponent,
  },
  {
    path: 'search-book',
    pathMatch: 'full',
    component: SearchBookComponent,
  },
  {
    path: 'signup',
    pathMatch: 'full',
    component: SignupComponent,
  },
  {
    path: 'signin',
    pathMatch: 'full',
    component: SignInComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
