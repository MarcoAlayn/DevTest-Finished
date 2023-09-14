import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: theme.spacing(2),
  transition: "transform 0.3s",
  "&:hover": {
    transform: "rotateY(180deg)",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
}));

const PokemonCard = ({ id, name, imageFront, imageBack }) => {
  return (
    <StyledCard>
      <StyledCardMedia image={imageFront} title={name} />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ID: {id}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default PokemonCard;
