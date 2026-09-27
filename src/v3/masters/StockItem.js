import { createMasterApi } from "../core/index.js";

const StockItem = createMasterApi({
    inType: "StockItem",
    inSelectedFetch: "Name, Parent, BaseUnits, OpeningBalance, OpeningValue, OpeningRate, ClosingBalance, ClosingRate, ClosingValue, BatchAllocations.*"
});

export { StockItem };
export default StockItem;
