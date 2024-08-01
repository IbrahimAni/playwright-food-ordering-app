import { Locator, Page } from "@playwright/test";

export interface IBasePage {
    readonly page: Page;
    readonly headerLogo: Locator;
    readonly headerSignInButton: Locator;
    readonly footerLogo: Locator;
    readonly privacyPolicy: Locator;
    readonly termsOfService: Locator;
    readonly harmburgerMenuMobile: Locator;
    readonly closeHarmburgerMenuMobile: Locator;
    readonly orderStatus: Locator;
    readonly userEmailAddress: Locator;
    readonly toaster : Locator;

    clickSignInButton(): Promise<void>;
    clickLogo(): Promise<void>;
    clickHarmburgerMenuMobile(): Promise<void>;
    clickCloseHarmburgerMenuMobile(): Promise<void>;
    clickOrderStatus(): Promise<void>;
    clickUserEmailAddress(): Promise<void>;

    verifyHeaderLogo(): Promise<void>;
    verifyFooterLogo(): Promise<void>;
    verifyPrivacyPolicy(): Promise<void>;
    verifyTermsOfService(): Promise<void>;
    verifyOrderStatus(): Promise<void>;
    verifyUserEmailAddress(): Promise<void>;
    verifyToaster(): Promise<void>;
};