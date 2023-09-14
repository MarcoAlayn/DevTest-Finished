import React, { useEffect, } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import {
  LoginPage,
  FavoritesPage,
  NotFoundPage,
  SearchPokemonsPage,
  UserProfilePage,
} from "./pages";
import { useSelector } from "react-redux";

function App() {
  const userIsLoged = useSelector((state) => state.isLoged);

  useEffect(() => {}, [userIsLoged]);

  return (
    <div className="App">
      {userIsLoged && <NavBar />}
      <Routes>
        <Route exact path="/" element={!userIsLoged ? <LoginPage /> : <FavoritesPage />} />
        <Route exact path="/search" element={<SearchPokemonsPage />} />
        <Route exact path="/profile" element={<UserProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
