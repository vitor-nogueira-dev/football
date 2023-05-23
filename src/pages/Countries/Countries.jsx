import { useSelector } from "react-redux";
import { CardCountry } from "../../components/Countries/CardCountry";
import Container from "./styles";

export const Countries = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <>
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