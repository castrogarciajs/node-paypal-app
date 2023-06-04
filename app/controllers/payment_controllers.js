import { HOST } from "../../setup.js";

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
    application_contenxt: {
      brand_name: "My short",
      landing_page: "NO_PREFERENCE",
      user_action: "PAY_NOW",
      return_url: `${HOST}/capture-order`,
    },
  };
}

export function captureOrder() {}

export function cancelOrder() {}
