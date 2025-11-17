const crypto = require('crypto');


function isValidPassword(inputPassword, storedHash) {
  const hashedInput = crypto.createHash('md5').update(inputPassword).digest('hex').toUpperCase();
  return hashedInput === storedHash;
}

module.exports = {isValidPassword};

// import * as XLSX from "xlsx";

// export async function GET() {
//   // Fetch DB data here instead of static data
//   const data = [
//     { id: 1, name: "John", amount: 2500 },
//     { id: 2, name: "Smith", amount: 3000 },
//   ];

//   const worksheet = XLSX.utils.json_to_sheet(data);
//   const workbook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

//   const excelBuffer = XLSX.write(workbook, {
//     type: "buffer",
//     bookType: "xlsx",
//   });

//   return new Response(excelBuffer, {
//     status: 200,
//     headers: {
//       "Content-Type":
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//       "Content-Disposition": `attachment; filename=report_${Date.now()}.xlsx`,
//     },
//   });
// }
