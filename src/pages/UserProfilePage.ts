import { Locator, Page, expect } from "@playwright/test";
import { IUserProfilePage } from "../interfaces/IUserProfilePage";
import { BasePage } from "./BasePage";

export class UserProfilePage extends BasePage implements IUserProfilePage {
    readonly page: Page;
    pageHeader: Locator;
    pageSubHeader: Locator;
    emailTxt: Locator;
    nameTxt: Locator;
    addressTxt: Locator;
    cityTxt: Locator;
    countryTxt: Locator;
    submitBtn : Locator;
    nameValidation : Locator;
    addressValidation : Locator;
    cityValidation : Locator;
    countryValidation : Locator;
    // emailFieldIsDisabled : Locator;

    constructor(page: any) {
        super(page);
        this.page = page;
        this.pageHeader = this.page.getByTestId('profile-title');
        this.pageSubHeader = this.page.getByTestId('profile-sub-title');
        this.emailTxt = this.page.getByTestId('profile-email');
        this.nameTxt = this.page.getByTestId('profile-name');
        this.addressTxt = this.page.getByTestId('profile-address');
        this.cityTxt = this.page.getByTestId('profile-city');
        this.countryTxt = this.page.getByTestId('profile-country');
        this.submitBtn = this.page.getByTestId('submit-profile-info');
        this.nameValidation = this.page.getByText('name is required');
        this.addressValidation = this.page.getByText('Address Line 1 is required');
        this.cityValidation = this.page.getByText('City is required');
        this.countryValidation = this.page.getByText('Country is required');
    }

    // Actions
    async gotoUserProfilePage(): Promise<void> {
        await this.page.goto('/user-profile');
    }
    async enterName(name: string): Promise<void> {
        await this.nameTxt.fill(name);
    }
    async enterAddress(address: string): Promise<void> {
        await this.addressTxt.fill(address);
    }
    async enterCity(city: string): Promise<void> {
        await this.cityTxt.fill(city);
    }
    async enterCountry(country: string): Promise<void> {
        await this.countryTxt.fill(country);
    }
    async clickSubmitBtn(): Promise<void> {
        await this.submitBtn.click();
    }

    // Assertion
    async verifyUserEmail(email: string): Promise<void> {
        const emailValue = await this.emailTxt.inputValue();        
        expect(emailValue).toBe(email);
    }
    async verifyPageHeader(): Promise<void> {
        await expect(this.pageHeader).toBeVisible();
        expect(this.pageHeader).toContainText('User Profile');
    }
    async verifyPageSubHeader(): Promise<void> {
        await expect(this.pageSubHeader).toContainText('View and change your profile information here');
    }
    async verifyNameValidationIsVisible(): Promise<void> {
        await expect(this.nameValidation).toBeVisible();
    }
    async verifyAddressValidationIsVisible(): Promise<void> {
        await expect(this.addressValidation).toBeVisible();
    }
    async verifyCityValidationIsVisible(): Promise<void> {
        await expect(this.cityValidation).toBeVisible();
    }
    async verifyCountryValidationIsVisible(): Promise<void> {
        await expect(this.countryValidation).toBeVisible();
    }
    async verifyEmailFieldIsDisabled() {
        await expect(this.emailTxt).toHaveAttribute("disabled");
    };
        
}