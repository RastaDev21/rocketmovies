import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

import { Container } from "./styles";

export function Star({ rating }) {
  const filledStars = Array.from({ length: rating }, (_, index) => (
    <FaStar key={index} />
  ));
  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <CiStar key={index + rating} />
  ));

  return <Container>{[...filledStars, ...emptyStars]}</Container>;
}
