import ArticleService from "./ArticleService";
import Article from "./models/Article";
import User from "./models/User";
import UserService from "./UserService";


const userService = new UserService();
const users: User[] = userService.getUsers();

const articleService = new ArticleService();
const articles: Article[] = articleService.getArticles();

console.log(users);
console.log(articles);