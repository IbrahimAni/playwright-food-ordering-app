import {test} from "../../fixtures/base";

test.beforeEach(async ({sr}) => {
    await sr.gotoSearchPage("salford");
    await sr.verifyTotalRestaurantsFound("salford");
});

test("should filter resturant result", { tag: ["@mobile", "@desktop"] }, async ({sr}) => {  
    await sr.selectSortOption("Best match");
});