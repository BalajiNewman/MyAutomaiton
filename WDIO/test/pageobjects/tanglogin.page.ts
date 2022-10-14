import Page from './page';

class TangLoginPage extends Page { 

    public get input_Login(){
        return $('#login-user-id-input')    
    }

    public get btn_Next(){
        return $('#login-user-id-submit-button')
    }

}

export default new TangLoginPage();