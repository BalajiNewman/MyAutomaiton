import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {      
    //data: string[] = super.readExcel('login');     
    //row : Object = this.data[0]

    /**
     * define selectors using getter methods
     */
    public get input_Username () {       
        return $('#username'); 
    }

    public get input_Password () {
        return $('#password'); 
    }

    public get btn_Login () {
        return $('button[type = submit]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.input_Username.setValue(username);
        await this.input_Password.setValue(password);
        await this.btn_Login.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
