const Intern = require("../lib/Intern")

test("creates a new intern", () => {
    const intern = new Intern("Barney", 789123, "barney@gnb.com", "MIT");


    expect(intern.name).toBe("Barney");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining("@"));
    expect(intern.school).toEqual(expect.anything());
});

test("test out the get name method", () => {
    const intern = new Intern("Barney", 789123, "barney@gnb.com", "MIT")
    const name = intern.getName();

    expect(name).toBe("Barney");
});

test("test out the get id method", () => {
    const intern = new Intern("Barney", 789123, "barney@gnb.com", "MIT")
    const id = intern.getId();

    expect(id).toEqual(expect.any(Number));
});

test("test out the get email method", () => {
    const intern = new Intern("Barney", 789123, "barney@gnb.com", "MIT")
    const email = intern.getEmail();

    expect(email).toEqual(expect.stringContaining("@"));
});

test("test out the get role method", () => {
    const intern = new Intern("Barney", 789123, "barney@gnb.com", "MIT")
    const role = intern.getRole();

    expect(role).toEqual("Intern");
});