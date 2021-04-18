export declare class Coin {
    id: string;
    wallet: string;
    label: string;
    icon: string;
    color: string;
    constructor(id: string, wallet: string, label: string, icon: string, color: string);
    qr(amount: number, note?: string): string;
    rate(amount: number): Promise<number>;
    format(amount: number): string;
}
//# sourceMappingURL=coin.class.d.ts.map