import { Page, type Locator, expect } from "@playwright/test";
import { IHomePage } from "../interfaces/IHomePage";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage implements IHomePage {
    readonly page: Page;
    homePageHeader: Locator;
    homePageSubHeader: Locator;
    homePageAdvertHeader: Locator;
    homePageAdvertSubHeader: Locator;
    searchInputBox: Locator;
    searchButton: Locator;
    resetButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.homePageHeader = this.page.getByTestId('homePage-header');
        this.homePageSubHeader = this.page.getByTestId('homePage-subHeader');
        this.homePageAdvertHeader = this.page.getByTestId('homePage-mobile-advert');
        this.homePageAdvertSubHeader = this.page.getByTestId('homePage-mobile-advert-subheader');
        this.searchInputBox = this.page.getByTestId('serach-input');
        this.searchButton = this.page.getByTestId('search-button');
        this.resetButton = this.page.getByTestId('reset-button');
    }

    // Actions
    async gotoHomePage(): Promise<void> {
        await this.page.goto('/');
    }
    async searchResturant(searchText: string): Promise<void> {
        await this.searchInputBox.fill(searchText);
    }
    async clickSearchButton(): Promise<void> {
        await this.searchButton.click();
    }
    async clickResetButton(): Promise<void> {
        await this.resetButton.click();
    }

    // Assertions
    async verifyHomePageHeader(): Promise<void> {
        const headerText = await this.homePageHeader.innerText();
        expect(headerText).toContain('Tuck into a takeway today');
    }
    async verifyHomePageSubHeader(): Promise<void> {
        const subHeaderText = await this.homePageSubHeader.innerText();
        expect(subHeaderText).toContain('Food is just a click away!');
    }
    async verifyHomePageAdvertHeader(): Promise<void> {
        const advertHeaderText = await this.homePageAdvertHeader.innerText();
        expect(advertHeaderText).toContain('Order takeaway even faster!');
    }
    async verifyHomePageAdvertSubHeader(): Promise<void> {
        const advertSubHeaderText = await this.homePageAdvertSubHeader.innerText();
        expect(advertSubHeaderText).toContain('Download the MernEats App for faster ordering and personalised recommendations');
    }
}