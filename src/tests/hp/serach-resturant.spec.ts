import {test} from "../../fixtures/base";


test("should search for a resturant by city", { tag: ["@mobile", "@desktop"] }, async ({hp, sr}) => {
    const city = "salford"
    await hp.gotoHomePage();
    await hp.searchResturant(city);
    await hp.clickSearchButton();
    await sr.verifyTotalRestaurantsFound(city);
});

test("should search for a resturant by anything else", { tag: ["@mobile", "@desktop"] }, async ({hp, sr}) => {
    const anything = "12345"
    await hp.gotoHomePage();
    await hp.searchResturant(anything);
    await hp.clickSearchButton();
    await sr.verifyZeroRestaurantsFound();
});   