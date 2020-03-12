import { Component } from '@angular/core';
import { Dog } from './model/dog';
import { MockDogs } from './model/dog-data';

@Component({
 selector: 'app-root',
 styleUrls: ['app.component.css'],
 templateUrl : `app.component2.html`
})
export class AppComponent {
    
    private _dog : Dog;
    mockDogs : Dog[] = MockDogs.SIX;

    buyTemplate: string = `<div class="ad"><h1>Buy Now pls!</h1></div>`;

    constructor() {
        this._dog = new Dog(1, "da baybee boi", true, 3);
        console.info('Created DogPanel');
    }

    delayedMessage: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => resolve(this.buyTemplate), 4000);
    });

    get dog() {
        return this._dog;
    }

    
}