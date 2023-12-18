import { ServerRespond } from './DataStreamer';

export interface Row {
  stock: string;
  top_ask_price: number;
  timestamp: Date;
  ratio: number;
  upper_bound: number;
  lower_bound: number;
  trigger_alert: number;
}

export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]): Row[] {
    return serverResponds.map((el: ServerRespond) => {
      const price_abc = el.top_ask.price; // Replace with the actual field for stock ABC price
      const price_def = el.top_bid.price; // Replace with the actual field for stock DEF price

      // Calculate ratio
      const ratio = price_abc / price_def;

      // Replace with the actual 12-month historical average ratio
      const historicalAverageRatio = 1.0; // replace with the actual historical average ratio

      // Calculate upper and lower bounds
      const upper_bound = 1.1 * historicalAverageRatio;
      const lower_bound = 0.9 * historicalAverageRatio;

      // Determine trigger alert
      const trigger_alert = ratio > upper_bound || ratio < lower_bound ? ratio : 0;

      return {
        stock: el.stock,
        top_ask_price: el.top_ask.price,
        timestamp: el.timestamp,
        ratio,
        upper_bound,
        lower_bound,
        trigger_alert,
      };
    });
  }
}
