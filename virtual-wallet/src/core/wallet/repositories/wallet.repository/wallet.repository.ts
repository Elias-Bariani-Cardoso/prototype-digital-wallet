import { Wallet } from "../../entities/wallet.entity/wallet.entity";

export interface WalletRepository {
  findById(id: string): Promise<Wallet | null>;
  save(wallet: Wallet): Promise<void>;
}
