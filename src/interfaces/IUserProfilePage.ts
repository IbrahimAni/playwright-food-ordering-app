import { Page, Locator } from "playwright/test";

export interface IUserProfilePage {
    readonly page : Page;
    readonly pageHeader : Locator;
    readonly pageSubHeader : Locator;
    readonly emailTxt : Locator;
    readonly nameTxt : Locator;
    readonly addressTxt : Locator;
    readonly cityTxt : Locator;
    readonly countryTxt : Locator;
    readonly submitBtn : Locator;
    readonly nameValidation : Locator;
    readonly addressValidation : Locator;
    readonly cityValidation : Locator;
    readonly countryValidation : Locator;
    // readonly emailFieldIsDisabled : Locator;


    gotoUserProfilePage() : Promise<void>;
    enterName(name: string) : Promise<void>;
    enterAddress(address: string) : Promise<void>;
    enterCity(city: string) : Promise<void>;
    enterCountry(country: string) : Promise<void>;
    clickSubmitBtn() : Promise<void>;
    
    verifyUserEmail(email: string) : Promise<void>;
    verifyPageHeader() : Promise<void>;
    verifyPageSubHeader() : Promise<void>;
    verifyNameValidationIsVisible() : Promise<void>;
    verifyAddressValidationIsVisible() : Promise<void>
    verifyCityValidationIsVisible() : Promise<void>
    verifyCountryValidationIsVisible() : Promise<void>
    verifyEmailFieldIsDisabled() : Promise<void>;
};