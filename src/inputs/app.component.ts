import { Component, Input } from '@angular/core';
import { Dog } from './model/dog';
import { MockDogs } from './model/dog-data';

// optional child component

@Component({
    selector: 'input-child',
    templateUrl: 'inputchild.component.html'
})

export class InputChild {
    @Input('dogsToChild') dogsFromParent: Dog[];
    @Input() childVariableIn: string;
    @Input() childTextIn: string;
}

// optional child component

@Component({
    selector: 'dog-list',
    templateUrl : 'doglist.component.html'
})

export class DogList {
    @Input('dogsToChildAgain') dogsFromParent: Dog[];
}

// optional child component

@Component({
    selector: 'dog-name',
    template: `<div class="dog-nameContainer">{{ dogNameIn.name | uppercase }}</div>`
})

export class DogName {
    @Input() dogNameIn: Dog;
}

@Component({
 selector: 'app-root',
 styleUrls: ['app.component.css'],
 templateUrl : `app.component.html`
})
export class AppComponent {
    dogs = MockDogs.SIX;
    aNumber: number = 123;
}