import db from '../../db-config.js';
export class Favorites {
    // field
    thing:string
    constructor() {
        this.thing = '';
    }


    find() {
        return db('favorites');
    }

    add(favorites: string) {
        return db('favorites')
        .insert(favorites, "id")
    }
}