import 'qr-code-styling/lib/qr-code-styling.js';
import { LitElement } from 'lit-element';
import { Coin } from '../types/coin.class';
import { CryptoService } from '../types/crypto.service';
export declare class CryptoDialog extends LitElement {
    static styles: import("lit-element").CSSResult;
    message: string;
    waitForConfirmation: boolean;
    target: boolean;
    hasTime: boolean;
    loading: boolean;
    paid: boolean;
    error: string;
    value: number;
    coinValue: number;
    displayedCoinValue: string;
    coin: Coin;
    _qrEl: HTMLDivElement;
    get service(): CryptoService;
    get coins(): Coin[];
    connectedCallback(): void;
    coinsTemp(): import("lit-element").TemplateResult;
    payTemp(): import("lit-element").TemplateResult;
    paidTemp(): import("lit-element").TemplateResult;
    render(): import("lit-element").TemplateResult;
    coinSelected(event: PointerEvent): Promise<void>;
    selectCoin(coin: string): Promise<void>;
    renderQr(): void;
    timeOut(): void;
    close(): void;
    confirmPay(): Promise<void>;
}
//# sourceMappingURL=crypto-dialog.d.ts.map