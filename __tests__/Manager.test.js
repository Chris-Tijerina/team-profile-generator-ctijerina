const Manager = require("../lib/Manager")

test("creates a new manager", () => {
    const manager = new Manager("Ted", 123456, "ted@mosbiusdesigns.com", "A113");


    expect(manager.name).toBe("Ted");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining("@"));
    expect(manager.officeNumber).toEqual(expect.anything());
});

test("test out the get name method", () => {
    const manager = new Manager("Ted", 123456, "ted@mosbiusdesigns.com", "A113")
    const name = manager.getName();

    expect(name).toBe("Ted");
});

test("test out the get id method", () => {
    const manager = new Manager("Ted", 123456, "ted@mosbiusdesigns.com", "A113")
    const id = manager.getId();

    expect(id).toEqual(expect.any(Number));
});

test("test out the get email method", () => {
    const manager = new Manager("Ted", 123456, "ted@mosbiusdesigns.com", "A113")
    const email = manager.getEmail();

    expect(email).toEqual(expect.stringContaining("@"));
});
 
test("test out the get office number method", () => {
    const manager = new Manager("Ted", 123456, "ted@mosbiusdesigns.com", "A113")
    const officeNumber = manager.getOfficeNumber();

    expect(officeNumber).toEqual(expect.anything());
})
test("test out the get role method", () => {
    const manager = new Manager("Ted", 123456, "ted@mosbiusdesigns.com", "A113")
    const role = manager.getRole();

    expect(role).toEqual("Manager");
});