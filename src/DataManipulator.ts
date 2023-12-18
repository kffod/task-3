import { ServerRespond } from './DataStreamer';

export interface Row {
  ratio: number;
  upper_bound: number;
  lower_bound: number;
  trigger_alert?: number; // Use optional chaining to handle cases where trigger_alert is undefined
  timestamp: Date;
}

export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]): Row {
    const stockABC = serverResponds[0];
    const stockDEF = serverResponds[1];

    // Replace with the actual field for stock ABC price
    const price_abc = stockABC.top_ask.price;

    // Replace with the actual field for stock DEF price
    const price_def = stockDEF.top_bid.price;

    // Calculate ratio
    const ratio = price_abc / price_def;

    // Replace with the actual 12-month historical average ratio
    const historicalAverageRatio = 1.0; // replace with the actual historical average ratio

    // Calculate upper and lower bounds (using +/- 10% of the 12-month historical average ratio)
    const upper_bound = 1.1 * historicalAverageRatio;
    const lower_bound = 0.9 * historicalAverageRatio;

    // Determine trigger alert
    const trigger_alert = ratio > upper_bound || ratio < lower_bound ? ratio : undefined;

    return {
      ratio,
      upper_bound,
      lower_bound,
      trigger_alert,
      timestamp: new Date(), // Replace with the actual timestamp if available
    };
  }
}
