"use client";
import { Button, Typography } from "antd";
import { useState } from "react";

export const MainPage = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Button onClick={() => setShowText((prev) => !prev)}>
        click Me
      </Button>
      {showText && <Typography>Text</Typography>}
    </div>
  );
};
