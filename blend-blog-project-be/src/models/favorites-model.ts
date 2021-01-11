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

    findByUser(userId: number, blogpostId: number) {
        return db('favorites')
        .where('favorites.user_id', userId && 'favorites.blogpost_id', blogpostId)
    }

    add(favorites: string) {
        return db('favorites')
        .insert(favorites, "id")
    }

    delete(id: number) {
        return db('favorites')
        .where("favorite.id", id)
        .del()
    }
}