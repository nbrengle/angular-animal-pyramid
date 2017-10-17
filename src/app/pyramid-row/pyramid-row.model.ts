import { Animal } from '../animal.model';

export class PyramidRow {
    animals: Array<Animal>;

    constructor(animals: Array<Animal>) {
        this.animals = animals;
    }

    printProps(): void {
        let propVal;
        for(let propName in this.animals) {
            propVal = this.animals[propName];
            console.log(propName,propVal);
        }
    }
}
