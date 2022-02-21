const Employee = require("../lib/Employee");

test("creates a new employee", () => {
  const employee = new Employee("Keef");
  expect(employee.name).toBe("Keef");
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});
