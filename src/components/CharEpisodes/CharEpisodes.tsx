// import { useQuery } from "@apollo/client";
import { Dialog, DialogTitle, Paper } from "@mui/material";
import "./CharEpisodes.css";

type CharEpisodesProps = {
  open: boolean;
  id: number;
  onClose: () => void;
  episodes: string[];
};

export const CharEpisodes: React.FC<CharEpisodesProps> = ({
  onClose,
  id,
  open,
  episodes,
}) => {
  console.log("episodes", episodes);
  // const { loading, error, data } = useQuery(QUERY_FOR_EPISODES);
  // if (loading) return <p>Loading...</p>;
  // console.log("data", data.episodes.results);

  // if (error || !data || !data.episodes || !data.episodes.results.length)
  //   return <p>Error : </p>;

  //   useEffect(() => {
  //     // setCharacters(data);
  //     if (data) {
  //       console.log(data.characters.results);
  //     }
  //   }, [data, data.characters.results]);
  //   console.log("data", data);
  // console.log(result.id);
  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: "white",
          boxShadow: "none",
          padding: "20px",
        },
      }}
      fullScreen={false}
      sx={{ padding: "50px", backgroundColor: "transparent" }}
      onClose={onClose}
      open={open}
    >
      <DialogTitle> Episode List </DialogTitle>
      <Paper elevation={0}>
        {episodes &&
          episodes.map((episode: any) => {
            return <div key={episode.id}> {episode.name} </div>;
          })}
      </Paper>
    </Dialog>
  );
  //   console.log("epList", epList.result.air_date);

  //   return epList;
};
