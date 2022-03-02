import { gql, useQuery } from "@apollo/client";
import { Dialog } from "@mui/material";
import { useEffect, useState } from "react";

const QUERY_FOR_EPISODES = gql`
  query episodes {
    episodes {
      results {
        name
        id
        air_date
        characters {
          id
          name
        }
      }
    }
  }
`;

type CharEpisodesProps = {
  open: boolean;
  id: number;
  onClose: () => void;
};

export const CharEpisodes: React.FC<CharEpisodesProps> = ({ onClose, id, open }) => {
  console.log("open", open);
  const { loading, error, data } = useQuery(QUERY_FOR_EPISODES);
  if (loading) return <p>Loading...</p>;
  console.log("data", data.episodes.results);
 
  if (error || !data || !data.episodes || !data.episodes.results.length)
    return <p>Error : </p>;

  //   useEffect(() => {
  //     // setCharacters(data);
  //     if (data) {
  //       console.log(data.characters.results);
  //     }
  //   }, [data, data.characters.results]);
  //   console.log("data", data);
  // console.log(result.id);
  return (
    <Dialog onClose={onClose} open={open}>
      {data.episodes.results &&
        data.episodes.results.map((result: any) => {
          return <div> {result.name} </div>;
        })}
    </Dialog>
  );
  //   console.log("epList", epList.result.air_date);

  //   return epList;
};
