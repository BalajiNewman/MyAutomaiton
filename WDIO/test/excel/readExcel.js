const reader = require('xlsx')
//import { readFile, writeFileXLSX, utils, WorkSheet, WorkBook } from "xlsx";

readFile()

function readFile() {
    // Reading our test file
    const file = reader.readFile('./test/excel/Elements.xlsx')

    let data = []

    const sheets = file.SheetNames

    sheets.forEach((sh)=> {
        let temp = reader.utils.sheet_to_json(
            file.Sheets['login'])
        temp.forEach((res) => {
            data.push(res)   
        })
    })   

    // Printing data
    console.log(data)

   // return data;
}
