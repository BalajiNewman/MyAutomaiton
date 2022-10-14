// Requiring module
const reader = require('xlsx')

createExcelFile()

function createExcelFile() {
    // Reading our test file
    const file = reader.readFile('./test/excel/Elements.xlsx')

    // Sample data set
    let data = [{
        Flash: '#flash',
        Logout: '.button'           
    }]

    const ws = reader.utils.json_to_sheet(data)

    reader.utils.book_append_sheet(file, ws, "secure")

    // Writing to our file
    reader.writeFile(file, './test/excel/Elements.xlsx')
}

