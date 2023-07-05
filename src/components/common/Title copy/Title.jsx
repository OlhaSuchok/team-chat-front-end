import * as React from "react";
import { TitlePropTypes } from "./Title.props";
import { TitleText } from "./Title.styled";
import { Container } from "../Container/Container.styled";

export default function Title({ title }) {
  return (
    <Container>
      <TitleText>{title}</TitleText>
    </Container>
  );
}

Title.propTypes = TitlePropTypes;
