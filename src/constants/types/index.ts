export type ResponseOrderRow = [string, string];
export type OrderRow = [string, string];
export type Coins = [string, string];

export interface SocketMessage {
  stream: string;
  data: DepthSocketMessageData | AggTradeSocketMessageData;
}

export interface DepthSocketMessageData {
  E: number;
  U: number;
  a: ResponseOrderRow[];
  b: ResponseOrderRow[];
  e: string;
  s: string;
  u: number;
}

export interface AggTradeSocketMessageData {
  E: number;
  M: boolean;
  T: number;
  a: number;
  e: string;
  f: number;
  l: number;
  m: boolean;
  p: string;
  q: string;
  s: string;
}

export interface SnapshotResponse {
  asks: OrderRow[];
  bids: OrderRow[];
  lastUpdateId: number;
}
export interface Row {
  price: number;
  amount: number;
  total: number;
}
