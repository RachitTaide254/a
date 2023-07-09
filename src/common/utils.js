
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

export const handleExport = (columns, data) => {
    alert("hi")
    const formattedData = data.map((row) =>
        columns.reduce((obj, column) => {
            obj[column.Header] = row[column.accessor];
            return obj;
        }, {})
    );

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(excelBlob, 'table-data.xlsx');
};