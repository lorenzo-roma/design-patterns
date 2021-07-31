import AppServiceFactory from "../abstract/AppServiceFactory";
import LogService from "../abstract/LogService";
import StorageService from "../abstract/StorageService";
import ProductionLogService from "../services/ProductionLogService";
import ProductionStorageService from "../services/ProductionStorageService";

export default class ProductionServiceFactory implements AppServiceFactory{

    createStorageService(): StorageService {
        return new ProductionStorageService();
    }
    createLoggerService(): LogService {
        return new ProductionLogService();
    }

}