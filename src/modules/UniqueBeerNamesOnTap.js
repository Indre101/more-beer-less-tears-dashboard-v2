export default function UniqueBeerNamesOnTap(taps) {
  const uniqueBeerNamesOnTap = [
    ...new Set(taps.map((beerName) => beerName.beer)),
  ];
  return uniqueBeerNamesOnTap;
}
