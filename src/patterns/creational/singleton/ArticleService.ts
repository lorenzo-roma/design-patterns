import Article from "./models/Article";
import Database from "./models/Db";

export default class ArticleService {
    
    getArticles(): Article[] {
        const db: Database = Database.getIstance();
        return db.findAllArticles();
    }

}