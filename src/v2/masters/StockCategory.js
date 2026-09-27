import { createMasterApi } from "../core/index.js";

const StockCategory = createMasterApi({
    inType: "StockCategory",
    inFetch: "Name, Parent, *"
});

export { StockCategory };
export default StockCategory;
