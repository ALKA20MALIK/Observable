import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const appRootes:Routes =[
    {path:'',component:HomeComponent},
    {path:'user/:id',component:UserComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(appRootes)],
    exports:[RouterModule]

})
export class AppRoutingModule{

}
