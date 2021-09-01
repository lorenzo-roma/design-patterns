import CryptoAsset from "./CryptoAsset";
import IndexAsset from "./IndexAsset";
import StockAsset from "./StockAsset";

export default interface Visitor {

    handleCryptoAsset(crypto: CryptoAsset):void;
    handleStockAsset(stock: StockAsset):void;
    handleIndexAsset(index: IndexAsset):void;

}