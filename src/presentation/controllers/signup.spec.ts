import { SignUpController } from "./signup";

describe("Sign up Controller", () => { 
    test("Should return 400 if no name is provided", () => { 
        const sut = new SignUpController();
        const httpRequest = {
            body: {
                email: "teste@gmail.com",
                password: "testepassword",
                passwordConfirmation: "testepassword"
            }
        };
        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
    });
});