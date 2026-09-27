import { createMasterApi } from "../core/index.js";

const Employee = createMasterApi({
    inType: "Employee",
    inSelectedFetch: "Name, Parent, DateOfJoining"
});

export { Employee };
export default Employee;
