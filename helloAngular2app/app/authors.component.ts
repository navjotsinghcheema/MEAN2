import {Component} from 'angular2/core';
import {AuthorService} from './authors.service';

@Component({
    selector:'authors',
    template:`<h2>authors</h2>
              {{title}}
              <ul>
              <li *ngFor="#author of authorsList">{{author}}</li>
              </ul>`,
    providers:[AuthorService]
})
export class AuthorsComponent{
    title:string="authors title";
    authorsList;
    constructor(authorService:AuthorService){
        this.authorsList = authorService.getAuthors();
    }
}