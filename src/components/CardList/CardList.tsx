import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useEffect, useState } from "react";
import { MyCard } from "../Card/Card";

export type CardListProp = {
  image?: string;
  name?: string;
  id?: number;
  species?: string;
};
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
export const CardList: React.FC<CardListProp> = ({
  image,
  name,
  id,
  species,
}) => {
  const { error, data } = useQuery(QUERY_FOR_CHARS);
  const [characters, setCharacters] = useState();
  //   console.log(error);
  //   const {
  //     characters: { results },
  //   } = data;

  useEffect(() => {
    setCharacters(data);
    if (data) {
      console.log(data.characters.results);
    }
  }, [data, data.characters.results]);
  if (characters) {
    console.log(characters);
  }
//   console.log(data);
  //   console.log("results", results);
  //   const myCard = results.map(
  //     (
  //       image: string,
  //       name: string,
  //       id: number,
  //       species: string
  //     ): React.ReactNode => {
  //       return (
  //         // <Card key={id} id={id} image={image} name={name} species={species}>
  //         //   hi
  //         // </Card>
  //         <span>hi</span>
  //       );
  //     }
  //   );
  return (
    <span>hi</span>
    // characters &&
    // characters.results &&
    // characters.results.result.map((character) => {
    //   return <span>{character.id}</span>;
    // })
  );
  //   return  myCard ;
};
