const Employee = require("../lib/Employee")

test("creates a new employee", () => {
    const employee = new Employee("Ted")

    expect(employee.name).toBe("Ted");
    // expect(employee.id).toEqual(expect.any(Number));
    // expect(employee.email).stringContaining("@");
})