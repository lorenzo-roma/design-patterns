import CryptoAsset from "./CryptoAsset";
import IndexAsset from "./IndexAsset";
import StockAsset from "./StockAsset";
import Visitor from "./Visitor";


export default class RiskCalculator implements Visitor {

    private risk: number = 0;

    handleCryptoAsset(crypto: CryptoAsset): void {
        this.risk += crypto.risk * 3;
    }
    handleStockAsset(stock: StockAsset): void {
        this.risk += stock.risk * 2;
    }
    handleIndexAsset(index: IndexAsset): void {
        this.risk += index.risk * 1;
    }

    getTotalRisk(): number {
        return this.risk;
    }
    
}