"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var XLSX = require("xlsx");
var readlineSync = require("readline-sync");
// Function to generate a random 4-digit pin
function generatePin() {
    var pin = Math.floor(1000 + Math.random() * 9000).toString();
    return pin;
}
// Function to generate a random 10-digit account number
function generateAccountNumber() {
    var accountNo = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    return accountNo;
}
// Function to create account details for a person with validations
function createAccountDetails() {
    var account_no = generateAccountNumber();
    var holder_name = readlineSync.question("Enter Account Holder Name: ");
    var address = readlineSync.question("Enter Address: ");
    // Validate Aadhar number (exact 12 digits)
    var adhar_no;
    do {
        adhar_no = readlineSync.question("Enter Aadhar Number (exactly 12 digits): ");
    } while (!/^\d{12}$/.test(adhar_no));
    // Validate PAN number (exactly 6 characters)
    var pan_no;
    do {
        pan_no = readlineSync.question("Enter PAN Number (exactly 6 characters): ");
    } while (pan_no.length !== 6);
    // Validate phone number (exactly 10 digits)
    var phone_no;
    do {
        phone_no = readlineSync.question("Enter Phone Number (exactly 10 digits): ");
    } while (!/^\d{10}$/.test(phone_no));
    var balance = 5000; // Fixed balance
    var lockerInput = readlineSync.keyInYNStrict("Does the account have a locker?");
    var pin = generatePin();
    return {
        account_no: account_no,
        holder_name: holder_name,
        address: address,
        adhar_no: adhar_no,
        pan_no: pan_no,
        phone_no: phone_no,
        balance: balance,
        locker: lockerInput,
        pin: pin,
    };
}
// Load existing data from Excel file if it exists
var existingData = [];
var excelFilePath = 'AccountDetails.xlsx';
if (fs.existsSync(excelFilePath)) {
    var workbook = XLSX.readFile(excelFilePath);
    existingData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
}
// Number of persons
var numberOfPersons = 2; // Change to 2 for only 2 persons
var addMoreDetails = true;
var allPersons = [];
while (addMoreDetails) {
    // Create account details for 2 persons
    for (var i = 1; i <= numberOfPersons; i++) {
        console.log("Enter details for Person ".concat(i, ":"));
        var accountDetails = createAccountDetails();
        allPersons.push(accountDetails);
    }
    // Ask the user if they want to add more details
    var response = readlineSync.keyInYNStrict("Do you want to add more details?");
    addMoreDetails = response;
}
// Combine new data with existing data
var combinedData = existingData.concat(allPersons);
// Display the generated account details in a tabular format
console.log("Generated Account Details:");
console.table(combinedData);
// Export combined data to Excel sheet
var ws = XLSX.utils.json_to_sheet(combinedData);
var wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'AccountDetails');
var excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
// Save Excel sheet to a file
fs.writeFileSync(excelFilePath, excelBuffer);
console.log('Data exported to AccountDetails.xlsx');
