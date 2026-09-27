import { createMasterApi } from "../core/index.js";

const VoucherType = createMasterApi({
    inType: "VoucherType",
    inFetch: "*"
});

export { VoucherType };
export default VoucherType;
