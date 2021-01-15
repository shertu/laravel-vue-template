import { ApplicationUserApi } from "../../openapi-generator";
import { calculateAgeFromBirthdate } from "../../utilities/AgeCalculator";

test("Will the client connect to the Laravel server application?", async () => {
    // use application user api because it was the first api to be created
    const APPLICATION_USER_API = new ApplicationUserApi();

    const res = await APPLICATION_USER_API.apiApplicationUsersGet();

    return expect(res).toBeDefined();
});
