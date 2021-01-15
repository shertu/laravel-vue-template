import { calculateAgeFromBirthdate } from "../../utilities/AgeCalculator";

test("How old am I?", () => {
    const myBirthdate = new Date("1996-10-06");
    expect(calculateAgeFromBirthdate(myBirthdate)).toBe(24);
});
