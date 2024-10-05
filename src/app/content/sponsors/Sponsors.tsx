import { sponsors } from "../../../data/constants/Sponsors"
import H1 from "../../components/H1/H1"
import SponsorCard from "./SponsorCard"
import './Sponsors.css'



const Sponsors = () => {
  return (
    <>
        <H1 title="Sponsors" />
        <div className="sponsorList">
        {sponsors.map((sponsor) => (
            <SponsorCard sponsor={sponsor} key={sponsor.name}/>
        ))}
        </div>
    </>
  )
}

export default Sponsors