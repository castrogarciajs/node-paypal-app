import "dotenv/config";

export const PORT = 3000;
export const HOST = `http://localhost:${PORT}`;

export const PAYPAL_CLIENT = process.env.PAYPAL_KEY_CLIENT_ID;
export const PAYPAL_KEY = process.env.PAYPAL_KEY_SECRET_API;
export const PAYPAL_API_URL = "https://api-m.sandbox.paypal.com";
