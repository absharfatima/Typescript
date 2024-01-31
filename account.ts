import * as fs from 'fs';
import * as XLSX from 'xlsx';
import * as readlineSync from 'readline-sync';
 
// Interface for the account details
interface AccountDetails {
    account_no: string;
    holder_name: string;
    address: string;
    adhar_no: string;
    pan_no: string;
    phone_no: string;
    balance: number;
    locker: boolean;
    pin: string;
}
 
// Function to generate a random 4-digit pin
function generatePin(): string {
    const pin = Math.floor(1000 + Math.random() * 9000).toString();
    return pin;
}
 
// Function to generate a random 10-digit account number
function generateAccountNumber(): string {
    const accountNo = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    return accountNo;
}
 
// Function to create account details for a person with validations
function createAccountDetails(): AccountDetails {
    const account_no = generateAccountNumber();
    const holder_name = readlineSync.question("Enter Account Holder Name: ");
    const address = readlineSync.question("Enter Address: ");
 
    // Validate Aadhar number (exact 12 digits)
    let adhar_no: string;
    do {
        adhar_no = readlineSync.question("Enter Aadhar Number (exactly 12 digits): ");
    } while (!/^\d{12}$/.test(adhar_no));
 
    // Validate PAN number (exactly 6 characters)
    let pan_no: string;
    do {
        pan_no = readlineSync.question("Enter PAN Number (exactly 6 characters): ");
    } while (pan_no.length !== 6);
 
    // Validate phone number (exactly 10 digits)
    let phone_no: string;
    do {
        phone_no = readlineSync.question("Enter Phone Number (exactly 10 digits): ");
    } while (!/^\d{10}$/.test(phone_no));
 
    const balance = 5000; // Fixed balance
    const lockerInput = readlineSync.keyInYNStrict("Does the account have a locker?");
    const pin = generatePin();
 
    return {
        account_no,
        holder_name,
        address,
        adhar_no,
        pan_no,
        phone_no,
        balance,
        locker: lockerInput,
        pin,
    };
}
 
// Load existing data from Excel file if it exists
let existingData: AccountDetails[] = [];
const excelFilePath = 'AccountDetails.xlsx';
 
if (fs.existsSync(excelFilePath)) {
    const workbook = XLSX.readFile(excelFilePath);
    existingData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]) as AccountDetails[];
}
 
// Number of persons
const numberOfPersons = 2; // Change to 2 for only 2 persons
let addMoreDetails = true;
const allPersons: AccountDetails[] = [];
 
while (addMoreDetails) {
    // Create account details for 2 persons
    for (let i = 1; i <= numberOfPersons; i++) {
        console.log(`Enter details for Person ${i}:`);
        const accountDetails = createAccountDetails();
        allPersons.push(accountDetails);
    }
 
    // Ask the user if they want to add more details
    const response = readlineSync.keyInYNStrict("Do you want to add more details?");
    addMoreDetails = response;
}
 
// Combine new data with existing data
const combinedData = existingData.concat(allPersons);
 
// Display the generated account details in a tabular format
console.log("Generated Account Details:");
console.table(combinedData);
 
// Export combined data to Excel sheet
const ws = XLSX.utils.json_to_sheet(combinedData);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'AccountDetails');
const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
 
// Save Excel sheet to a file
fs.writeFileSync(excelFilePath, excelBuffer);
 
console.log('Data exported to AccountDetails.xlsx');