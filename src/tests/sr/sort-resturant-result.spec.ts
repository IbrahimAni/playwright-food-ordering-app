import {test} from "../../fixtures/base";

test.beforeEach(async ({sr}) => {
    await sr.gotoSearchPage("salford");
    await sr.verifyTotalRestaurantsFound("salford");
});

test("should sort resturant by Best Match", { tag: ["@mobile", "@desktop"] }, async ({sr}) => {  
    await sr.selectSortOption("Best match");
});

test("should sort resturant by Delivery Price", { tag: ["@mobile", "@desktop"] }, async ({sr}) => {  
    await sr.selectSortOption("Delivery price");
});

test("should sort resturant by Estimated delivery time", { tag: ["@mobile", "@desktop"] }, async ({sr}) => {  
    await sr.selectSortOption("Estimated delivery time");
});