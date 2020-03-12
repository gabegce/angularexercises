import { Component } from '@angular/core';
@Component({
 selector: 'app-root',
 styleUrls: ['app.component.css'],
 templateUrl : `app.component.html`
})
export class AppComponent {

    private title = 'app works now finally w00t!';
    private _property1 = 'imma property1 value yay';
    public property2 = 'i am here, see?';

    constructor() {
        this._property1 = 'property1 value from the constructor';
    }
    
    public get property1():string {
        return this._property1 + ' from the accessor';
    }
}