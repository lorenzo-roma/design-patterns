import Asset from "./Asset";
import Visitor from "./Visitor";

export default class CryptoAsset extends Asset {

    accept(visitor: Visitor): void {
        visitor.handleCryptoAsset(this);
    }
    
}