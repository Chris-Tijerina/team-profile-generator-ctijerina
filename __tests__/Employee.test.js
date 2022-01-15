const Employee = require("../lib/Employee")

test("creates a new employee", () => {
    const employee = new Employee("Ted", 123456, "ted@mosbiusdesigns.com");


    expect(employee.name).toBe("Ted");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining("@"));
});

test("test out the get name method", () => {
    const employee = new Employee("Ted", 1 , "ted@mosbiusdesigns.com")
    const name = employee.getName();

    expect(name).toBe("Ted");
});

test("test out the get id method", () => {
    const employee = new Employee("Ted", 123456 , "ted@mosbiusdesigns.com")
    const id = employee.getId();

    expect(id).toEqual(expect.any(Number));
});

test("test out the get email method", () => {
    const employee = new Employee("Ted", 123456 , "ted@mosbiusdesigns.com")
    const email = employee.getEmail();

    expect(email).toEqual(expect.stringContaining("@"));
});

test("test out the get role method", () => {
    const employee = new Employee("Ted", 123456 , "ted@mosbiusdesigns.com")
    const role = employee.getRole();

    expect(role).toEqual("Employee");
});