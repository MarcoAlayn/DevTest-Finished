import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemos } from "../redux/actions/PokemonActions"; 
import { PokemonCard } from "../components";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

function SearchPokemonsPage() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const pokemonsPerPage = 10;

  useEffect(() => {
    dispatch(getAllPokemos());
  },[dispatch]);

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <Container>
      <Typography variant="h4">Search Pokemons</Typography>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
      />
      <Grid container spacing={2}>
        {pokemons.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
            <PokemonCard id={pokemon.id} name={pokemon.name} imageBack={pokemon.imageBack} imageFront={pokemon.imageFront} />
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

export default SearchPokemonsPage;
