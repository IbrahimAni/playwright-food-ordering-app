import { AUTH_STORAGE_STATE } from '../../playwright.config';
import {test as setup} from '../fixtures/base'; // Add Page type import

setup('auth', async ({page, hp}) => { // Change the type of 'page' parameter to Page
    await hp.gotoHomePage();
    await hp.clickSignInButton();
    await page.getByLabel('Email address*').fill("test@eatin.com");
    await page.getByLabel('Password*').fill("4bvtJtkHakjgZZy");
    await page.getByRole('button', {name: 'Continue', exact: true}).click();
    await hp.verifyOrderStatus();

    await page.context().storageState({ path: AUTH_STORAGE_STATE });
});