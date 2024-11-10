import * as Switch from "@radix-ui/react-switch";
import "./Toggle.scss";
import { useState } from "react";

const Toggle: React.FC<{ defaultActive: boolean, elementId: string, handler: (id: string) => Promise<void>, personId: string }> = ({ defaultActive, elementId, handler, personId }) => {
    const [active, setActive] = useState(defaultActive);

    const handleChange = () => {
        handler(personId)
        .then(() => {
            setActive(prev => !prev);
        })
        .catch((err) => {
            console.error(err);
            window.alert("Error: change did not happen")
        })
        
    }

    return (
        <form>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <label
                    className="Label"
                    htmlFor={elementId}
                    style={{ width: 0 }}
                >
                </label>
                <Switch.Root className="SwitchRoot" id={elementId} checked={active} onCheckedChange={handleChange}>
                    <Switch.Thumb className="SwitchThumb" />
                </Switch.Root>
            </div>
	    </form>
)};

export default Toggle;
