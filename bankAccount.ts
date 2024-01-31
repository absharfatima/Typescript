import * as readlineSync from 'readline-sync';
import * as ExcelJS from 'exceljs';
import * as fs from 'fs';

class Customer {
  constructor(
    public name: string,
    public dob: string,
    public age: number,
    public address: string,
    public aadharNumber: string,
    public panCardNumber: string,
    public contactNumber: string,
    public email: string,
    public wantsLockerService: boolean
  ) {}
}

class BankAccount {
  private accountHolder: Customer;
  private accountNumber: number;
  private lockerNumber: number | null;
  private balance: number;

  constructor(accountHolder: Customer, initialBalance: number) {
    this.accountHolder = accountHolder;
    this.accountNumber = this.accountNumber = BankAccount.generateRandomAccountNumber();
    this.lockerNumber = accountHolder.wantsLockerService ? this.generateRandomLockerNumber() : null;
    this.balance = initialBalance;
  }

  private static generateRandomAccountNumber(): number {
    const min = 100000000000;
    const max = 999999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private generateRandomLockerNumber(): number {
    return Math.floor(1000 + Math.random() * 9000);
  }

  getAccountHolder(): Customer {
    return this.accountHolder;
  }

  getAccountNumber(): number {
    return this.accountNumber;
  }

  getLockerNumber(): number | null {
    return this.lockerNumber;
  }

  getBalance(): number {
    return this.balance;
  }
}

function getCustomerDetails(): Customer {
  const name: string = readlineSync.question("Enter customer name: ");
  const dob: string = readlineSync.question("Enter date of birth (dd-mm-yyyy): ");
  const age: number = +readlineSync.question("Enter customer age: ");
  const address: string = readlineSync.question("Enter customer address: ");
  let aadharNumber: string;
  do {
    aadharNumber = readlineSync.question("Enter Aadhar number (12 digits): ");
  } while (!/^\d{12}$/.test(aadharNumber));

  let panCardNumber: string;
  do {
    panCardNumber = readlineSync.question("Enter PAN card number (10 characters): ");
  } while (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panCardNumber));

  const contactNumber: string = readlineSync.question("Enter contact phone number: ");
  const email: string = readlineSync.question("Enter email ID: ");
  const wantsLockerService: boolean = readlineSync.keyInYNStrict("Do you want locker service? (Y/N)");

  return new Customer(name, dob, age, address, aadharNumber, panCardNumber, contactNumber, email, wantsLockerService);
}

function appendDataToExcel(existingWorkbook: ExcelJS.Workbook, customerDetails: Customer, newAccount: BankAccount) {
  const worksheet = existingWorkbook.getWorksheet('CustomerData');

  // Add customer data
  const customerData = [
    newAccount.getAccountNumber(),
    customerDetails.name,
    customerDetails.dob,
    customerDetails.age,
    customerDetails.address,
    customerDetails.aadharNumber,
    customerDetails.panCardNumber,
    customerDetails.contactNumber,
    customerDetails.email,
    newAccount.getLockerNumber() || "N/A",
  ];
  worksheet.addRow(customerData);
}

// Example Usage
const customerDetails: Customer = getCustomerDetails();
const initialBalance: number = 1000;

const filePath = 'CustomerData.xlsx';

// Check if the file exists
if (fs.existsSync(filePath)) {
  // Load existing workbook
  const existingWorkbook = new ExcelJS.Workbook();
  existingWorkbook.xlsx.readFile(filePath)
    .then(() => {
      // Create new account
      const newAccount: BankAccount = new BankAccount(customerDetails, initialBalance);

      // Output details
      console.log("Customer Details:", newAccount.getAccountHolder());
      console.log("Account Number:", newAccount.getAccountNumber());
      console.log("Locker Number:", newAccount.getLockerNumber());
      console.log("Initial Balance:", newAccount.getBalance());

      // Append data to the existing workbook
      appendDataToExcel(existingWorkbook, customerDetails, newAccount);

      // Save the workbook with the added data
      existingWorkbook.xlsx.writeFile(filePath)
        .then(() => {
          console.log('Data appended to Excel file successfully.');
        })
        .catch((error) => {
          console.error('Error appending data to Excel file:', error);
        });
    })
    .catch((error) => {
      console.error('Error reading existing Excel file:', error);
    });
} else {
  // File doesn't exist, create a new one
  const newWorkbook = new ExcelJS.Workbook();
  const newWorksheet = newWorkbook.addWorksheet('CustomerData');

  // Add headers
  newWorksheet.addRow([
    'Account Number',
    'Account Holder Name',
    'Date of Birth',
    'Age',
    'Address',
    'Aadhar Number',
    'PAN Card Number',
    'Contact Number',
    'Email Id',
    'Locker Number'
  ]);

  // Create new account
  const newAccount: BankAccount = new BankAccount(customerDetails, initialBalance);

  // Output details
  console.log("Customer Details:", newAccount.getAccountHolder());
  console.log("Account Number:", newAccount.getAccountNumber());
  console.log("Locker Number:", newAccount.getLockerNumber());
  console.log("Initial Balance:", newAccount.getBalance());

  // Add customer data
  const customerData = [
    newAccount.getAccountNumber(),
    customerDetails.name,
    customerDetails.dob,
    customerDetails.age,
    customerDetails.address,
    customerDetails.aadharNumber,
    customerDetails.panCardNumber,
    customerDetails.contactNumber,
    customerDetails.email,
    newAccount.getLockerNumber() || "N/A",
  ];
  newWorksheet.addRow(customerData);

  // Save the new workbook
  newWorkbook.xlsx.writeFile(filePath)
    .then(() => {
      console.log('Data written to new Excel file successfully.');
    })
    .catch((error) => {
      console.error('Error writing data to new Excel file:', error);
    });
}
