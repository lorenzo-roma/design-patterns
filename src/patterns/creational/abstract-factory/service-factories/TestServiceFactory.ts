import TestLogService from "../services/TestLogService";
import AppServiceFactory from "../abstract/AppServiceFactory";
import LogService from "../abstract/LogService";
import StorageService from "../abstract/StorageService";
import TestStorageService from "../services/TestStorageService";

export default class TestServiceFactory implements AppServiceFactory{

    createLoggerService(): LogService {
        return new TestLogService();
    }

    createStorageService(): StorageService {
        return new TestStorageService();
    }

    
    
}