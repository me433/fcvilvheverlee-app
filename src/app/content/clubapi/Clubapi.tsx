import H1 from "../../components/H1/H1"
import useAuth from "../../hooks/useAuth"

const mgmt: {function: string, name: string}[] = [{function: "Aanspreekpunt Persoonlijke Integriteit", name: "Wouter Van De Walle"}] 

const Clubapi = () => {
  const { auth } = useAuth();


  return (
    <>
    <H1 title="Club-API" />
    <button onClick={() => {console.log(auth)}}>Print auth</button>
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