
import db from '../../db-config.js';
export class BlogPosts {
    // field
    thing:string
    constructor() {
        this.thing = '';
    }

    find(id?: number) {
        if (id) {
            return db('blogposts')
            .where('blogposts.id', id)
        } else {
            return db('blogposts');
        }
    }


    add(blogpost: any) {
        return db('blogposts')
        .insert(blogpost, "id", )
        .then(([id]: number[]) => this.find(id));

    }
    delete(id: number) {
        return db('blogposts')
        .where("blogposts.id", id)
        .del()
    }
}
