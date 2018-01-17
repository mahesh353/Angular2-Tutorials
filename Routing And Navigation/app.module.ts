import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Step 1 : To use Routing in angular2 we need to import RouterModule and in the declaration section.
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { DepartmentComponent } from './department.component';

@NgModule({
  //imports : contains the names of all the modules which we are using in out application
  imports: [
    BrowserModule,
    //Step : 2 We need to use the forRoot method of angular2 to register the roots in the application
    RouterModule.forRoot([
      {
        //This is empty path we have added to redirect user to department directly 
        //while specifying empty path we need to use pathMatch Property
        path: '', redirectTo: '/departments', pathMatch: 'full'
      },
      {
        path: 'departments', component: DepartmentComponent
      },
      {
        path: 'students', component: StudentComponent
      }
    ])
  ],
  //declarations : contains name of all the components which are part of current module
  declarations: [AppComponent, StudentComponent, DepartmentComponent],
  //bootstrap : here we have mentioned the starting component
  bootstrap: [AppComponent]
})

export class AppModule {
}
