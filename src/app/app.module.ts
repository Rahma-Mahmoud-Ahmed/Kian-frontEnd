import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageSliderComponent } from './Components/image-slider/image-slider.component';
import { IndexEmployeeComponent } from './Components/Employees/index-employee/index-employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    IndexEmployeeComponent,
    MainLayoutComponent,
    NotFoundComponent,
    AddEmployeeComponent,


  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  exports: [
    UiSwitchModule

  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
