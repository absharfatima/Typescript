"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var ExcelJS = require("exceljs");
var fs = require("fs");
var Customer = /** @class */ (function () {
    function Customer(name, dob, age, address, aadharNumber, panCardNumber, contactNumber, email, wantsLockerService) {
        this.name = name;
        this.dob = dob;
        this.age = age;
        this.address = address;
        this.aadharNumber = aadharNumber;
        this.panCardNumber = panCardNumber;
        this.contactNumber = contactNumber;
        this.email = email;
        this.wantsLockerService = wantsLockerService;
    }
    return Customer;
}());
var BankAccount = /** @class */ (function () {
    function BankAccount(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.accountNumber = this.accountNumber = BankAccount.generateRandomAccountNumber();
        this.lockerNumber = accountHolder.wantsLockerService ? this.generateRandomLockerNumber() : null;
        this.balance = initialBalance;
    }
    BankAccount.generateRandomAccountNumber = function () {
        var min = 100000000000;
        var max = 999999999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    BankAccount.prototype.generateRandomLockerNumber = function () {
        return Math.floor(1000 + Math.random() * 9000);
    };
    BankAccount.prototype.getAccountHolder = function () {
        return this.accountHolder;
    };
    BankAccount.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    BankAccount.prototype.getLockerNumber = function () {
        return this.lockerNumber;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
function getCustomerDetails() {
    var name = readlineSync.question("Enter customer name: ");
    var dob = readlineSync.question("Enter date of birth (dd-mm-yyyy): ");
    var age = +readlineSync.question("Enter customer age: ");
    var address = readlineSync.question("Enter customer address: ");
    var aadharNumber;
    do {
        aadharNumber = readlineSync.question("Enter Aadhar number (12 digits): ");
    } while (!/^\d{12}$/.test(aadharNumber));
    var panCardNumber;
    do {
        panCardNumber = readlineSync.question("Enter PAN card number (10 characters): ");
    } while (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panCardNumber));
    var contactNumber = readlineSync.question("Enter contact phone number: ");
    var email = readlineSync.question("Enter email ID: ");
    var wantsLockerService = readlineSync.keyInYNStrict("Do you want locker service? (Y/N)");
    return new Customer(name, dob, age, address, aadharNumber, panCardNumber, contactNumber, email, wantsLockerService);
}
function appendDataToExcel(existingWorkbook, customerDetails, newAccount) {
    var worksheet = existingWorkbook.getWorksheet('CustomerData');
    // Add customer data
    var customerData = [
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
var customerDetails = getCustomerDetails();
var initialBalance = 1000;
var filePath = 'CustomerData.xlsx';
// Check if the file exists
if (fs.existsSync(filePath)) {
    // Load existing workbook
    var existingWorkbook_1 = new ExcelJS.Workbook();
    existingWorkbook_1.xlsx.readFile(filePath)
        .then(function () {
        // Create new account
        var newAccount = new BankAccount(customerDetails, initialBalance);
        // Output details
        console.log("Customer Details:", newAccount.getAccountHolder());
        console.log("Account Number:", newAccount.getAccountNumber());
        console.log("Locker Number:", newAccount.getLockerNumber());
        console.log("Initial Balance:", newAccount.getBalance());
        // Append data to the existing workbook
        appendDataToExcel(existingWorkbook_1, customerDetails, newAccount);
        // Save the workbook with the added data
        existingWorkbook_1.xlsx.writeFile(filePath)
            .then(function () {
            console.log('Data appended to Excel file successfully.');
        })
            .catch(function (error) {
            console.error('Error appending data to Excel file:', error);
        });
    })
        .catch(function (error) {
        console.error('Error reading existing Excel file:', error);
    });
}
else {
    // File doesn't exist, create a new one
    var newWorkbook = new ExcelJS.Workbook();
    var newWorksheet = newWorkbook.addWorksheet('CustomerData');
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
    var newAccount = new BankAccount(customerDetails, initialBalance);
    // Output details
    console.log("Customer Details:", newAccount.getAccountHolder());
    console.log("Account Number:", newAccount.getAccountNumber());
    console.log("Locker Number:", newAccount.getLockerNumber());
    console.log("Initial Balance:", newAccount.getBalance());
    // Add customer data
    var customerData = [
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
        .then(function () {
        console.log('Data written to new Excel file successfully.');
    })
        .catch(function (error) {
        console.error('Error writing data to new Excel file:', error);
    });
}
