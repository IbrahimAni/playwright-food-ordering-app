import {test, expect} from "../../fixtures/base";
import * as data from "../../data/manage-resturant.json";


test("should update resturant details", { tag: ["@mobile", "@desktop"] }, async ({mr, page}) => {
    await mr.gotoManageResturantPage();
    await mr.verifyManageResturantOrderSectionBtn();

    await mr.clickManageResturantSectionBtn();
    await mr.enterResturantName(data.name);
    await mr.enterResturantCity(data.city);
    await mr.enterResturantCountry(data.country);
    await mr.enterResturantDeliveryPrice(data.deliveryPrice);
    await mr.enterResturantDeliveryEstimatedDeliveryTime(data.estimatedDeliveryTime);
    await mr.selectCuisine(data.cuisines);
    for(let i = 0; i < data.menuItems.length; i++){
        await mr.enterMenuItemName(data.menuItems[i].name, i);
        await mr.enterMenuItemPrice(data.menuItems[i].price, i);
        if(i < data.menuItems.length - 1){
            await mr.clickAddMenuItemBtn();
        }
    }
    await mr.uploadMenuImage(data.img);

    await mr.clickSubmitResturantBtn();
    await expect(page.getByRole('status').first()).toBeVisible();
    await expect(page.getByRole('list')).toContainText('Restaurant Updated');
});

test("should validate resturant details form", { tag: ["@mobile", "@desktop"] }, async ({mr}) => {
    await mr.gotoManageResturantPage();
    await mr.verifyManageResturantOrderSectionBtn();

    await mr.clickManageResturantSectionBtn();
    await mr.enterResturantName("");
    await mr.enterResturantCity("");
    await mr.enterResturantCountry("");
    await mr.enterResturantDeliveryPrice("");
    await mr.enterResturantDeliveryEstimatedDeliveryTime("");
    await mr.selectCuisine([]);
    await mr.clickSubmitResturantBtn();

    await mr.verifyResturantNameValidationIsVisible();
    await mr.verifyResturantCityValidationIsVisible();
    await mr.verifyResturantCountryValidationIsVisible();
    await mr.verifyResturantDeliveryPriceValidationIsVisible();
    await mr.verifyResturantDeliveryEstimatedDeliveryTimeValidationIsVisible();
    await mr.verifyResturantCuisineValidationIsVisible();
    await mr.verifyResturantMenuItemValidationIsVisible();
    await mr.verifyResturantMenuItemPriceValidationIsVisible();
});