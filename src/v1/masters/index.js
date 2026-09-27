import { createMasterApi } from "../createApi.js";

const Company = createMasterApi({ inType: "Company", inFetch: "$$Alias:Name" });
const Ledger = createMasterApi({ inType: "Ledger", inFetch: "Name, Parent, OpeningBalance, ClosingBalance, GSTRegistrationType, GSTIN" });
const Group = createMasterApi({ inType: "Group", inFetch: "Name, Parent" });
const StockItem = createMasterApi({ inType: "StockItem", inFetch: "Name, Parent, BaseUnits, OpeningBalance, OpeningValue, OpeningRate, ClosingBalance, ClosingRate, ClosingValue, BatchAllocations.*" });
const StockGroup = createMasterApi({ inType: "StockGroup", inFetch: "Name, Parent" });
const StockCategory = createMasterApi({ inType: "StockCategory", inFetch: "Name, Parent" });
const Unit = createMasterApi({ inType: "Unit", inFetch: "*" });
const Godown = createMasterApi({ inType: "Godown", inFetch: "Name, Parent, Address.*" });
const CostCategory = createMasterApi({ inType: "CostCategory", inFetch: "Name, AllocateRevenue, AllocateNonRevenue" });
const CostCentre = createMasterApi({ inType: "CostCentre", inFetch: "Name, Category, Parent" });
const Currency = createMasterApi({ inType: "Currency", inFetch: "Name, ExpandedSymbol, DecimalSymbol" });
const VoucherType = createMasterApi({ inType: "VoucherType", inFetch: "Name, Parent, NumberingMethod" });
const Employee = createMasterApi({ inType: "Employee", inFetch: "Name, Parent, DateOfJoining" });
const AttendanceType = createMasterApi({ inType: "AttendanceType", inFetch: "Name, AttendanceProductionType, PeriodType" });
const TaxUnit = createMasterApi({ inType: "TaxUnit", inFetch: "*" });
const TariffClassification = createMasterApi({ inType: "TariffClassification", inFetch: "*" });

const masters = {
    Company,
    Ledger,
    Group,
    StockItem,
    StockGroup,
    StockCategory,
    Unit,
    Godown,
    CostCategory,
    CostCentre,
    Currency,
    VoucherType,
    Employee,
    AttendanceType,
    TaxUnit,
    TariffClassification
};

export {
    Company,
    Ledger,
    Group,
    StockItem,
    StockGroup,
    StockCategory,
    Unit,
    Godown,
    CostCategory,
    CostCentre,
    Currency,
    VoucherType,
    Employee,
    AttendanceType,
    TaxUnit,
    TariffClassification,
    masters
};

export default masters;
