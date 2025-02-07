// Міст (Bridge) — це паттерн програмування, який дозволяє розмістити абстракцію і реалізацію в окремі класи, дозволяючи їм мати незалежний функціонал

// Клас Participant представляє користувача, який може відправляти повідомлення.
class Participant {
    // Конструктор приймає два параметри: alias, communicator
    constructor(alias, communicator) {
      this.alias = alias;
      this.communicator = communicator;
  }
  // Метод dispatchMessage відправляє повідомлення за допомогою відповідного засобу комунікації.
  // Він приймає один параметр - text - текст повідомлення, яке потрібно відправити.
  dispatchMessage(text) {
    const message = this.prepareMessage(text);
    this.communicator.transmit(message);
  }
  // Метод prepareMessage приймає text та повертає  `[${this.alias}]: ${text}`
  prepareMessage(text) {
    return `[${this.alias}]: ${text}`;
  }
}
// Клас Communicator є абстракцією для засобів комунікації.
class Communicator {
  transmit(message) {
    throw new Error("Метод transmit має бути перевизначений в підкласі");
  }
}
// Клас SMSCommunicator відповідає за відправку повідомлень через SMS.
class SMSCommunicator extends Communicator {
  // Статичний метод transmit відправляє SMS.
  // Він приймає один параметр - message - текст повідомлення, яке потрібно відправити, та виводимо в консоль `Відправлено SMS: ${message}`.
  transmit(message) {
    throw new Error("Метод transmit має бути перевизначений в підкласі");
  }
}

// Клас EmailCommunicator відповідає за відправку повідомлень через Email.
class EmailCommunicator {
  // Статичний метод transmit відправляє Email.
   // Він приймає один параметр - message - текст повідомлення, яке потрібно відправити та виводимо в консоль `Відправлено Email: ${message}`.
  transmit(message) {
    console.log(`Відправлено Email: ${message}`);
  }
}

console.log("Завдання 7 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо двох користувачів - Max та Linda - які відправляють повідомлення за допомогою різних засобів комунікації.
const max = new Participant("Max", new SMSCommunicator());
const linda = new Participant("Linda", new EmailCommunicator());
// Max відправляє повідомлення через SMS.
max.dispatchMessage("Hello!"); // Виведе: Відправлено SMS: [Max]: Hello!

// Linda відправляє повідомлення через Email.
linda.dispatchMessage("Hello!"); // Виведе: Відправлено Email: [Linda]: Hello!
