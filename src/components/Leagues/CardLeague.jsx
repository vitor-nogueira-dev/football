import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ACTION_SET_SEASON } from "../../store/actions";
import { Button, LogoCell, LogoImage, Table, TableCell, TableHeader, TableRow } from "../../styles/styles.global";

const CardLeagues = (data) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = data.league.id;

  function handleClick() {
    let input = prompt("Digite a temporada que deseja visualizar:");
    while (input !== null && (input.length !== 4 || !/^\d+$/.test(input))) {
      alert("Entrada inválida. Por favor, digite um número de quatro dígitos.");
      input = prompt("Digite um número de quatro dígitos:");
    }
    if (input === null) return;
    dispatch(ACTION_SET_SEASON(+input));
    history.push(`/teams/${id}`);
  }

  return (
    <Button onClick={handleClick}>
      <Table>
        <tbody>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>Logo</TableHeader>
          </TableRow>
          <TableRow>
            <TableCell>{data.league.name}</TableCell>
            <TableCell>{data.league.type}</TableCell>
            <LogoCell>
              <LogoImage src={data.league.logo} alt={data.league.name} />
            </LogoCell>
          </TableRow>
        </tbody>
      </Table>
    </Button>
  );
};

export default CardLeagues;
