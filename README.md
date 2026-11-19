# Anatolia Take Away website

A responsive static website starter for Anatolia Take Away, Bournemouth.

## Run locally
Open `index.html` in a browser, or run a local static server:
`python -m http.server 8000`

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Framework preset: **Other**. Build command: leave blank. Output directory: `.`.
4. Deploy.

## Important before accepting live orders
The current checkout is a front-end prototype. It builds an order summary in the browser but does not send orders to the restaurant or take payment. Before public launch, connect a secure order API/backend and payment provider (for example Stripe), configure delivery zones/fees, tax and order acceptance, and test the complete flow. Never put payment secret keys in browser code.

Menu transcription and prices are based on the two menu-board photos supplied by the restaurant. Confirm allergens, food descriptions, opening hours, delivery availability/fees, and final pricing before launch.
