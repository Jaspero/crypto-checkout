import { CryptoService } from '../types/crypto.service';
export declare class CoincapService extends CryptoService {
    url: string;
    getPrice(value: any, coin: any): Promise<number>;
    confirmPayment(value: any, note: any): Promise<{
        success: boolean;
        value: any;
        note: any;
    }>;
}
//# sourceMappingURL=coincap.service.d.ts.map