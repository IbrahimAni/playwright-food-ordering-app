import { Locator, Page } from "@playwright/test";

export interface IHomePage {
    readonly page: Page;
    readonly homePageHeader : Locator;
    readonly homePageSubHeader : Locator;
    readonly homePageAdvertHeader : Locator;
    readonly homePageAdvertSubHeader : Locator;
    readonly searchInputBox : Locator;
    readonly searchButton : Locator;
    readonly resetButton : Locator;

    gotoHomePage(): Promise<void>;
    searchResturant(searchText: string): Promise<void>;
    clickSearchButton(): Promise<void>;
    clickResetButton(): Promise<void>;

    verifyHomePageHeader(): Promise<void>;
    verifyHomePageSubHeader(): Promise<void>;
    verifyHomePageAdvertHeader(): Promise<void>;
    verifyHomePageAdvertSubHeader(): Promise<void>;
}