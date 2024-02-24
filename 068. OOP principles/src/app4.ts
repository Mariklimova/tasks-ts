// 4. Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
// свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
// (withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
// только через методы класса. Реализуйте проверку на достаточность средств
// перед снятием со счета.

interface iAccount {
    balance: number;
    deposit(sum: number): number;
    withdraw(minus: number): number
}

class Account implements iAccount {
   public balance: number = 500

   public deposit(sum: number): number {
        return this.balance + sum
    }

   public withdraw(minus: number): number {
        return this.balance - minus
    }
}
const account = new Account()
console.log(account.deposit(100));
console.log(account.withdraw(50));
console.log(account.balance);


