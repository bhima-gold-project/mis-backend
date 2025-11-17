const crypto = require('crypto');
const XLSX = require("xlsx");


function isValidPassword(inputPassword, storedHash) {
  const hashedInput = crypto.createHash('md5').update(inputPassword).digest('hex').toUpperCase();
  return hashedInput === storedHash;
}


const exportToExcel = async (req, res) => {
  const data = req.body;

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

  const excelBuffer = XLSX.write(workbook, {
    type: "buffer",
    bookType: "xlsx",
  });

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );

  res.setHeader(
    "Content-Disposition",
    `attachment; filename=report_${Date.now()}.xlsx`
  );

  return res.send(excelBuffer); // <-- send buffer directly
};


module.exports = { isValidPassword, exportToExcel };


