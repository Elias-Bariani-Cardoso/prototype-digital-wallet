export class WalletCreatedEvent {
  constructor(
    public readonly walletId: string,
    public readonly userId: string,
  ) {}
}
