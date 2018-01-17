import { Component } from '@angular/core';

@Component({
    selector: 'my-department',
    templateUrl: './Routing and Navigation/department.component.html'
})

export class DepartmentComponent {

    public departments: any[] = [
        {
            id: 1,
            name: 'Information techonology'
        },
        {
            id: 2,
            name: 'Computer Science'
        },
        {
            id: 3,
            name: 'Data Science'
        },
        {
            id: 4,
            name: 'Math'
        },
        {
            id: 5,
            name: 'Cybersecurity'
        }
    ]

}