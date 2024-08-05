import {test as base} from 'playwright/test';
import { HomePage } from '../pages/HomePage';
import { UserProfilePage } from '../pages/UserProfilePage';
import { ManageResturantPage } from '../pages/ManageResturantPage';
import { SearchResultPage } from '../pages/SearchResultPage';

type MyFixtures = {
    hp: HomePage;
    up: UserProfilePage;
    mr: ManageResturantPage;
    sr: SearchResultPage;
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
    mr: async ({page}, use) => {
        const mr = new ManageResturantPage(page);
        await use(mr);
    },
    sr: async ({page}, use) => {
        const sr = new SearchResultPage(page);
        await use(sr);
    }
});

export {expect, type Page, type Locator} from '@playwright/test';