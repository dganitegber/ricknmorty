// import React, { useState } from "react";
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
      }
    }
  }
`;

export const Content: React.FC<ContentProps> = () => {
  const { loading, error, data } = useQuery(QUERY_FOR_CHARS);
  //   const [id, setId] = useState(undefined);
  //   const handleClick = (id: number): void => {
  //     // setId(id)
  //     console.log("last", id);
  //   };
  if (loading) return <p>Loading...</p>;

  if (error || !data || !data.characters || !data.characters.results.length)
    return <p>Error : </p>;
  console.log(data.characters.results);
  const results = data.characters.results;
  console.log("results", results);
  // const { name, id, image, species } = results;
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
      ></MyCard>
    );
  });
  return myCard;
};
