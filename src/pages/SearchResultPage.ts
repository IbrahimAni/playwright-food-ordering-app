import { type Page, type Locator, expect } from "@playwright/test";
import { ISearchResult } from "../interfaces/ISearchResult";

export class SearchResultPage implements ISearchResult {
    readonly page: Page;
    readonly totalRestaurantsFound: Locator;
    readonly changeLocation: Locator;
    readonly searchInputBox: Locator;
    readonly searchButton: Locator;
    readonly resetButton: Locator;
    readonly sortOptionDropdown: Locator;
    // readonly resturantCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.totalRestaurantsFound = this.page.getByTestId('total-resturant-found');
        this.changeLocation = this.page.getByTestId('change-location');
        this.searchInputBox = this.page.getByTestId('serach-input');
        this.searchButton = this.page.getByTestId('search-button');
        this.resetButton = this.page.getByTestId('reset-button');
        this.sortOptionDropdown = this.page.getByTestId('sort-by');
        // this.resturantCard = this.page.getByTestId('resturant-card');
    }

    // Actions
    async gotoSearchPage(city: string): Promise<void> {
        await this.page.goto(`/search/${city}`);
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

    async clickChangeLocation(): Promise<void> {
        await this.changeLocation.click();
    }

    async selectSortOption(sortOption: string): Promise<void> {
        await this.sortOptionDropdown.click();
        const sortOptionValue = sortOption.toLowerCase().split(' ').join('-');
        const sortOptionLocator = this.page.getByTestId(`sort-${sortOptionValue}`);
        await sortOptionLocator.click();
    }

    async selectCusineFilter(cusine: string): Promise<void> {
        const cusineLocator = this.page.getByTestId(`cusine-${cusine.toLocaleLowerCase()}`);
        await cusineLocator.click();
    };

    // Assertions
    async verifyTotalRestaurantsFound(city: string): Promise<void> {
        const totalRestaurantsFoundText = await this.totalRestaurantsFound.innerText();
        expect(totalRestaurantsFoundText).toContain(`Restaurants found in ${city}`);
    }

    async verifyZeroRestaurantsFound(): Promise<void> {
        await expect(this.page.getByText('No results found')).toBeVisible();
    }

    async verifyCusineItem(cusine: string ): Promise<void> {
        await expect(this.page.getByText(cusine.toLocaleLowerCase())).toBeVisible();
    }
}