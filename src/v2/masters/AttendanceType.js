import { createMasterApi } from "../core/index.js";

const AttendanceType = createMasterApi({
    inType: "AttendanceType",
    inFetch: "Name, AttendanceProductionType, PeriodType, *"
});

export { AttendanceType };
export default AttendanceType;
