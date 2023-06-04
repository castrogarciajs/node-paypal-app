export function createOrder() {
  const order = {
    intent: "CAPTURE",
    purchase_untis: [
      {
        amount: {
          currency_code: "USD",
          value: 100.0,
        },
      },
    ],
  };
}

export function captureOrder() {}

export function cancelOrder() {}
