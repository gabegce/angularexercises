export class Dog {
    private _balance: number;
    private _name: string;
    private _lastOfficeVisit: Date;
    private _imgUrl: string = "https://i.pinimg.com/736x/e8/27/ce/e827ceb0075a679fb78abdbad020bc8c--mini-schnauzer-puppies-miniature-schnauzer.jpg";
    private _isMale: boolean;
    private _age: number;

    constructor(balance: number, name: string, isMale: boolean, age: number, lastOfficeVisit?: Date) {
        this._balance = balance;
        this._name = name;
        this._isMale = isMale;
        this._age = age;
        this._lastOfficeVisit = lastOfficeVisit || new Date();
        console.info('Created ' + this);
    }
    
    get balance(): number { return this._balance; }
    get name(): string { return this._name; }
    get lastOfficeVisit(): Date { return this._lastOfficeVisit; }
    get imgUrl(): string { return this._imgUrl; }
    get isMale(): boolean { return this._isMale; }
    get gender(): string { return ( this._isMale ? 'male' : 'female' ); }
    get age(): number { return this._age; }
    get isSenior(): boolean { return ( this.age > 7 ); }

    get examType(): string {
        let oneMonthInMs: number = 1000 * 60 * 60 * 24 * 30;
        let elapsedMonths: number = (new Date().getTime() - this.lastOfficeVisit.getTime()) / oneMonthInMs;
        if(elapsedMonths < 6) {
            return "";
        } else if(elapsedMonths < 12) {
            return "checkup";
        } else if(elapsedMonths < 24) {
            return "routine";
        } else if(elapsedMonths < 36) {
            return "major";
        } else {
            return "complete";
        }
    }

    get oneLine(): string {
        return `${this.name} with balance $${this.balance}`;
    }
    

}

let dog: Dog = new Dog(1, "Baby Preshy", true, 2);
console.log(dog.oneLine);