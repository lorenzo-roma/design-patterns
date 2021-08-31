import Article from "./Article";
import User from "./User";

export default class Database {

    static istance: Database;

    private constructor(){}

    static getIstance() : Database {
        if(this.istance == null){
            this.istance = new Database();
        }
        return this.istance;
    }

    findAllUsers(): User[]{
        //retrieve your users
        return [];
    }

    findAllArticles(): Article[] {
        //retrieve your articles
        return [];
    }

}