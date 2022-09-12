import { SignUpController } from "./signup";
import { MissingParamError } from "../errors/missing-param-error";
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
        expect(httpResponse.body).toEqual(new MissingParamError("name"));
    });

    test("Should return 400 if no email is provided", () => { 
        const sut = new SignUpController();
        const httpRequest = {
            body: {
                name: "teste",
                password: "testepassword",
                passwordConfirmation: "testepassword"
            }
        };
        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamError("email"));
    });
    test("Should return 400 if no password is provided", () => { 
        const sut = new SignUpController();
        const httpRequest = {
            body: {
                name: "teste",
                email: "teste@gmail.com",
                passwordConfirmation: "testepassword"
            }
        };
        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamError("password"));
    });
});