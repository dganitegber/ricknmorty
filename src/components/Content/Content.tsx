import { gql, useQuery } from "@apollo/client";
import { MyCard } from "../Card";
// import { MyCard } from "../Card";

import "./Content.css";

// import "./PickleRick.css";
type ContentProps = {};
const QUERY_FOR_CHARS = gql`
  query {
    characters {
      results {
        name
        image
        species
        id
        episode {
          name
          id
        }
      }
    }
  }
`;

export const Content: React.FC<ContentProps> = () => {
  const { loading, error, data } = useQuery(QUERY_FOR_CHARS);
  // const [id, setId] = useState(0);
  // const [episodes, setEpisodes] = useState(undefined);
  // const handleClick = (id: number): void => {
  //   setId(id);
  //   setEpisodes(data.characters.results[id]);
  //   console.log("episodes", episodes);
  // };
  if (loading) return <p>Loading...</p>;

  if (error || !data || !data.characters || !data.characters.results.length)
    return <p>Error : </p>;
  const results = data.characters.results;
  data.characters.results.map((result: any) => {
    return result.episode;
  });
  // const episodes = data.characters.results

  const myCard = results.map((result: any) => {
    const cardOpen: boolean = false;
    return (
      <MyCard
        key={result.id}
        name={result.name}
        id={result.id}
        image={result.image}
        species={result.species}
        cardOpen={cardOpen}
        episodes={result.episode}
      ></MyCard>
    );
  });
  return myCard;
};
