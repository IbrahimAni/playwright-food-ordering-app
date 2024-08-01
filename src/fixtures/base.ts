import {test as base} from 'playwright/test';
import { HomePage } from '../pages/HomePage';
import { UserProfilePage } from '../pages/UserProfilePage';

type MyFixtures = {
    hp: HomePage;
    up: UserProfilePage;
};

export const test = base.extend<MyFixtures>({
    hp: async ({page}, use) => {
        const hp = new HomePage(page);
        await use(hp);
    },
    up: async ({page}, use) => {
        const up = new UserProfilePage(page);
        await use(up);
    },
});

export {expect, type Page, type Locator} from '@playwright/test';