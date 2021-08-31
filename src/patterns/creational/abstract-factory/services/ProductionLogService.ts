import LogService from "../abstract/LogService";

export default class ProductionLogService implements LogService {
    log(message: String){
        console.log("[PRODUCTION-LOG-SERVICE]: " + message);
    }
}