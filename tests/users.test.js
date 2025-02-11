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
        expect(response.body.data.length).toBeGreaterThan(3);
        expect(response.body.data).toEqual(expect.arrayContaining(expectedUsers));


    });

    test("'Get user by ID' route returns specific user", async () => {
        // GET localhost:3300/users/:id
        let targetUserId = "1";
        const response = await request(app).get("/users/" + targetUserId);

        expect(response.body.result.id).toBe(targetUserId);
        expect(response.body.result.username).toBe("Username from DB");
    });

    test("'Create a new user' route returns newly created user", async () => {
        // POST localhost:3300/users/signup
        const response = await request(app)
                        .post("/users/signup")
                        .send({
                            username: "Luke",
                            password: "1234"
                        });
        expect(response.body.username).toBe("Luke");
        expect(response.body.password).toBe("EncryptedPassword");

    });

    test("'Login user' route throws an error when invalid login data is passed", async () => {
        // POST localhost:3300/users/login
        const response = await request(app)
                        .post("/users/login")
                        // Ideally, we would set the auth header to be set
                        // By the value from JWT token
                        .set(
                            "Authorization", "Error header value"
                        )
                        // .send({
                        //     username: "Luke",
                        //     password: "1234"
                        // });

        expect(response.body.authHeaderData).toBeUndefined();
        expect(response.body.status).toBe(500);
        expect(response.body.error).toBe("Not a valid login data");


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