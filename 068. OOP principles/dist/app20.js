// 3. Создайте интерфейс iAccount со следующими методами:
// • balance: хранит цисловое значение баланса света
// • getBalance(): возвращает текущий баланс счета
// • deposit(amount: number): пополняет счет на указанную сумму
// • withdraw(amount: number): снимает указанную сумму со счета
// Реализуйте класс Account, который имплементирует интерфейс iAccount. Реализуйте все методы
// интерфейса. Перед снятием withdraw проверяйте, достаточно ли средств на счете. Если средств
// недостаточно, выбрасывайте ошибку.
class Account_20 {
    balance = 1000;
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        return this.balance = this.balance + amount;
    }
    withdraw(amount) {
        try {
            if (this.balance < amount)
                throw new Error('недостаточно средста на счете');
            return this.balance = this.balance - amount;
        }
        catch (error) {
            return error.message;
        }
    }
}
const account_20 = new Account_20();
console.log(account_20.balance);
console.log(account_20.deposit(200));
console.log(account_20.withdraw(100));
