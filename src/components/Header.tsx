import React from "react";
import Navbar from "./navbar/Navbar";
import styled from "@emotion/styled";
import Heading from "./Heading";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("./Header-BG.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 80%;
  display: flex;
  flex-wrap: wrap;
`;

export default function Header() {
  return (
    <Wrapper>
      <Navbar />
      <Heading />
    </Wrapper>
  )
}