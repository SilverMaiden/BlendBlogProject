import db from '../../db-config.js';
export class Favorites {
    // field
    thing:string
    constructor() {
        this.thing = '';
    }

    find(id?:number) {
        if (id) {
            return db('favorites')
            .where('favorites.id', id)
        } else {
        return db('favorites');
    }
}

    findByUserAndBlogPost(userId: number, blogpostId: number) {
        return db('favorites')
        .where('favorites.user_id', userId)
        .where('favorites.blogpost_id', blogpostId)
    }


    findByUser(userId: number) {
        return db('favorites')
        .where('favorites.user_id', userId)
    }

    add(favorites: any) {
        return db('favorites')
        .insert(favorites, "id")
        .then(([id]: number[]) => this.find(id));

    }

    delete(id: number) {
        return db('favorites')
        .where("favorites.id", id)
        .del()
    }
}