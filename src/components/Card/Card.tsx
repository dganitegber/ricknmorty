import { Card, Button } from "@mui/material";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import "./Card.css";

type CardProps = {
  image: string;
  name: string;
  species: string;
  id: number;
};

export const MyCard: React.FC<CardProps> = ({ image, name, species, id }) => {
  return (
    <Card raised className="cardMain">
      <img className="avatar" alt="" src={image} />
      <h2 className="name">{name}</h2>
      <h4 className="species">{species}</h4>
      <Button
        className="episodeListButton"
        variant="outlined"
        //   onClick={() => handleClick(id)}
        href={`/${id}/episodes`}
        startIcon={<MovieFilterIcon />}
      >
        Show Episodes
      </Button>
    </Card>
  );
};
