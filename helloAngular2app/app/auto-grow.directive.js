System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AutogrowDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //ElementRef givees access to the host Element
            //Renderer : service used to modify that element
            AutogrowDirective = (function () {
                // _elem-----_ indicates that this is a private datatype in this class
                //  _elem:ElementRef;
                //  _render:Renderer;
                function AutogrowDirective(elem, render) {
                    this.elem = elem;
                    this.render = render;
                    this.elem = elem;
                    this.render = render;
                }
                AutogrowDirective.prototype.onFocus = function () {
                    this.render.setElementStyle(this.elem, 'width', '200');
                };
                AutogrowDirective.prototype.onBlur = function () {
                    this.render.setElementStyle(this.elem, 'width', '120');
                };
                AutogrowDirective = __decorate([
                    core_1.Directive({
                        selector: '[autoGrow]',
                        host: {
                            //subscribe to events
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutogrowDirective);
                return AutogrowDirective;
            }());
            exports_1("AutogrowDirective", AutogrowDirective);
        }
    }
});
//# sourceMappingURL=auto-grow.directive.js.map