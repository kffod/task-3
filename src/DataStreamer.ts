// DataStreamer.ts

// Interface representing an order
export interface Order {
  price: number;
  size: number;
}

// Interface representing server response
export interface ServerRespond {
  stock: string;
  top_bid: Order;
  top_ask: Order;
  timestamp: Date;
}

// Class responsible for fetching data from the server
class DataStreamer {
  // API URL for data retrieval
  static API_URL: string = 'http://localhost:8080/query?id=1';

  // Static method to fetch data from the server
  static getData(callback: (data: ServerRespond[]) => void): void {
    const request = new XMLHttpRequest();
    request.open('GET', DataStreamer.API_URL, false);

    request.onload = () => {
      if (request.status === 200) {
        callback(JSON.parse(request.responseText));
      } else {
        alert('Request failed');
      }
    };

    request.send();
  }
}

// Export the DataStreamer class
export default DataStreamer;
