"use client";

import React from "react";
import styled from "styled-components";
import { Analytics } from "@vercel/analytics/react"

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
const geist = Geist({ subsets: ["latin"], weight: ["400", "700"] });

import Header from "@/components/Header";

const StyledBody = styled.body`
  background-color:rgb(56, 56, 56);
  // background-image: url('/sigma_batman.jpg');
`;

const BelowHeaderDiv = styled.div`
  padding-top: 110px;
`;

export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
  return (
    <html lang="en-US" className={geist.className}>
      <head>
        <Analytics />
        <meta charSet="UTF-8"/>
        <link rel="icon" type="image" href="leaf.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Leafer</title>
      </head>
      <StyledBody>
        <Header />
        <BelowHeaderDiv>
          {children}
        </BelowHeaderDiv>
      </StyledBody>
    </html>
  );
}