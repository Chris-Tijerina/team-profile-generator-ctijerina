const Engineer = require("../lib/Engineer")

test("creates a new engineer", () => {
    const engineer = new Engineer("Marshall", 456789, "marshall@gnb.com", "github.com/go-vikes");


    expect(engineer.name).toBe("Marshall");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining("@"));
    expect(engineer.github).toEqual(expect.stringContaining("github.com"));
});

test("test out the get name method", () => {
    const engineer = new Engineer("Marshall", 456789, "marshall@gnb.com", "github.com/go-vikes")
    const name = engineer.getName();

    expect(name).toBe("Marshall");
});

test("test out the get id method", () => {
    const engineer = new Engineer("Marshall", 456789, "marshall@gnb.com", "github.com/go-vikes")
    const id = engineer.getId();

    expect(id).toEqual(expect.any(Number));
});

test("test out the get email method", () => {
    const engineer = new Engineer("Marshall", 456789, "marshall@gnb.com", "github.com/go-vikes")
    const email = engineer.getEmail();

    expect(email).toEqual(expect.stringContaining("@"));
});

test("test out the get github method", () => {
    const engineer = new Engineer("Marshall", 456789, "marshall@gnb.com", "github.com/go-vikes")
    const github = engineer.getGithub();

    expect(engineer.github).toEqual(expect.stringContaining("github.com"));
})
test("test out the get role method", () => {
    const engineer = new Engineer("Marshall", 456789, "marshall@gnb.com", "github.com/go-vikes")
    const role = engineer.getRole();

    expect(role).toEqual("Engineer");
});