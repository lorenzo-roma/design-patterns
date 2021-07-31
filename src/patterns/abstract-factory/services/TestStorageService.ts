import StorageService from "../abstract/StorageService";

export default class TestStorageService implements StorageService{

    getInfo(){
        return "I am a test storage service";
    }
}