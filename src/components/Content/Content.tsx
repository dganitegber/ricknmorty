import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { MyCard } from "../Card";
import "./Content.css";

// import "./PickleRick.css";
type ContentProps = {};
const QUERY_FOR_CHARS = gql`
  query Chars {
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
  const handleClick = (id: number): void => {
    // setId(id)
    console.log("last", id);
  };
  if (loading) return <p>Loading...</p>;

  if (
    error ||
    !data ||
    !data.characters
    // !data.characters.results.length > 0
  )
    return <p>Error :(</p>;

  const {
    characters: { results },
  } = data;
  // const { name, image, species } = results;
  console.log("results", results);
  const myCard = results.map((result: any) => {
    console.log(result.name);
    return (
      <MyCard
        key={result.id}
        name={result.name}
        id={result.id}
        image={result.image}
        species={result.species}
      >
        hi
      </MyCard>
    );
  });
  return <div className="content"> {myCard} </div>;
};
