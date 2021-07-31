import LogService from "../abstract/LogService";

export default class TestLogService implements LogService{

    log(message: String){
        console.log("[TEST-LOG-SERVICE]: " + message);
    }
}