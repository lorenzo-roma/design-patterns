import AppState from "./AppState";
import AppView from "./AppView";

const appState: AppState = new AppState();

const appView: AppView = new AppView();

appState.addObserver(appView);

appState.setValue("First state value");
appState.setValue("Second state value");