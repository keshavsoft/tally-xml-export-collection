import { createMasterApi } from "../core/index.js";

const Godown = createMasterApi({
    inType: "Godown",
    inFetch: "Name, Parent, Address.*, *"
});

export { Godown };
export default Godown;
