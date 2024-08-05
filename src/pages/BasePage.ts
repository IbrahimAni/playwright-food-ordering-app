import { Locator, Page, expect } from "@playwright/test";
import { IBasePage } from "../interfaces/IBasePage";

export class BasePage implements IBasePage{
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

    constructor(page: Page) {
        this.page = page;
        this.headerLogo = this.page.getByTestId('header-logo');
        this.headerSignInButton = this.page.getByRole('button', { name: 'Log In' });
        this.footerLogo = this.page.getByTestId('footer-logo');
        this.privacyPolicy = this.page.getByTestId('privacy-policy');
        this.termsOfService = this.page.getByTestId('terms-of-service');
        this.hamburgerMenuMobile = this.page.getByTestId('harmburger-menu-mobile');
        this.closeHamburgerMenuMobile = this.page.getByTestId('close-harmburger-menu-mobile');
        this.orderStatus = this.page.getByRole('link', { name: 'Order Status' });
        this.userEmailAddress = this.page.getByTestId('user-email-address');
        this.toaster = this.page.getByTestId('toast');
        this.manageRestaurant = this.page.getByRole('link', { name: 'My Restaurant' });
        this.userProfile = this.page.getByRole('link', { name: 'User Profile' });
        this.logout = this.page.getByRole('button', { name: 'Log Out' });
    }

    // Actions
    async clickSignInButton(): Promise<void>{
        await this.headerSignInButton.click();
    };
    async clickLogo(): Promise<void>{
        await this.headerLogo.click();
    };

    async clickHamburgerMenuMobile(): Promise<void>{
        await this.hamburgerMenuMobile.click();
    };

    async clickCloseHamburgerMenuMobile(): Promise<void>{
        await this.closeHamburgerMenuMobile.click();
    };

    async clickOrderStatus(): Promise<void>{
        await this.orderStatus.click();
    };

    async clickUserEmailAddress(): Promise<void>{
        await this.userEmailAddress.click();
    };

    async clickManageRestaurant(): Promise<void>{
        await this.manageRestaurant.click();
    };

    async clickUserProfile(): Promise<void>{
        await this.userProfile.click();
    };

    async clickLogout(): Promise<void>{
        await this.logout.click();
    };

    // Assertions
    async verifyHeaderLogo(): Promise<void>{
        const headerLogoText = await this.headerLogo.innerText();
        expect(headerLogoText).toContain('Eat In');
    };
    async verifyFooterLogo(): Promise<void>{
        const footerLogoText = await this.footerLogo.innerText();
        expect(footerLogoText).toContain('Eat In');
    };
    async verifyPrivacyPolicy(): Promise<void>{
        const privacyPolicyText = await this.privacyPolicy.innerText();
        expect(privacyPolicyText).toContain('Privacy Policy');
    };
    async verifyTermsOfService(): Promise<void>{
        const termsOfServiceText = await this.termsOfService.innerText();
        expect(termsOfServiceText).toContain('Terms of Service');
    };

    async verifyOrderStatus(): Promise<void>{
        // expect(this.orderStatus).toBeVisible();
        const orderStatusText = await this.orderStatus.innerText();
        expect(orderStatusText).toContain('Order Status');
    };

    async verifyUserEmailAddress(): Promise<void> {
        expect(this.userEmailAddress).toBeVisible();
    };
    async verifyToaster(): Promise<void> {
        expect(this.toaster).toBeVisible();
    };
}