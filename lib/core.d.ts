import { CryptoDialog } from './elements/crypto-dialog';
import { CryptoTimer } from './elements/crypto-timer';
import { Coin } from './types/coin.class';
import { CryptoService } from './types/crypto.service';
import { JpCrypto } from './types/jp-crypto.interface';
declare global {
    interface HTMLElementTagNameMap {
        'crypto-dialog': CryptoDialog;
        'crypto-timer': CryptoTimer;
    }
    interface Window {
        jpCrypto: JpCrypto;
    }
    class QRCodeStyling {
        constructor(config: any);
        append(el: HTMLElement): any;
    }
}
export declare function init(coins: Coin[], service?: CryptoService): JpCrypto;
//# sourceMappingURL=core.d.ts.map