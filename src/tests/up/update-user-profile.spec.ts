import {test, expect} from "../../fixtures/base";
import user_data from "../../data/user-profile.json";

const {name, address, city, country} = user_data;
const userEmail: string = "test@eatin.com"

test("should update user profile", async ({up, page}) => {   
    await up.gotoUserProfilePage();
    await up.verifyPageHeader();

    await up.enterName(name);
    await up.enterAddress(address);
    await up.enterCity(city);
    await up.enterCountry(country);
    await up.clickSubmitBtn();

    const response = await page.waitForResponse((response) => response.url().includes("/api/my/user"));
    const responseBody = await response.json();
    expect(response.status()).toBe(200);

    console.log(responseBody);


    await expect(page.getByText('User profile updated!').first()).toBeVisible();
});

test("should validate user profile update form", async ({up}) => {
    await up.gotoUserProfilePage();
    await up.verifyPageHeader();

    await up.enterName("");
    await up.enterAddress("");
    await up.enterCity("");
    await up.enterCountry("");
    await up.clickSubmitBtn();

    await up.verifyNameValidationIsVisible();
    await up.verifyAddressValidationIsVisible();
    await up.verifyCityValidationIsVisible();
    await up.verifyCountryValidationIsVisible();
})

test("should have email field disabled", async ({up}) => {
    await up.gotoUserProfilePage();
    await up.verifyPageHeader();

    await up.verifyEmailFieldIsDisabled();
    await up.verifyUserEmail(userEmail);
})