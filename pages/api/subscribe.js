const client = require("@mailchimp/mailchimp_marketing");

export default async function handler(req, res) {
  client.setConfig({
    apiKey: process.env.MC_API_KEY,
    server: "us5",
  });

  const now = new Date();
  const ts = now.toISOString();

  const body = JSON.parse(req.body);
  const userAddress = body.email;
  try {
    const mcResponse = await client.lists.addListMember("43b4351721", {
      email_address: userAddress,
      status: "pending",
      tags: ["shillshop"],
    });
    res.status(200).json({ mcResponse: mcResponse });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
