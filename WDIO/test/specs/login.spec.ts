import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

beforeAll(() => {
    browser.config.global.dataRequirement = 'RegularCIF'
    browser.config.testJiraID = 'TNGMOBILE-245'
})
  

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        //await LoginPage.open();       

        //await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await LoginPage.input_Username.setValue('tomsmith');
        await LoginPage.input_Password.setValue('SuperSecretPassword!');
        await LoginPage.btn_Login.click()
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
        await SecurePage.btn_Logout.click()
    });
});


