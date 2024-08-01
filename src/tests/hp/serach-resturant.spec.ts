import {test} from "../../fixtures/base";

test.use({ storageState: { cookies: [], origins: [] } });

test("should search for a resturant", async ({hp}) => {
    await hp.gotoHomePage();
    await hp.searchResturant("Mcdonalds");
    await hp.clickSearchButton();

    // Add more test to verify the search result page
});