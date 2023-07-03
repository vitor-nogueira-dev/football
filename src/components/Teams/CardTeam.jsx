import { Link } from "react-router-dom"
import { Button, LogoCell, LogoImage, Table, TableCell, TableHeader, TableRow } from "../../styles/styles.global"

const CardTeams = (data) => {
  return (
    <Link to={`/players/${data.team.id}`}>
      <Button>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>Nome</TableHeader>
              <TableHeader>País</TableHeader>
              {data.team.founded && <TableHeader>Fundação</TableHeader>}
              <TableHeader>Logo</TableHeader>
            </TableRow>
            <TableRow>
              <TableCell>{data.team.name}</TableCell>
              <TableCell>{data.team.country}</TableCell>
              {data.team.founded && <TableCell>{data.team.founded}</TableCell>}
              <LogoCell>
                <LogoImage src={data.team.logo} alt={data.team.name} />
              </LogoCell>
            </TableRow>
          </tbody>
        </Table>
      </Button>
    </Link>
  )
}

export default CardTeams;
