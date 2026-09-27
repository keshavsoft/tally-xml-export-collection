import { createMasterApi } from "../core/index.js";

const Godown = createMasterApi({
    inType: "Godown",
    inSelectedFetch: "Name, Parent, Address.*"
});

export { Godown };
export default Godown;
