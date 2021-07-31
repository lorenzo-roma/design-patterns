import AppServiceFactory from "./abstract/AppServiceFactory";
import StorageService from "./abstract/StorageService";
import LogService from "./abstract/LogService";
import ProductionServiceFactory from "./service-factories/ProductionServiceFactory";

const serviceFactory : AppServiceFactory = new ProductionServiceFactory();

const storage : StorageService = serviceFactory.createStorageService();
const logger : LogService = serviceFactory.createLoggerService();

logger.log(storage.getInfo())