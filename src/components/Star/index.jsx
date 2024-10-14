import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

import { Container } from "./styles";

export function Star() {
  return (
    <Container>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <CiStar />
    </Container>
  );
}
