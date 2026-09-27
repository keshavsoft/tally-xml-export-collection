import { createMasterApi } from "../core/index.js";

const StockGroup = createMasterApi({
    inType: "StockGroup",
    inSelectedFetch: "Name, Parent"
});

export { StockGroup };
export default StockGroup;
