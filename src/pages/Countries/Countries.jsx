import { useSelector } from "react-redux";
import { CardCountry } from "../../components/Countries/CardCountry";
import Container from "./styles";
import Title from "../../components/Title/Title";

const Countries = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <>
    <Title title="Selecione um País para visualizar as ligas" fontSize="1.5rem"/>
      <Container>
        {countries?.map((country) => (
          <CardCountry
            key={country.name}
            {...country} />
        ))}
      </Container>
    </>
  )
}

export default Countries;