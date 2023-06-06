import {
  HOST,
  PAYPAL_API_URL,
  PAYPAL_CLIENT,
  PAYPAL_KEY,
} from "../../setup.js";
import axios from "axios";

export async function createOrder(_, res) {
  try {
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
        cancel_url: `${HOST}/cancel-order`,
      },
    };

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const {
      data: { access_token },
    } = await axios.post(`${PAYPAL_API_URL}/v1/oauth2/token`, params, {
      auth: {
        username: PAYPAL_CLIENT,
        password: PAYPAL_KEY,
      },
    });

    const resp = await axios.post(
      `${PAYPAL_API_URL}/v2/checkout/orders`,
      order,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return res.json({
      response: { ...resp },
    });
  } catch (error) {
    return res.status(401).json({ error: "Error autorizacion" });
  }
}

export function captureOrder() {}

export function cancelOrder() {}
