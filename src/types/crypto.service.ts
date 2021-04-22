export abstract class CryptoService {
  abstract getPrice(value: number, coin: string): Promise<number>;

  abstract confirmPayment(value: number, note?: string): Promise<{
    success: boolean;
    value: number;
    note?: string;
    error?: string;
  }>
}
