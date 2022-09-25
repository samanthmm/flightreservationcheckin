import { ConfirmcheckinComponent } from './confirmcheckin/confirmcheckin.component';
import { ChekinComponent } from './chekin/chekin.component';
import { StartcheckinComponent } from './startcheckin/startcheckin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',redirectTo:'',pathMatch:'full'
  },

  {

    path:'startCheckIn',
    component:StartcheckinComponent
  },
  {

    path:'checkin/:id',
    component:ChekinComponent
  },
  {

    path:'confirmCheckIn',
    component:ConfirmcheckinComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
