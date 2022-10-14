import { readFile,utils} from "xlsx";
const excelFile = readFile('./test/excel/Elements.xlsx');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {    

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open(path: string) {        
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    public readExcel(sheetName: string) : string[] {                   
        let data = []; 
        let worksheetAsJson = utils.sheet_to_json(excelFile.Sheets[sheetName])
        worksheetAsJson.forEach((res) => {          
            data.push(res)
         })
        console.log("Data Found :" + JSON.stringify(data))
        return data;        
    }   
}
