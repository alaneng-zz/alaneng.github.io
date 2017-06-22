export const EMPLOYEE_UPDATE = "EMPLOYEE_UPDATE";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};
