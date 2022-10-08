import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { IndexEmployeeComponent } from './Components/Employees/index-employee/index-employee.component';
import { ImageSliderComponent } from './Components/image-slider/image-slider.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {path: '',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'/home',pathMatch:'full'}, // Default path
    {path: 'home',component: ImageSliderComponent},
    {path : "employees" , component: IndexEmployeeComponent},
    {path : "add-employee" , component: AddEmployeeComponent},


]},
{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
