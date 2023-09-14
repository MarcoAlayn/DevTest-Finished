import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getPokemons } from "../redux/actions/PokemonActions"; 
import { PokemonCard } from "../components";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { getAllPokemos } from "../redux/actions/PokemonActions";

function FavoritesPage() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 10;

  useEffect(() => {
    dispatch(getAllPokemos())
  }, [currentPage, dispatch]);

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Typography variant="h4">Favorites Page</Typography>
      <Grid container spacing={2}>
        {pokemons.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
           <PokemonCard name={pokemon.name} imageBack={pokemon.imageBack} imageFront={pokemon.imageFront} />
          </Grid>
        ))}
      </Grid>
      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(pokemons.length / pokemonsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
        />
      </Box>
    </Container>
  );
}

export default FavoritesPage;
