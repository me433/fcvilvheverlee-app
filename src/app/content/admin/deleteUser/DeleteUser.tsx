import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { axiosPrivate } from "../../../../api/axios";
import { User } from "../../../../data/constants/Types";
import './DeleteUser.scss'
import { useState } from "react";


const DeleteUser: React.FC<{setUsers: React.Dispatch<React.SetStateAction<User[]>>, id: string}> = ({ id, setUsers }) => {
    const [dialog, setDialog] = useState(false);

    const handleDelete = (id: string) => {
        axiosPrivate.delete('./users',
            {
                data: {id: id}
            }
        )
        .then (() => {
            setUsers((prev: User[]) => prev.filter(user => user.id !== id));
            setDialog(false);
        })
        .catch ((err) => {
            console.error(err);
            setDialog(false);
            window.alert("You cannot delete admins.")
        })
    }

    return(
	<AlertDialog.Root open={dialog}>
		<AlertDialog.Trigger asChild>
			<button className="Button delete" onClick={() => setDialog(true)}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button>
		</AlertDialog.Trigger>
		<AlertDialog.Portal>
			<AlertDialog.Overlay className="AlertDialogOverlay" />
			<AlertDialog.Content className="AlertDialogContent">
				<AlertDialog.Title className="AlertDialogTitle">
					Ben je zeker?
				</AlertDialog.Title>
				<AlertDialog.Description className="AlertDialogDescription">
                    Dit kan niet ongedaan gemaakt worden. Deze persoon zal permanent verwijderd zijn.
				</AlertDialog.Description>
				<div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
					<AlertDialog.Cancel asChild onClick={() => setDialog(false)}>
						<button className="Button back">Terug</button>
					</AlertDialog.Cancel>
					<AlertDialog.Action asChild>
						<button className="Button confirm" onClick={() => handleDelete(id)}>Ja, verwijder!</button>
					</AlertDialog.Action>
				</div>
			</AlertDialog.Content>
		</AlertDialog.Portal>
	</AlertDialog.Root>
)};

export default DeleteUser;
