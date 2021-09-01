import Asset from "./models/Asset";
import CryptoAsset from "./models/CryptoAsset";
import IndexAsset from "./models/IndexAsset";
import RiskCalculator from "./models/RiskCalculator";
import StockAsset from "./models/StockAsset";


const bitcoin = new CryptoAsset(10);
const SP500 = new IndexAsset(3);
const tesla = new StockAsset(6);

const portfolio: Asset[] = [bitcoin, SP500, tesla];

const riskCalculator: RiskCalculator = new RiskCalculator();

portfolio.forEach(asset=>asset.accept(riskCalculator));

console.log(riskCalculator.getTotalRisk());
