
import db from '../../db-config.js';
export class RegisterUser {
    // field
    thing:string
    constructor() {
        this.thing = '';
    }

    findBy(filter: any) {
        return db('users')
        .where(filter)
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

    addUser(user: any) {
        return db('users')
        .insert(user, "id", )
        .then(([id]: number[]) => this.find(id));
    }
}