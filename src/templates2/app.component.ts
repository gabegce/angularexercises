import { Component } from '@angular/core';
@Component({
 selector: 'app-root',
 styleUrls: ['app.component.css'],
 templateUrl : `app.component.html`
})
export class AppComponent {

    title = 'app works now finally w00t!';
    private _property1 = 'imma property1 value yay';
    property2 = 'i am here, see?';

    private _src: string;
    private _alt: string;

    needsBorder:boolean;

    isSuccess:boolean;
    isHidden:boolean;
    isFourColumns:boolean;

    constructor() {
        this._property1 = 'property1 value from the constructor';

        this._src = "https://i.pinimg.com/736x/e8/27/ce/e827ceb0075a679fb78abdbad020bc8c--mini-schnauzer-puppies-miniature-schnauzer.jpg";
        this._alt = "cute doggie";

        this.needsBorder = true;
        this.isSuccess = false;
        this.isHidden = false;
        this.isFourColumns = false;
    }
    
    public get property1():string {
        return this._property1 + ' from the accessor';
    }

    get src():string { return this._src; }
    get alt():string { return this._alt; }
}