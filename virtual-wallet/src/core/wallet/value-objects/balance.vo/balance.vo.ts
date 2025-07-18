export class Balance {
  private readonly amount: number;

  constructor(amount: number) {
    if (amount < 0) {
      throw new Error('Balance cannot be negative');
    }
    this.amount = amount;
  }

  get value(): number {
    return this.amount;
  }

  add(value: number): Balance {
    return new Balance(this.amount + value);
  }

  subtract(value: number): Balance {
    const newAmount = this.amount - value;
    if (newAmount < 0) {
      throw new Error('Insufficient balance');
    }
    return new Balance(newAmount);
  }
}
