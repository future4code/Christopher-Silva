const planets = [
    "Mercúrio",
    "Vênus",
    "Terra",
    "Marte",
    "Júpiter",
    "Saturno",
    "Urano",
    "Netuno"
]

const PlanetsList = planets.map((planet, index) => {
    return <option key={index} value={planet}>{planet}</option>
  })

  export default PlanetsList;