import { createMasterApi } from "../core/index.js";

const Ledger = createMasterApi({
    inType: "Ledger",
    inFetch: "Name, Parent, OpeningBalance, ClosingBalance, GSTRegistrationType, GSTIN, Address.*, LEDGSTREGDETAILS.LIST"
});

export { Ledger };
export default Ledger;
