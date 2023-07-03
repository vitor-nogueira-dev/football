import { AgePlayer, CardContainer, Img, NamePlayer, Nationality } from "./styles";

const CardPlayer = (data) => {
  return (
    <CardContainer>
      <NamePlayer>{data.player.name}</NamePlayer>
      <AgePlayer>Age: {data.player.age}</AgePlayer>
      <Nationality>Nationality: {data.player.nationality}</Nationality>
      <Img src={data.player.photo} alt={data.player.name} />
    </CardContainer>
  )
}

export default CardPlayer;