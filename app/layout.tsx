"use client";

import React from "react";
import styled from "styled-components";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], weight: ["400", "700"] });

const StyledBody = styled.body`
    // background-color:rgb(56, 56, 56);
    background-image: url('/sigma_batman.jpg');
`;

export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
  return (
      <html lang="en" className={geist.className}>
      <head>
          <meta charSet="UTF-8" lang="en-US"/>
          <link rel="icon" type="image" href="leaf.png"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Leafer</title>
      </head>
      <StyledBody>
          <h1>Hawk Tuah</h1>
      </StyledBody>
      </html>
  );
}