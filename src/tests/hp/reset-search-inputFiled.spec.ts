import { log } from "console";
import {test, expect} from "../../fixtures/base";

test("should reset the search input field", { tag: ["@mobile", "@desktop"] }, async ({hp}) => {
    await hp.gotoHomePage();
    await hp.searchResturant("Mcdonalds");
    await hp.clickResetButton();

    const searchInputField = await hp.getSearchInputField();
    
    expect(searchInputField).toBe("");
});