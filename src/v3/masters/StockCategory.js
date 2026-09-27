import { createMasterApi } from "../core/index.js";

const StockCategory = createMasterApi({
    inType: "StockCategory",
    inSelectedFetch: "Name, Parent"
});

export { StockCategory };
export default StockCategory;
