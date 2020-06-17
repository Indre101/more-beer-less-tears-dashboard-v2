import React, { useEffect, useState } from "react";
import "./BeerDisplay.scss";
import BeerCard from "./BeerCard";
import GetBeerTypes from "../../modules/GetBeerTypes";
import GetBeerLevelOnTap from "../../modules/GetBeerLevelOnTap";
import UniqueBeerNamesOnTap from "../../modules/UniqueBeerNamesOnTap";
import Wrapper from "../Wrapper.js/Wrapper";

export default function BeerDisplay(props) {
  const [beersList, setbeersList] = useState([]);
  const [beerTypes, setbeerTypes] = useState([]);
  const maxBeers = 4;

  useEffect(() => {
    GetBeerTypes(setbeerTypes);
  }, []);

  useEffect(() => {
    //gets unique names of beer
    const beerNames = UniqueBeerNamesOnTap(props.taps);
    let i = 0;
    const beers = beerNames.map((beerName) => {
      const beerType = beerTypes.find((type) => {
        return type.name === beerName;
      });

      //get the level on tap for each beer average
      const levelOnTap = GetBeerLevelOnTap(beerName, props.taps);

      return {
        id: i++,
        name: beerName,
        levelOntap: levelOnTap,
        beerType: (beerType && beerType.category) || "IPA",
      };
    });

    setbeersList(beers.slice(0, maxBeers));
  }, [beerTypes, props.taps]);

  const beerCards = beersList.map((beer) => (
    <BeerCard key={beer.id} beer={beer} />
  ));
  return (
    <Wrapper>
      <h2>ON THE MENU TONIGHT</h2>
      <h3>Beer left on the tap</h3>
      <div className="wrapperBeersStatus">{beerCards}</div>
    </Wrapper>
  );
}
