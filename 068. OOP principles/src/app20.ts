// 3. Создайте интерфейс iAccount со следующими методами:
// • balance: хранит цисловое значение баланса света
// • getBalance(): возвращает текущий баланс счета
// • deposit(amount: number): пополняет счет на указанную сумму
// • withdraw(amount: number): снимает указанную сумму со счета
// Реализуйте класс Account, который имплементирует интерфейс iAccount. Реализуйте все методы
// интерфейса. Перед снятием withdraw проверяйте, достаточно ли средств на счете. Если средств
// недостаточно, выбрасывайте ошибку.


interface iAccount_20 {
    balance: number
    getBalance(): number
    deposit(amount: number): number
    withdraw(amount: number): number
}

class Account_20 implements iAccount_20 {
    balance: number = 1000;
    getBalance(): number {
        return this.balance
    }

    deposit(amount: number): number {
        return this.balance = this.balance + amount
    }
    withdraw(amount: number): number {
        try {
            if (this.balance < amount) throw new Error('недостаточно средста на счете')
            return this.balance = this.balance - amount
        } catch (error) {
            return error.message
        }
    }
}

const account_20 = new Account_20();
console.log(account_20.balance);
console.log(account_20.deposit(200));
console.log(account_20.withdraw(100));


