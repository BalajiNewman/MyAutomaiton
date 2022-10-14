import Page from './page';

class TangPinPage extends Page { 

    public get input_PIN(){
        return $('#login-pin-input')    
    }

    public get btn_Login(){
        return $('#login-user-id-submit-button')
    }

}

export default new TangPinPage();