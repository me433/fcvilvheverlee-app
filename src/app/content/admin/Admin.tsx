import { users } from "../../../data/constants/Users"
import H1 from "../../components/H1/H1"


const Admin = () => {

    const handleDelete = () => {
        console.log('deleted')
    }

    const handleInactivate = () => {
        console.log('inactivated')
    }

    const handleMakeAdmin = () => {
        console.log('made admin')
    }

  return (
    <>
    <H1 title="Admin" />
    <table>
        <tr>
            <th>Voornaam</th>
            <th>Achternaam</th>
            <th>Username</th>
            <th>Active</th>
            <th>Admin</th>
            <th>Acties</th>
        </tr>
        {users.map((person) => (
            <tr>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.username}</td>
                <td>{person.active? "Ja": "Nee"}</td>
                <td>{person.isAdmin? "Ja": "Nee"}</td>
                <td><button onClick={handleMakeAdmin}>Admin maken</button><button onClick={handleInactivate}>Inactief zetten</button><button onClick={handleDelete}>Verwijderen</button></td>
            </tr>
        ))}
    </table>
    </>
  )
}

export default Admin