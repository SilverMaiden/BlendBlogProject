import db from '../../db-config.js';
export class Users {
    // field
    thing:string
    constructor() {
        this.thing = '';
    }


    find(id?: number) {
        if (id) {
            return db('users')
            .where('users.id', id)
            .first()
        } else {
            return db('users');
        }
    }
    // Using findByEmail for Login
    findByEmail(email: string) {
        if (email) {
            return db('users')
            .where('users.email', email)
            .first()
    }
}

    findBlogPosts(id: any) {
        return db('blogposts' )
            .where('blogposts.user_id', id)
    }

    findFavorites(...args: any[]) {
        const id = args[0];
        return db('favorites as f' )
            .where('f.user_id', id)

    }

    add(users: string) {
        return db('users')
        .insert(users, "id")
        .then(([id]: number[]) => this.find(id));
    }
}
