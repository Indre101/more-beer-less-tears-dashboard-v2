export default function GetBeerLevelOnTap(beerName, taps) {
  const levelOnTap = taps
    .filter((tapBeer) => tapBeer.beer === beerName)
    .map((tapBeer) => tapBeer.level);

  const averageAmountOntapLeft =
    levelOnTap.reduce((a, b) => a + b, 0) / levelOnTap.length;

  return averageAmountOntapLeft;
}
