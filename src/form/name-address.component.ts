import { Component } from '@angular/core';
import { Name, Address } from './model/formSchemas';

@Component({
    selector: 'name-address-form',
    styleUrls: ['name-address.component.css'],
    templateUrl: 'name-address.component.2.html'
})

export class NameAddressForm {
    submittedDataText: string;
    data: any;

    private _name: Name;
    private _address: Address;

    constructor() {
        this._name = new Name();
        this._address = new Address();
    }

    get name(): Name { return this._name; }
    set name(arg: Name) { this._name = arg; }

    get address(): Address { return this._address; }
    set address(arg: Address) { this._address = arg; }

    submittingForm1($event, data): void {
        $event.preventDefault();
        console.log('Data 1 was submitted.');
        this.submittedDataText = data.nameFirst + ' ' + data.nameLast;
    }

    submittingForm2($event, data) {

    }

    showEachPropertyOf(data): void {
        for(var eachKey in data) {
            console.info(eachKey, '=', data[eachKey]);
        }
        return;
    }

    showStringified(data): void {
        console.info('Stringified data: ', JSON.stringify(data, null, 2));
    }

}