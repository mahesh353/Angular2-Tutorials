"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
//Step 1 : To use Routing in angular2 we need to import RouterModule and in the declaration section.
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var student_component_1 = require('./student.component');
var department_component_1 = require('./department.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            //imports : contains the names of all the modules which we are using in out application
            imports: [
                platform_browser_1.BrowserModule,
                //Step : 2 We need to use the forRoot method of angular2 to register the roots in the application
                router_1.RouterModule.forRoot([
                    {
                        //This is empty path we have added to redirect user to department directly 
                        //while specifying empty path we need to use pathMatch Property
                        path: '', redirectTo: '/departments', pathMatch: 'full'
                    },
                    {
                        path: 'departments', component: department_component_1.DepartmentComponent
                    },
                    {
                        path: 'students', component: student_component_1.StudentComponent
                    }
                ])
            ],
            //declarations : contains name of all the components which are part of current module
            declarations: [app_component_1.AppComponent, student_component_1.StudentComponent, department_component_1.DepartmentComponent],
            //bootstrap : here we have mentioned the starting component
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map