import Database from "./models/Db";
import User from "./models/User";

export default class UserService {

    getUsers(): User[] {
        const db: Database = Database.getIstance();
        return db.findAllUsers();
    }


}