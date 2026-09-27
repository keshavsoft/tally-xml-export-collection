import { createMasterApi } from "../core/index.js";

const Currency = createMasterApi({
    inType: "Currency",
    inSelectedFetch: "Name, ExpandedSymbol, DecimalSymbol"
});

export { Currency };
export default Currency;
