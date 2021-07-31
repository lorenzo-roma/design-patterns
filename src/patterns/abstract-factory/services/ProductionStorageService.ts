import StorageService from "../abstract/StorageService";

export default class ProductionStorageService implements StorageService {

    getInfo(): String {
        return "I am a production storage service";
    }

}