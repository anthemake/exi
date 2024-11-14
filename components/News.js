import React, { useEffect, useState } from "react";

const News = () => {
  const [newsItems, setNewsItems] = useState([]);

  const limitDescription = (description, limit = 20) => {
    const words = description?.split(" ") || [];
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : description;
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news"); 
        const data = await response.json();
        setNewsItems(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="newsBlocks">
      {newsItems.length > 0 ? (
        newsItems.map((newsItem, index) => {
          const { title, description, link, pubDate } = newsItem;
          const pubDateObj = pubDate ? new Date(pubDate) : null;
          const formattedPubDate = pubDateObj
            ? pubDateObj.toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })
            : "Unknown Date";

          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-300 py-2 currency-row"
            >
              <div className="bg-bg-cur-symb-grey text-base sm:text-sm md:text-lg font-bold text-white rounded p-2 mb-2 sm:mb-0 sm:ml-4">
                {title || "No title available"}
              </div>

              <div className="text-sm sm:text-md md:text-lg text-orange-300 mb-2 sm:mb-0 sm:ml-4">
                {formattedPubDate}
              </div>

              {link && (
                <a
                  href={link}
                  className="bg-slate-900 text-white text-sm sm:text-md md:text-lg rounded p-2 ml-0 sm:ml-4 mt-2 sm:mt-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              )}
            </div>
          );
        })
      ) : (
        <p>Loading news items...</p>
      )}
    </div>
  );
};

export default News;
