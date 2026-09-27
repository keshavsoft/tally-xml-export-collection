import { createMasterApi } from "../core/index.js";

const VoucherType = createMasterApi({
    inType: "VoucherType",
    inSelectedFetch: "Name, Parent, NumberingMethod"
});

export { VoucherType };
export default VoucherType;
