import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutogrowDirective} from './auto-grow.directive'

@Component({
    selector:'courses',
    template:`<h2>courses</h2>
              {{title}}
              <input type="text" autoGrow />
              <ul>
              <li *ngFor="#course of courses">{{course}}</li> 
              </ul>
              hi!this is navjot`,
    providers: [CourseService],
    directives:[AutogrowDirective]
})
export class CoursesComponent {
 //defines the properties of the component
    title:string="Course Title";
    courses;
    constructor(courseService:CourseService){
        this.courses = courseService.getCourses();
    }
}