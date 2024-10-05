import H1 from "../../components/H1/H1"

const mgmt: {function: string, name: string}[] = [{function: "Aanspreekpunt Persoonlijke Integriteit", name: "Wouter Van De Walle"}] 

const Clubapi = () => {
  return (
    <>
    <H1 title="Club-API" />
    <table>
      <tbody>
        {mgmt.map((person) => (
            <>
            <tr key={person.function}>
                <th>{person.function}</th>
            </tr>
            <tr key={person.name}>
                <td>{person.name}</td>
            </tr>
            </>
        ))}
        </tbody>
    </table>
    <p>Contacteer de club-API via <a href="mailto:api@fcvilvheverlee.be">api@fcvilvheverlee.be</a></p>
    </>
  )
}

export default Clubapi