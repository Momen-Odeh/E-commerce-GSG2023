import * as React from "react";
import Rating from "@mui/material/Rating";

export default function RatingStars({ ratingValue = 2.5 }) {
  return (
    <Rating
      name="half-rating-read"
      defaultValue={ratingValue}
      precision={0.5}
      readOnly
    />
  );
}
