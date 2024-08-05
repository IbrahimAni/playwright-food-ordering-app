import { AUTH_STORAGE_STATE } from '../../playwright.config';
import {test as setup} from '../fixtures/base';

const TEST_USERNAME: string = process.env.RESTURANT2_USERNAME!
const TEST_PASSWORD: string = process.env.RESTURANT2_PASSWORD!

setup('authenticate on desktop', {tag: ["@desktop"]}, async ({page, hp}) => {    
    await hp.gotoHomePage();
    await hp.clickSignInButton();
    await page.getByLabel('Email address*').fill(TEST_USERNAME);
    console.log("TEST_USERNAME: ", TEST_USERNAME);
    await page.getByLabel('Password*').fill(TEST_PASSWORD);
    await page.getByRole('button', {name: 'Continue', exact: true}).click();
    await hp.verifyOrderStatus();

    await page.context().storageState({ path: AUTH_STORAGE_STATE });
});

setup('authenticate on mobile', {tag: ["@mobile"]}, async ({page, hp}) => {    
    await hp.gotoHomePage();
    await hp.clickHamburgerMenuMobile();
    await hp.clickSignInButton();
    await page.getByLabel('Email address*').fill(TEST_USERNAME);
    console.log("TEST_USERNAME: ", TEST_USERNAME);
    await page.getByLabel('Password*').fill(TEST_PASSWORD);
    await page.getByRole('button', {name: 'Continue', exact: true}).click();
    await page.waitForTimeout(2000);
    await hp.clickHamburgerMenuMobile();
    await hp.verifyOrderStatus();

    await page.context().storageState({ path: AUTH_STORAGE_STATE });
});