import Asset from "./Asset";
import Visitor from "./Visitor";


export default class IndexAsset extends Asset {

    accept(visitor: Visitor):void {
        visitor.handleIndexAsset(this);
    }

}