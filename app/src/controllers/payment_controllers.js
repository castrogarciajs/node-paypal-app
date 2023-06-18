import {
  HOST,
  PAYPAL_API_URL,
  PAYPAL_CLIENT,
  PAYPAL_KEY,
} from "../../../setup.js";
import axios from "axios";

export async function createOrder(_, res) {
  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "105.70",
          },
        },
      ],
      application_context: {
        brand_name: "mycompany.com",
        landing_page: "NO_PREFERENCE",
        user_action: "PAY_NOW",
        return_url: `${HOST}/capture-order`,
        cancel_url: `${HOST}/cancel-payment`,
      },
    };

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const { data } = await axios.post(
      `${PAYPAL_API_URL}/v1/oauth2/token`,
      params,
      {
        auth: {
          username: PAYPAL_CLIENT,
          password: PAYPAL_KEY,
        },
      }
    );
    const response = await axios.post(
      `${PAYPAL_API_URL}/v2/checkout/orders`,
      order,
      {
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
      }
    );

    return res.json(response.data);
  } catch (error) {
    return res.status(500).json({ error: "Error server" });
  }
}

export async function captureOrder(req, res) {
  const { token } = req.query;

  const response = await axios.post(
    `${PAYPAL_API_URL}/v2/checkout/orders/${token}/capture`,
    null,
    {
      auth: {
        username: PAYPAL_CLIENT,
        password: PAYPAL_KEY,
      },
    }
  );

  console.log(response.data);

  return res.send("pagado");
}

export function cancelOrder() {}
