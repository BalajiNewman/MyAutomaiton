import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MFOpenAccountPage extends Page {
    //data: string[] = super.readExcel('secure');     
    //row : Object = this.data[0]   
    
    public get flashAlert () {
        return $('#flash'); 
    }

    public get btn_Logout(){
        return $('.butto')
    }   
}

export default new MFOpenAccountPage();
