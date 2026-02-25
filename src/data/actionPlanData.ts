export interface ActionItem {
  id: number;
  category: string;
  priority: string;
  plannedAction: string;
  owner: string;
  ecd: string;
  status: string;
  pendingReason: string;
  remarks: string;
}

export const actionItems: ActionItem[] = [
  { id: 1, category: "Customer Data Accuracy", priority: "P1", plannedAction: "Sharing the complete list of all Accounts' ICCIDs with IT team for getting the accurate locations from UAE Network Team", owner: "Ahmed Fathy", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 2, category: "Customer Data Accuracy", priority: "P1", plannedAction: "Analysing the Machup accounts' locations against the list to verify the suspected wrong locations", owner: "Fadil Alzarouni", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 3, category: "Customer Data Accuracy", priority: "P1", plannedAction: "Sharing the ICCIDs list with the Network team", owner: "Fadil Alzarouni", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 4, category: "Customer Data Accuracy", priority: "P1", plannedAction: "Verifying the mismatched accounts' locations (Out of Emirate) by direct calls", owner: "Ashraf Hassan", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 5, category: "Customer Data Accuracy", priority: "P1", plannedAction: "Updating the resulted locations into the Mashup through the data cleansing activity by Ops Team.", owner: "Ahmed Fathy", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 6, category: "Customer Data Accuracy", priority: "P2", plannedAction: "Call center reached to the 1080 and remaining unreachable 544 Accounts are not verified", owner: "Ashraf Hassan", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 7, category: "Customer Data Accuracy", priority: "P2", plannedAction: "335 Accounts escalated to UAE Network Team", owner: "Fadil Alzarouni", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 8, category: "Customer Data Accuracy", priority: "P2", plannedAction: "209 Accounts to be analysed to decide the next action, either with the PMO (For Developers) or UAE IT (For Individual Villas)", owner: "Fadil Alzarouni", ecd: "Tuesday, February 24, 2026", status: "Pending", pendingReason: "In Progress", remarks: "" },
  { id: 9, category: "Customer Data Accuracy", priority: "P2", plannedAction: "Raising 209 TTs to the Field team immediately", owner: "Ahmed Fathy", ecd: "Tuesday, February 24, 2026", status: "Pending", pendingReason: "In Progress", remarks: "" },
  { id: 10, category: "Customer Data Accuracy", priority: "P2", plannedAction: "Escalating the Developer villas to the PMO for validating the locations", owner: "Ahmed Fathy", ecd: "Wednesday, February 25, 2026", status: "Pending", pendingReason: "In Progress", remarks: "" },
  { id: 11, category: "Customer Data Accuracy", priority: "P2", plannedAction: "Escalating the Individual villas to UAE IT", owner: "Fadil Alzarouni", ecd: "Wednesday, February 25, 2026", status: "Pending", pendingReason: "In Progress", remarks: "" },
  { id: 12, category: "Customer Data Accuracy", priority: "P1", plannedAction: "Check the availability for Developer contacts to be updated through the security team on-site.", owner: "Hatem Gado", ecd: "", status: "Rejected", pendingReason: "Rejected", remarks: "" },
  { id: 13, category: "Customer Data Accuracy", priority: "P1", plannedAction: "Requesting all customer billing data to validate contact information against bills information.", owner: "Hatem Gado", ecd: "", status: "Rejected", pendingReason: "Rejected", remarks: "" },
  { id: 14, category: "Customer Data Accuracy", priority: "P1", plannedAction: "Validating all individual bills names against the current villa contact details and update the DB with the accurate information.", owner: "Hatem Gado", ecd: "", status: "Rejected", pendingReason: "Rejected", remarks: "" },
  { id: 15, category: "Customer Data Accuracy", priority: "P1", plannedAction: "Unifing the data source insertion to the HomeSync to ensure the single source of location for the installation. And to automate the emirate selection by using the LAT/LONG information. Confirm the admin of the IoT Portal to block the location update using it", owner: "Amr Fahmy", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 16, category: "Customer Data Accuracy", priority: "P2", plannedAction: "Automating the location update using IoTSync to retire the account automatically to reflect the location on the Mashup", owner: "Amr Fahmy", ecd: "", status: "Pending", pendingReason: "Phase 2", remarks: "" },
  { id: 17, category: "Customer Data Accuracy", priority: "P2", plannedAction: "Confirm that the bulk activation is fetching the MOI Reference only without any changes in the contact details", owner: "Ahmed Fathy", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 18, category: "Solution Reliability", priority: "P1", plannedAction: "UAT Document to be shared by IT team for initiating the Testing by Ops Team", owner: "Fadil Alzarouni", ecd: "Monday, March 02, 2026", status: "Pending", pendingReason: "In Progress", remarks: "" },
  { id: 19, category: "Solution Reliability", priority: "P1", plannedAction: "Testing and confirmation on the managed engine performance and functionality", owner: "Ahmed Fathy", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 20, category: "Solution Reliability", priority: "", plannedAction: "Sharing the testing results to IT team with any requirements", owner: "Ahmed Fathy", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 21, category: "Solution Reliability", priority: "P2", plannedAction: "Getting the E2E Process flow of the IoT Sync to explore all enhancements and automation possibilities", owner: "Amr Fahmy", ecd: "Tuesday, February 24, 2026", status: "Pending", pendingReason: "In Progress", remarks: "" },
  { id: 22, category: "Solution Reliability", priority: "P2", plannedAction: "Ensuring to fulfil all points raised by the testing and optimize the managed engine accordingly", owner: "Fadil Alzarouni", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 23, category: "Solution Reliability", priority: "P2", plannedAction: "New installation locations to be captured by installation team and updated on the Managed Engine through IoT Sync", owner: "Hatem Gado", ecd: "", status: "Pending", pendingReason: "In Progress", remarks: "" },
  { id: 24, category: "Solution Reliability", priority: "P2", plannedAction: "IoT Sync Design review and integration with Mashup", owner: "Fadil Alzarouni", ecd: "", status: "Pending", pendingReason: "In Progress", remarks: "" },
  { id: 25, category: "Solution Reliability", priority: "P2", plannedAction: "Confirming the final integration of the IoT Sync with the managed engine", owner: "Fadil Alzarouni", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 26, category: "Solution Reliability", priority: "P2", plannedAction: "App development to share the process flow to analyze if any room for enhancement is available", owner: "Ahmed Fathy", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 27, category: "Solution Reliability", priority: "P2", plannedAction: "Getting the approval on the data consumption waiving from UAE business team.", owner: "Amr Fahmy", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 28, category: "Solution Reliability", priority: "P2", plannedAction: "Giving the confirmation to Ops team to proceed with the upgrade", owner: "Amr Fahmy", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 29, category: "Solution Reliability", priority: "P1", plannedAction: "Plan the upgrade with the vendor and confirm the upgrade timeline within 1 Month", owner: "Ahmed Fathy", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 30, category: "Solution Reliability", priority: "P1", plannedAction: "Updating all service OPIs to the auto ticketing tool.", owner: "Ahmed Fathy", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 31, category: "Solution Reliability", priority: "P1", plannedAction: "Product team to add to ITSM for the cases pending on the product", owner: "Ahmed Fathy", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 32, category: "Solution Reliability", priority: "P2", plannedAction: "Integrating the new OPIs with the managed engine.", owner: "Ahmed Fathy", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 33, category: "Solution Reliability", priority: "P2", plannedAction: "Implementing the confirmed OPIs with the managed engine.", owner: "Fadil Alzarouni", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 34, category: "Solution Reliability", priority: "P2", plannedAction: "Migrating the SRC team from AVAYA to Genisys as same as Care team (Aligning directly with the technical team)", owner: "Ashraf Hassan", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 35, category: "Solution Reliability", priority: "P2", plannedAction: "Adding Mashup technical Team with DevOps to the meetings for any technical challenges", owner: "Ahmed Fathy", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 36, category: "Solution Reliability", priority: "P2", plannedAction: "Complete the full integration of Mashup with Genysis", owner: "Ahmed Fathy", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 37, category: "Solution Reliability", priority: "P2", plannedAction: "Sharing all call center requirements for the CRM system planning.", owner: "Ashraf Hassan", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 38, category: "Solution Reliability", priority: "P2", plannedAction: "Budget requirement to be prepared for business approval.", owner: "Fadil Alzarouni", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 39, category: "Solution Reliability", priority: "P2", plannedAction: "Business alignment and approval.", owner: "Hatem Gado", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 40, category: "Solution Reliability", priority: "P2", plannedAction: "New system component integration and required training for the call center team.", owner: "Fadil Alzarouni", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 41, category: "Maintenance Readiness", priority: "P2", plannedAction: "ARC/Contact Center Capacity Planning/Hiring", owner: "Ashraf Hassan", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 42, category: "Maintenance Readiness", priority: "P2", plannedAction: "Hiring Process completion with HR Portal (Hire&Grow)", owner: "Ashraf Hassan", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 43, category: "Maintenance Readiness", priority: "P2", plannedAction: "Call Center DR system design and requirements", owner: "Fadil Alzarouni", ecd: "Wednesday, February 25, 2026", status: "Pending", pendingReason: "In Progress", remarks: "" },
  { id: 44, category: "Maintenance Readiness", priority: "P1", plannedAction: "DR for the auto-ticketing (Proposal Submission)", owner: "Fadil Alzarouni", ecd: "Tuesday, February 24, 2026", status: "Pending", pendingReason: "In Progress", remarks: "" },
  { id: 45, category: "Maintenance Readiness", priority: "P1", plannedAction: "Preparing all capacity planning for Ops Team", owner: "Amr Rashwan", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 46, category: "Maintenance Readiness", priority: "P1", plannedAction: "Preparing all capacity planning for field operations", owner: "Amr Fahmy", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 47, category: "Maintenance Readiness", priority: "P1", plannedAction: "Submitting the v1.0 process for business discussion", owner: "Amr Fahmy", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 48, category: "Maintenance Readiness", priority: "P1", plannedAction: "Aligning with Business team to amend the process activities efficiently", owner: "Hatem Gado", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 49, category: "Maintenance Readiness", priority: "P1", plannedAction: "Updating the last agreed process for managed engine implementation", owner: "Amr Fahmy", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 50, category: "Maintenance Readiness", priority: "P1", plannedAction: "Submitting any OPIs, workflows changes that need to be updated on the managed engine", owner: "Ahmed Fathy", ecd: "", status: "Pending", pendingReason: "Phase 2", remarks: "" },
  { id: 51, category: "Maintenance Readiness", priority: "P1", plannedAction: "Optimizing the changes on the managed engine accordingly", owner: "Fadil Alzarouni", ecd: "", status: "Pending", pendingReason: "Phase 2", remarks: "" },
  { id: 52, category: "Maintenance Readiness", priority: "P1", plannedAction: "Complete Screening for all received staff to approve them", owner: "Amr Fahmy", ecd: "", status: "Done", pendingReason: "Done", remarks: "" },
  { id: 53, category: "Maintenance Readiness", priority: "P1", plannedAction: "Fulfill all team requirements to start on-ground activities", owner: "Hatem Gado", ecd: "Tuesday, February 24, 2026", status: "Pending", pendingReason: "In Progress", remarks: "" },
  { id: 54, category: "Maintenance Readiness", priority: "P1", plannedAction: "Ensure all new staff Remedy + Managed Engine account creation with the proper group", owner: "Amr Fahmy", ecd: "", status: "Pending", pendingReason: "Dependency", remarks: "" },
  { id: 55, category: "Maintenance Readiness", priority: "P2", plannedAction: "Submitting the required hiring requests by Ops team", owner: "Amr Rashwan", ecd: "", status: "Pending", pendingReason: "In Progress", remarks: "" },
  { id: 56, category: "Maintenance Readiness", priority: "P2", plannedAction: "Submitting the required hiring requests by field team", owner: "Amr Fahmy", ecd: "", status: "Pending", pendingReason: "In Progress", remarks: "" },
  { id: 57, category: "Maintenance Readiness", priority: "P2", plannedAction: "Start quick screening for referral submission to the HR for the field Candidates", owner: "Ahmed Fathy", ecd: "Thursday, February 26, 2026", status: "Pending", pendingReason: "In Progress", remarks: "" },
  { id: 58, category: "Maintenance Readiness", priority: "P1", plannedAction: "Screening the transfer technicians before the complete fulfilment", owner: "Amr Fahmy", ecd: "Wednesday, February 25, 2026", status: "Pending", pendingReason: "In Progress", remarks: "" },
];

export const owners = ["Ahmed Fathy", "Fadil Alzarouni", "Amr Fahmy", "Ashraf Hassan", "Amr Rashwan", "Hatem Gado"] as const;

export type Owner = typeof owners[number];

export function getOwnerStats(owner: string) {
  const ownerItems = actionItems.filter(i => i.owner === owner);
  const done = ownerItems.filter(i => i.status === "Done").length;
  const pending = ownerItems.filter(i => i.status === "Pending").length;
  const rejected = ownerItems.filter(i => i.status === "Rejected").length;
  const total = ownerItems.length;

  const pendingItems = ownerItems.filter(i => i.status === "Pending");
  const inProgress = pendingItems.filter(i => i.pendingReason === "In Progress").length;
  const dependency = pendingItems.filter(i => i.pendingReason === "Dependency").length;
  const phase2 = pendingItems.filter(i => i.pendingReason === "Phase 2").length;

  return { done, pending, rejected, total, inProgress, dependency, phase2, pendingItems };
}

export function getOverallStats() {
  const total = actionItems.length;
  const done = actionItems.filter(i => i.status === "Done").length;
  const pending = actionItems.filter(i => i.status === "Pending").length;
  const rejected = actionItems.filter(i => i.status === "Rejected").length;

  const pendingItems = actionItems.filter(i => i.status === "Pending");
  const inProgress = pendingItems.filter(i => i.pendingReason === "In Progress").length;
  const dependency = pendingItems.filter(i => i.pendingReason === "Dependency").length;
  const phase2 = pendingItems.filter(i => i.pendingReason === "Phase 2").length;

  return { total, done, pending, rejected, inProgress, dependency, phase2 };
}
