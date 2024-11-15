import { useEffect, useState } from "react"
import H1 from "../../components/H1/H1"
import './Admin.scss'
import * as Dialog from '@radix-ui/react-dialog';
import DeleteUser from "./deleteUser/DeleteUser";
import { Player, User } from "../../../data/constants/Types";
import Toggle from "./toggle/Toggle";
import useAxiosPrivate from "../../../api/useAxiosPrivate";

const Admin = () => {
    const emptyPlayer: Player = {username: "", password: "", email: "", firstName: "", lastName:""}
    const [users, setUsers] = useState<User[]>([])
    const [dialog, setDialog] = useState(false);
    const [newPlayer, setNewPlayer] = useState<Player>(emptyPlayer)
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axiosPrivate.get<User[]>('/users');
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users", error);
            } 
        }
        fetchUsers();
    }, [])

    const handleActivateToggle = async (id: string): Promise<void> => {
        await axiosPrivate.post('./users/activate', { id })
    }

    const handleAdminToggle = async (id: string): Promise<void> => {
        await axiosPrivate.post('./users/admin', { id })
    }

    const handleAddPlayer = (e: any) => {
        e.preventDefault()
        axiosPrivate.post('/users', newPlayer)
        .then((res) => {

            setUsers([...users, res.data])
            setNewPlayer(emptyPlayer)
            setDialog(false)
        })
        .catch((err) => {
            console.error("Error during adding player: ", err)
        })
    }

  return (
    <>
    <H1 title="Admin" />
    <Dialog.Root open={dialog}>
    <Dialog.Trigger asChild>
      <button id="addPlayer" onClick={() => setDialog(true)}>Nieuwe speler toevoegen</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent" >
        <Dialog.Title className="DialogTitle" style={{fontWeight: 'bold', color: '#32329f'}}>Nieuwe speler</Dialog.Title>
        <form onSubmit={handleAddPlayer}>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Gebruikersnaam: 
          </label>
          <input className="Input" id="username" value={newPlayer.username} onChange={(e) => setNewPlayer({...newPlayer, username: e.target.value})} />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="password">
            Wachtwoord: 
          </label>
          <input className="Input" id="password" type='password' value={newPlayer.password} onChange={(e) => setNewPlayer({...newPlayer, password: e.target.value})} />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="email">
            Email: 
          </label>
          <input className="Input" id="email" type='email' value={newPlayer.email} onChange={(e) => setNewPlayer({...newPlayer, email: e.target.value})} />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="firstName">
            Voornaam: 
          </label>
          <input className="Input" id="firstName" type='firstName' value={newPlayer.firstName} onChange={(e) => setNewPlayer({...newPlayer, firstName: e.target.value})} />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="lastName">
            Achternaam: 
          </label>
          <input className="Input" id="lastName" type='lastName' value={newPlayer.lastName} onChange={(e) => setNewPlayer({...newPlayer, lastName: e.target.value})} />
        </fieldset>
        <div style={{ display: 'flex', marginTop: "1.5em", justifyContent: 'flex-end'}}>
            <button className="Button login" type='submit'>Toevoegen</button>
        </div>
        </form>
        <Dialog.Close asChild>
          <button className="IconButton" onClick={() => setDialog(false)} aria-label="Close">
            <p>x</p>
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
    <table id="userTable">
        <thead>
            <tr>
                <th>Naam</th>
                <th>Email</th>
                <th>Username</th>
                <th id="action">Actief</th>
                <th id="action">Admin</th>
                <th id="action">Verwijderen</th>
            </tr>
        </thead>
        <tbody>
            {users.map((person) => (
                <tr key={person.id}>
                    <td>{person.firstName + " " + person.lastName}</td>
                    <td>{person.email}</td>
                    <td>{person.username}</td>
                    <td id="action"><Toggle defaultActive={!!person.active} elementId={"activeToggle"} handler={handleActivateToggle} personId={person.id}/></td>
                    <td id="action"><Toggle defaultActive={!!person.isAdmin} elementId={"adminToggle"} handler={handleAdminToggle} personId={person.id}/></td>
                    <td id="action"><DeleteUser id={person.id} setUsers={setUsers}/></td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default Admin