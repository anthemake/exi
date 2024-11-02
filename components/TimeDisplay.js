import React, { useState, useEffect } from "react";

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      let ampm = "";

      if (hours === 0) {
        hours = 12;
        ampm = "AM";
      } else if (hours > 12) {
        hours = hours - 12;
        ampm = "PM";
      } else {
        ampm = "AM";
      }

      const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
      setCurrentTime(formattedTime);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className="time text-bg-body-color-right text-2xl">
      {currentTime}
    </span>
  );
};

export default TimeDisplay;
