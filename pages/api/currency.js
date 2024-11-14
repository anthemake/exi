// pages/api/currency.js
export default async function handler(req, res) {
  const oapiUrl = process.env.OAPI_URL; 
  const options = { method: "GET", headers: { accept: "application/json" } };

  try {
    const response = await fetch(oapiUrl, options);
    const data = await response.json();
    res.status(200).json(data); 
  } catch (error) {
    console.error("Error fetching currency data:", error);
    res.status(500).json({ error: "Failed to load currency data" });
  }
}
