import H1 from "../../components/H1/H1"
import './Management.css'

const mgmt: {function: string, name: string}[] = [{function: "Voorzitter", name: "Michiel Vanpachtenbeke"}, {function: "Ondervoorzitter", name: "Wouter Van De Walle"}] 

const Management = () => {
  return (
    <>
    <H1 title="Bestuur" />
    <table>
      <tbody>
        {mgmt.map((person) => (
            <tr key={person.function}>
                <th>{person.function}</th>
                <td>{person.name}</td>
            </tr>
        ))}
        </tbody>
    </table>
    <p>Contacteer ons via <a href="mailto:vilv.bestuur@fcvilvheverlee.be">vilv.bestuur@fcvilvheverlee.be</a></p>
    </>
  )
}

export default Management