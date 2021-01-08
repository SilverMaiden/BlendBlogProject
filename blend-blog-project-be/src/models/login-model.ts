
import db from '../../db-config.js';
export class LogIns {
    // field
    thing:string
    constructor() {
        this.thing = '';
    }

    findBy(filter: any) {
        return db('users')
        .where(filter)
    }
}
