import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
@Component({
    selector: 'my-app',
    template: `
                <h1>Hello angular2</h1>
                <courses></courses>
                <authors></authors>
                `,
    directives:[CoursesComponent,AuthorsComponent]
    //directives are used to extend or control DOM
})
export class AppComponent { 
   
}