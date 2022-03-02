import { Card, Button } from "@mui/material";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import "./Card.css";
import { CharEpisodes } from "../CharEpisodes";
import { useState } from "react";

export type CardProps = {
  image: string;
  name: string;
  species: string;
  id: number;
  cardOpen: boolean;
};

export const MyCard: React.FC<CardProps> = ({ image, name, species, id }) => {
  const [cardOpen, setCardOpen] = useState(false);
  const handleClick = () => {
    setCardOpen(true);
  };
  return (
    <Card raised className="cardMain">
      <img className="avatar" alt="" src={image} />
      <h2 className="name">{name}</h2>
      <h4 className="species">{species}</h4>
      <Button
        className="episodeListButton"
        variant="outlined"
        onClick={handleClick}
        startIcon={<MovieFilterIcon />}
      >
        Show Episodes
      </Button>
      <CharEpisodes
        onClose={() => setCardOpen(false)}
        open={cardOpen}
        id={id}
      />
    </Card>
  );
};
