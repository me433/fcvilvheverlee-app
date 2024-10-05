import H1 from "../../components/H1/H1"
import{ Link } from "react-router-dom"


const Missing = () => {
  return (
    <>
    <H1 title="Missing" />
    <p>Deze pagina bestaat niet.</p>
    <p>Ga terug naar de <Link to={"/"}>Homepagina</Link></p>
    </>
  )
}

export default Missing