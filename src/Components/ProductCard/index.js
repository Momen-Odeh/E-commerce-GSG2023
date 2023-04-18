import React from "react";
import { Card, Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Icon from "./Icon.js"; //----------------> 1
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CardContent from "@mui/material/CardContent";
import Ratings from "./Ratings.js"; //----------------> 2
import RatingStars from "./Rating";
import Container from "@mui/material/Container";
import Description from "./Description.js"; //----------------> 3
import Price from "./Price.js"; //----------------> 4
import { createTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  CardTheme: {
    boxShadow: "none",
    width: 270,
    position: "relative",
    height: 350,
  },
  ContainerTheme: {
    width: 270,
    height: 250,
    backgroundColor: "#F5F5F5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  DiscountBoxTheme: {
    width: 55,
    height: 26,
    backgroundColor: "#DB4444",
    borderRadius: 1,
    top: 10,
    left: 11,
    fontSize: 12,
    position: "absolute",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontWeight: 500,
  },
  IconsBoxTheme: {
    display: "inline-block",
    position: "absolute",
    left: 220,
    top: 12,
  },
  IconBackgroundColor: {
    backgroundColor: "#FFFFFF",
  },
  ImageTheme: {
    height: 170,
    width: 150,
    alignItems: "center",
    display: "flex",
    objectFit: "contain",
  },
  CardContent: {
    padding: "16px 0 0 0",
  },
  NumberOfReviews: {
    fontFamily: "Poppins",
    fontWeight: 500,
    padding: 0,
    margin: 0,
    fontSize: 14,
    opacity: 0.5,
  },
});
const ProductCard = (props) => {
  const { image, title, stars = 3.5, newPrice = 99, oldPrice = 120 } = props;
  return (
    <div>
      <Card sx={theme.CardTheme}>
        {/* Container Contains Discount, Icons, Image of the Product */}
        <Container sx={theme.ContainerTheme}>
          {/* Discount Box */}
          <Box sx={theme.DiscountBoxTheme}>%15</Box>
          {/* Icons Box */}
          <Box sx={theme.IconsBoxTheme}>
            <Box sx={{ marginY: 0.5 }}>
              <Avatar sx={theme.IconBackgroundColor}>
                {
                  <IconButton color="secondary" aria-label="add to favorite">
                    <FavoriteBorderIcon />
                  </IconButton>
                }
              </Avatar>
            </Box>
            <Box>
              <Avatar sx={theme.IconBackgroundColor}>
                {
                  <IconButton color="primary" aria-label="See preview">
                    <VisibilityOutlinedIcon />
                  </IconButton>
                }
              </Avatar>
            </Box>
          </Box>
          {/* CardMedia Contains the Image of the Product */}
          <CardMedia
            component="img"
            sx={theme.ImageTheme}
            image={image}
            title="green iguana"
          />
        </Container>
        {/* CardContent Contains The Card Description: Description, Price, Rating */}
        <CardContent sx={theme.CardContent}>
          <Description description={title} />
          <Price priceBeforeDiscount={oldPrice} priceAfterDiscount={newPrice} />
          {/* <Ratings rating={rating} /> */}
          <RatingStars component="span" size="small" ratingValue={stars} />
          <Typography variant="p" component="span" sx={theme.NumberOfReviews}>
            (49)
          </Typography>
        </CardContent>
      </Card>
      <br />
    </div>
  );
};

export default ProductCard;
