import { AUTH_STORAGE_STATE } from "../../../playwright.config";
import { test, expect } from "../../fixtures/base";

test.describe("Links should correctly navigate to the correct pages", () => {
    // test.use({ storageState: AUTH_STORAGE_STATE });

    test.beforeEach(async ({ hp }) => {
        await hp.gotoHomePage();
    });

    test.describe("Navigation on both desktop and mobile", () => {
        test("Clicking the logo should navigate to the home page", { tag: ["@mobile", "@desktop"] }, async ({ hp }) => {
            await hp.clickLogo();
            expect(hp.page.url()).toBe("http://localhost:5173/");
            await hp.verifyHomePageHeader();
        });
    });

    test.describe("Navigation on desktop", () => {
        test("Clicking the order status should navigate to the order status page", { tag: ["@desktop"] }, async ({ hp }) => {
            await hp.clickOrderStatus();
            expect(hp.page.url()).toBe("http://localhost:5173/order-status");
            // Verify the page title
        });

        test("Clicking the user email address should navigate to the user profile page", { tag: ["@desktop"] }, async ({ hp, up }) => {
            await hp.clickUserEmailAddress();
            await hp.clickUserProfile();
            expect(hp.page.url()).toBe("http://localhost:5173/user-profile");
            await up.verifyPageHeader();
        });

        test("Clicking the manage restaurant should navigate to the manage restaurant page", { tag: ["@desktop"] }, async ({ hp, mr }) => {
            await hp.clickUserEmailAddress();
            await hp.clickManageRestaurant();
            expect(hp.page.url()).toBe("http://localhost:5173/manage-restaurant");
            await mr.verifyManageResturantOrderSectionBtn();
        });
    });

    test.describe("Navigation on mobile", () => {
        test("Clicking the order status should navigate to the order status page", { tag: ["@mobile"] }, async ({ hp }) => {
            await hp.clickHamburgerMenuMobile();
            await hp.clickOrderStatus();
            expect(hp.page.url()).toBe("http://localhost:5173/order-status");
            // Verify the page title
        });

        test("Clicking the user email address should navigate to the user profile page", { tag: ["@mobile"] }, async ({ hp, up }) => {
            await hp.clickHamburgerMenuMobile();
            await hp.clickUserProfile();
            expect(hp.page.url()).toBe("http://localhost:5173/user-profile");
            await up.verifyPageHeader();
        });

        test("Clicking the manage restaurant should navigate to the manage restaurant page", { tag: ["@mobile"] }, async ({ hp, mr }) => {
            await hp.clickHamburgerMenuMobile();
            await hp.clickManageRestaurant();
            expect(hp.page.url()).toBe("http://localhost:5173/manage-restaurant");
            await mr.verifyManageResturantOrderSectionBtn()
        });
    });

});
