import { Locator, Page } from "@playwright/test";

export interface IBasePage {
    readonly page: Page;
    readonly headerLogo: Locator;
    readonly headerSignInButton: Locator;
    readonly footerLogo: Locator;
    readonly privacyPolicy: Locator;
    readonly termsOfService: Locator;
    readonly hamburgerMenuMobile: Locator;
    readonly closeHamburgerMenuMobile: Locator;
    readonly orderStatus: Locator;
    readonly userEmailAddress: Locator;
    readonly toaster : Locator;
    readonly manageRestaurant: Locator;
    readonly userProfile: Locator;
    readonly logout: Locator;

    clickSignInButton(): Promise<void>;
    clickLogo(): Promise<void>;
    clickHamburgerMenuMobile(): Promise<void>;
    clickCloseHamburgerMenuMobile(): Promise<void>;
    clickOrderStatus(): Promise<void>;
    clickUserEmailAddress(): Promise<void>;
    clickManageRestaurant(): Promise<void>;
    clickUserProfile(): Promise<void>;
    clickLogout(): Promise<void>;

    verifyHeaderLogo(): Promise<void>;
    verifyFooterLogo(): Promise<void>;
    verifyPrivacyPolicy(): Promise<void>;
    verifyTermsOfService(): Promise<void>;
    verifyOrderStatus(): Promise<void>;
    verifyUserEmailAddress(): Promise<void>;
    verifyToaster(): Promise<void>;
};