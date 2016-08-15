import {Directive,ElementRef,Renderer} from 'angular2/core';
//ElementRef givees access to the host Element
//Renderer : service used to modify that element
@Directive({
    selector : '[autoGrow]',
    host:{
        //subscribe to events
        '(focus)':'onFocus()',
        '(blur)':'onBlur()'
    }
})
export class AutogrowDirective{
     // _elem-----_ indicates that this is a private datatype in this class
    //  _elem:ElementRef;
    //  _render:Renderer;
     constructor(private elem:ElementRef,private render:Renderer){
         this.elem = elem;
         this.render = render;
     }
     onFocus(){
         this.render.setElementStyle(this.elem,'width','200');
     }

     onBlur(){
         this.render.setElementStyle(this.elem,'width','120');
     }
}