// pages/api/news.js
export default async function handler(req, res) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
    },
  };

  try {
          const response = await fetch("https://yahoo-finance15.p.rapidapi.com/api/v1/markets/news?tickers=USD", options);
          const data = await response.json();

          const latestNewsItems = data?.body?.slice(0, 8) || [];
          res.status(200).json(latestNewsItems);
        } catch (error) {
          console.error("Error fetching news:", error);
          res.status(500).json({ error: "Failed to load news" });
        }
      }