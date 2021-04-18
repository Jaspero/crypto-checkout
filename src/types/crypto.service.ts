export abstract class CryptoService {
  // @ts-ignore
  async getPrice(value: number, coin: string) {
    return 0;
  };

  async confirmPayment(value: number, note?: string): Promise<{
    success: boolean;
    value: number;
    note?: string;
    error?: string;
  }> {
    return {success: true, value, note};
  }
}
