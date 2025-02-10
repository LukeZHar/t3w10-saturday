// Importing the code that we want to test
const {app} = require('../src/server.js');

// Importing a testing helper function from supertest
const request = require("supertest");

describe("Users route", () => {
    test("'Get all users' route returns array of users", async () => {
        // GET localhost:3300/users
        const response = await request(app).get("/users");

        const expectedUsers = [
            "Luke",
            "Leia",
            "Han",
            "Chewbacca",
            "Yoda"
        ]

        expect(response.body.data).toHaveLength(5);
        expect(response.body.data).toBeGreaterThan(3);
        expect(response.body.data).toEqual(expect.arrayContaining(expectedUsers));


    });
    test.skip("'Get user by ID' route returns specific user", async () => {
        // GET localhost:3300/users/:id
        let targetUserId = "1";
        const response = await request(app).get("/users/" + targetUserId);
    });
    test.skip("'Create a new user' route returns newly created user", async () => {
        // POST localhost:3300/users/signup
        const response = await request(app)
                        .post("/users/signup")
                        .send({
                            username: "Luke",
                            password: "1234"
                        });
    });
    test.skip("'Login user' route returns specific user", async () => {
        // POST localhost:3300/users/login
        const response = await request(app)
                        .post("/users/login")
                        .send({
                            username: "Luke",
                            password: "1234"
                        });
    });
    test.skip("'Update/Edit user' route returns specific user", async () => {
        // PUT/PATCH localhost:3300/users/:id
        let targetUserId = "1";
        const response = await request(app)
                        .patch("/users/" + targetUserId)
                        .send({
                            username: "Luke",
                            password: "abc1234"
                        });
    });
    test.skip("'Delete user by ID' route returns an acknowledgement message", async () => {
        // DELETE localhost:3300/users/:id
        let targetUserId = "1";
        const response = await request(app)
                        .delete("/users/" + targetUserId)
                        .send({
                            username: "Luke",
                            password: "abc1234"
                        });
    });
});