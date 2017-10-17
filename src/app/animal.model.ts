export class Animal {
    species: string;
    rank: string;
    pyramidLevel: number;
    imageUrl: URL;

    constructor(species: string, rank: string, pyramidLevel: number, imageUrl: URL) {
        this.species = species;
        this.rank = rank;
        this.pyramidLevel = pyramidLevel;
        this.imageUrl = imageUrl;
    }
}
