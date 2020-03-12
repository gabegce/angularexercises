import { Dog } from './dog';

export class MockDogs {
    static SIX: Dog[] = [
        new Dog(1, "Puppy", false, 4, new Date(2019, 1, 2)),
        new Dog(2, "Bownie", false, 5, new Date(2020, 1, 3)),
        new Dog(3, "Preshy", false, 6, new Date(2020, 1, 4)),
        new Dog(4, "Ginger", false, 7, new Date(2020, 1, 5)),
        new Dog(5, "Mimi", false, 8, new Date(2020, 1, 6)),
        new Dog(6, "Chockers", false, 9, new Date(2010, 1, 7))
    ]
}