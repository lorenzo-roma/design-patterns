import AppState from "./AppState";
import Observer from "./Observer";

export default class AppView implements Observer<AppState>{

    update(state: AppState): void {
        console.log(state.value);
    }
    
}