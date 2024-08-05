import {type Page, type Locator} from "@playwright/test";

export interface ISearchResult{
    // Properties
    readonly page: Page;
    readonly totalRestaurantsFound: Locator;
    readonly changeLocation: Locator;
    readonly searchInputBox: Locator;
    readonly searchButton: Locator;
    readonly resetButton: Locator;
    readonly sortOptionDropdown: Locator;
    // readonly resturantCard: Locator;


    // Actions
    gotoSearchPage(city: string): Promise<void>;
    searchResturant(searchText: string): Promise<void>;
    clickSearchButton(): Promise<void>;
    clickResetButton(): Promise<void>;
    clickChangeLocation(): Promise<void>;
    selectSortOption(sortOption: string): Promise<void>;
    // clickResturantCard(): Promise<void>;

    // Assertions
    verifyTotalRestaurantsFound(city: string): Promise<void>;
    verifyZeroRestaurantsFound(): Promise<void>;
    
}