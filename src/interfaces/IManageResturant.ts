import { type Locator, type Page } from "@playwright/test";

export interface IManageResturant {
    // Properties
    readonly page: Page;
    readonly manageResturantOrderSectionBtn: Locator;
    readonly manageResturantSectionBtn: Locator;
    readonly resturantNameInput: Locator;
    readonly resturantCityInput: Locator;
    readonly resturantCountryInput: Locator;
    readonly resturantDeliveryPriceInput: Locator;
    readonly resturantDeliveryEsttmatedDeliveryTimeInput: Locator;
    readonly addMenuItemBtn: Locator;
    readonly resturantMenuUpload: Locator;
    readonly submitResturauntBtn: Locator;

    // Actions
    gotoManageResturantPage(): Promise<void>;
    clickManageResturantSectionBtn(): Promise<void>;
    clickManageResturantOrderSectionBtn(): Promise<void>;
    enterResturantName(name: string): Promise<void>;
    enterResturantCity(city: string): Promise<void>;
    enterResturantCountry(country: string): Promise<void>;
    enterResturantDeliveryPrice(price: string): Promise<void>;
    enterResturantDeliveryEstimatedDeliveryTime(time: string): Promise<void>;
    selectCuisine(cuisine: string | string[]): Promise<void>;
    enterMenuItemName(menuName: string | string[], index?:  number): Promise<void>
    enterMenuItemPrice(price: string | string[], index?:  number): Promise<void>
    removeMenuItem(menuName: string | string[]): Promise<void>
    uploadMenuImage(imagePath: string): Promise<void>
    clickSubmitResturantBtn(): Promise<void>

    // Assertions
    verifyManageResturantOrderSectionBtn(): Promise<void>;
    verifyResturantNameValidationIsVisible(): Promise<void>;
    verifyResturantCityValidationIsVisible(): Promise<void>;
    verifyResturantCountryValidationIsVisible(): Promise<void>;
    verifyResturantDeliveryPriceValidationIsVisible(): Promise<void>;
    verifyResturantDeliveryEstimatedDeliveryTimeValidationIsVisible(): Promise<void>;
    verifyResturantCuisineValidationIsVisible(): Promise<void>;
    verifyResturantMenuItemValidationIsVisible(): Promise<void>;
    verifyResturantMenuItemPriceValidationIsVisible(): Promise<void>;
    verifyResturantMenuImageValidationIsVisible(): Promise<void>;
}