import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <Container
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <i>Copyright</i>

      <a href="https://www.pexels.com/fr-fr/photo/homme-souriant-avec-un-turban-orange-a-l-exterieur-29611426/">
        Photo de THEMRSINGH
      </a>
      <a href="https://www.pexels.com/fr-fr/photo/29618968/">
        Photo de Vika Glitter
      </a>
      <a href="https://www.pexels.com/fr-fr/photo/photo-d-un-homme-portant-une-veste-en-cuir-noire-977796/">
        Photo de Simon Robben
      </a>
      <a href="https://www.pexels.com/fr-fr/photo/femme-souriante-a-la-verticale-debout-contre-le-mur-jaune-1536619/">
        Photo de juan mendez
      </a>
      <a href="https://www.pexels.com/fr-fr/photo/paire-de-baskets-a-lacets-bleues-19090/">
        Photo de Web Donut
      </a>
      <a href="https://www.pexels.com/fr-fr/photo/photo-de-nike-chaussures-1598505/">
        Photo de Mnz
      </a>
    </Container>
  );
}
