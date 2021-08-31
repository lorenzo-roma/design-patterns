import LogService from "./LogService";
import StorageService from "./StorageService";

export default interface AppServiceFactory {
    createStorageService() : StorageService;
    createLoggerService() : LogService;
}