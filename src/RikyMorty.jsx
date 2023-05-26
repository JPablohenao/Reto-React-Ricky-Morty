import React, { useState, useEffect } from "react";
import { Box, CardMedia } from '@mui/material';
import { Man, Woman, Grade } from '@mui/icons-material';
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const RikyMorty = () => {
  const [next, setNext] = useState(undefined);
  const [RikyMortyData, setRikyMortyData] = useState([]);
  const [error, setError] = useState("");

  const searchRikyMorty = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character`);
      // console.log(response);
      setRikyMortyData(response.data.results);
      setNext(response.data.info.next)
      console.log("text", response.data.results);
      setError("");
    }
    catch (error) {
      setRikyMortyData(null);
      setError("NO EXISTE ");
    }
  };
  const searchMore = async () => {
    try {
      const response = await axios.get(next);
      setRikyMortyData([...RikyMortyData, ...response.data.results])
      setNext(response.data.info.next)
      setError("");
    }
    catch (error) {
      setRikyMortyData(null);
      setError("NO EXISTE ");
    }
  };


  useEffect(() => {
    searchRikyMorty();

  }, []);
  function obetenerNumeroEpisodio(episode) {
    const NumeroEpisodio = episode.split("/").pop();
    return NumeroEpisodio;
  }
  function obtenerIcono(gender) {
    if (gender === "Male") { return <Man />; }
    if (gender === "Female") { return <Woman />; }
    else { return <Grade />; }

  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor='#545B77'
      borderRadius='12px'
      boxShadow='2'
    >
      {RikyMortyData.map((personaje) => (

        <Grid>

          <Card sx={{ display: "flex", height: 200, width: 700 }}>
            <Box sx={{ minWidth: 350, display: "flex", flexDirection: "row" }} >
              <CardMedia
                component="img"
                sx={{ alignSelf: "center", height: 200, width: 200 }}
                image={personaje.image}
                alt="Paella dish"
              />
              <CardContent>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                  Name:{personaje.name}
                </Typography>
                <Typography variant="body2" color="text.secondary"  >
                  {personaje.gender}{""}
                  {obtenerIcono(personaje.gender)}
                  <br />
                </Typography>
                <Typography variant="body1" component="div" >
                  Species: {personaje.species}
                </Typography>
                <Typography
                  sx={{ width: 300, overflow: "hidden" }}
                  variant="body2"
                  color="text.secondary"  >
                  Episodios:{""}
                  {personaje.episode
                    .map((ep) => obetenerNumeroEpisodio(ep))
                    .join(",")
                  }
                </Typography>


              </CardContent>
            </Box>



          </Card>

        </Grid >))
      }
      <CardActions>
        {next &&
          <Button onClick={searchMore}> cargar mas</Button>
        }

      </CardActions>
    </Box>

  );
}

export default RikyMorty;
