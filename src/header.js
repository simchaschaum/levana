import { UserContext } from "./App";
import { useContext } from "react";

const Header = () => {

    const {contacts} = useContext(UserContext);

    return(<div>
        <h1>Contacts</h1>
        <h3>Generated Contacts: {contacts.length}</h3>
    </div>)
}

export default Header;