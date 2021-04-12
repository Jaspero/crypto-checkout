export interface Coin {
  id: string;
  label: string;
  icon: string;
  qr: (wallet: string, note: string, amount: number) => string;
  color?: string;
}
