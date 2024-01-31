class BankAccount {
    private balance: number = 0;

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

let account = new BankAccount();
account.deposit(1000);
account.withdraw(500);
console.log(account.getBalance()); // Output: 500
