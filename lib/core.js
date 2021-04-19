import { CoincapService } from './services/coincap.service';
export function init(coins, service) {
    window.jpCrypto = {
        service: service || new CoincapService(),
        coins: coins,
        open: (config) => {
            const el = document.createElement('crypto-dialog');
            if (config.instructionsTemplate) {
                el.innerHTML += `<div slot="instructions">${config.instructionsTemplate}</div>`;
            }
            if (config.paidTemplate) {
                el.innerHTML += `<div slot="paid">${config.paidTemplate}</div>`;
            }
            el.setAttribute('value', config.value.toString());
            if (config.target) {
                el.setAttribute('target', true);
            }
            if (config.message) {
                el.setAttribute('message', config.message);
            }
            if (config.waitForConfirmation) {
                el.setAttribute('waitForConfirmation', config.waitForConfirmation);
            }
            (config.target || document.body).appendChild(el);
            return el;
        }
    };
    return window.jpCrypto;
}
//# sourceMappingURL=core.js.map