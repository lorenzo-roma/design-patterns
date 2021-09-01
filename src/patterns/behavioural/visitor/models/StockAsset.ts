import Asset from "./Asset";
import Visitor from "./Visitor";


export default class StockAsset extends Asset {

    accept(visitor: Visitor):void {
        visitor.handleStockAsset(this);
    }

}