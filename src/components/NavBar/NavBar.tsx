import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { makeStyles, Stack } from "@mui/material";
import Button from "@mui/material/Button";

// const useStyles = makeStyles(() => ({
//     root: {
//       display: 'flex',
//       alignItems: 'center',
//     },
//     button: {
//       padding: 0,
//     },
//     NavBar: {
//         backgroundColor: 'red',
//     }
//   }));



export const NavBar: React.FC = () => {
  // const classes = useStyles()
  return (
    <div className="NavBar">
      hi
      <div className="buttons">
        <Stack direction="row" justifyContent="center" spacing={5}>
          <Button variant="contained"></Button>
          <Button variant="contained" disabled></Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
        </Stack>
      </div>
    </div>
  );
};
