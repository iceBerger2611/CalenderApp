"use client";
import { Button, Typography } from "antd";
import { useState } from "react";
import theme from "../theme";
import { CalenderDate } from "./CalenderDate/CalenderDate";
import { ThemeProvider } from "@mui/material";

export const MainPage = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <CalenderDate
          calenderDate={{
            date: new Date(),
            events: [
              { isAllDay: true, title: "xcxc", description: "vfv" },
              { isAllDay: true, title: "xcxc", description: "vfv" },
            ],
          }}
        />
      </ThemeProvider>
    </div>
  );
};
