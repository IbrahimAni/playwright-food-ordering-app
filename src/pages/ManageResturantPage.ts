import {Locator, type Page, expect} from "@playwright/test";
import { IManageResturant } from "../interfaces/IManageResturant";
import path from "path";

declare const __dirname: string;

export class ManageResturantPage implements IManageResturant {
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

    constructor(page: Page){
        this.page = page;
        this.manageResturantOrderSectionBtn = this.page.getByTestId('mg-order');
        this.manageResturantSectionBtn = this.page.getByTestId('mg-resturant');
        this.resturantNameInput = this.page.getByTestId('restaurantName');
        this.resturantCityInput = this.page.getByTestId('restaurantCity');
        this.resturantCountryInput = this.page.getByTestId('restaurantCountry');
        this.resturantDeliveryPriceInput = this.page.getByTestId('restaurantDeliveryPrice');
        this.resturantDeliveryEsttmatedDeliveryTimeInput = this.page.getByTestId('restaurantEstimatedDeliveryTime');
        this.addMenuItemBtn = this.page.getByTestId('add-menu-item');
        this.resturantMenuUpload = this.page.getByTestId('resturantMenuImage');
        this.submitResturauntBtn = this.page.getByTestId('submit-restaurant-details');
    }

    // Actions

    async gotoManageResturantPage(): Promise<void>{
        await this.page.goto('/manage-restaurant');
    }

    async clickManageResturantSectionBtn(): Promise<void>{
        await this.manageResturantSectionBtn.click();
    }

    async clickManageResturantOrderSectionBtn(): Promise<void>{
        await this.manageResturantOrderSectionBtn.click();
    }

    async enterResturantName(name: string): Promise<void>{
        await this.resturantNameInput.fill(name);
    }

    async enterResturantCity(city: string): Promise<void>{
        await this.resturantCityInput.fill(city);
    }

    async enterResturantCountry(country: string): Promise<void>{
        await this.resturantCountryInput.fill(country);
    }

    async enterResturantDeliveryPrice(price: string): Promise<void>{
        await this.resturantDeliveryPriceInput.fill(price);
    }

    async enterResturantDeliveryEstimatedDeliveryTime(time: string): Promise<void>{
        await this.resturantDeliveryEsttmatedDeliveryTimeInput.fill(time);
    }

    async selectCuisine(cuisine: string | string[]): Promise<void> {
        if (Array.isArray(cuisine)) {
            for (let i = 0; i < cuisine.length; i++) {
                await this.page.getByTestId(`${cuisine[i].toLocaleLowerCase()} cuisine`).click();
            }
        } else {
            await this.page.getByTestId(`${cuisine.toLocaleLowerCase()} cuisine`).click();
        }
    }

    async clickAddMenuItemBtn(): Promise<void>{
        await this.addMenuItemBtn.click();
    }

    async enterMenuItemName(menuName: string | string[], index?:  number): Promise<void>{
        if (Array.isArray(menuName)) {
            for (let i = 0; i < menuName.length; i++) {
                await this.page.getByTestId(`menu-item-name-${i}`).fill(menuName[i]);
            }
        } else {
            await this.page.getByTestId(`menu-item-name-${index}`).fill(menuName);
        }
    }

    async enterMenuItemPrice(price: string | string[], index?:  number): Promise<void>{
        if (Array.isArray(price)) {
            for (let i = 0; i < price.length; i++) {
                await this.page.getByTestId(`menuItemPrice-${i}`).fill(price[i]);
                await this.clickAddMenuItemBtn();
            }
        } else {
            await this.page.getByTestId(`menuItemPrice-${index}`).fill(price);
        }
    }

    async removeMenuItem(menuName: string | string[]): Promise<void>{
        if (Array.isArray(menuName)) {
            for (let i = 0; i < menuName.length; i++) {
                await this.page.getByTestId(`remove-menu-item-${i}`).click();
            }
        } else {
            await this.page.getByTestId(`remove-menu-item-0`).click();
        }
    }
    
    async uploadMenuImage(imagePath: string): Promise<void>{
        await this.resturantMenuUpload.setInputFiles(path.join(__dirname, imagePath));
    }

    async clickSubmitResturantBtn(): Promise<void>{
        await this.submitResturauntBtn.click();
    }

    // Assertions
    async verifyManageResturantOrderSectionBtn(): Promise<void>{
        await expect(this.manageResturantOrderSectionBtn).toBeVisible();
        await expect(this.manageResturantSectionBtn).toBeVisible();
    }

    async verifyResturantNameValidationIsVisible(): Promise<void>{
        await expect(this.page.getByText('restuarant name is required')).toBeVisible();
    }

    async verifyResturantCityValidationIsVisible(): Promise<void>{
        await expect(this.page.getByText('city is required')).toBeVisible();
    }

    async verifyResturantCountryValidationIsVisible(): Promise<void>{
        await expect(this.page.getByText('country is required')).toBeVisible();
    }

    async verifyResturantDeliveryPriceValidationIsVisible(): Promise<void>{
        await expect(this.page.locator('[id="\\:rn\\:-form-item-message"]')).toBeVisible();
    }

    async verifyResturantDeliveryEstimatedDeliveryTimeValidationIsVisible(): Promise<void>{
        await expect(this.page.locator('[id="\\:rp\\:-form-item-message"]')).toBeVisible();
    }

    async verifyResturantCuisineValidationIsVisible(): Promise<void>{
        await expect(this.page.getByText('please select at least one')).toBeVisible();
    }

    async verifyResturantMenuItemValidationIsVisible(): Promise<void>{
        await expect(this.page.getByText('name is required', { exact: true })).toBeVisible();
    }

    async verifyResturantMenuItemPriceValidationIsVisible(): Promise<void>{
        await expect(this.page.getByText('price is required')).toBeVisible();
    }

    async verifyResturantMenuImageValidationIsVisible(): Promise<void>{
        // await expect(this.resturantMenuUpload).toBeVisible();
    }
}