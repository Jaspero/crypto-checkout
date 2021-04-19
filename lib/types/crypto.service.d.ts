export declare abstract class CryptoService {
    getPrice(value: number, coin: string): Promise<number>;
    confirmPayment(value: number, note?: string): Promise<{
        success: boolean;
        value: number;
        note?: string;
        error?: string;
    }>;
}
//# sourceMappingURL=crypto.service.d.ts.map