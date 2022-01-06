import { UserContext } from "./App";
import { useContext} from "react";

const Header = (props) => {

    const {contacts, scrollPosition} = useContext(UserContext);

    let short = scrollPosition > 100 ? "short": "tall";

    return(<div id="header" className={short}>
        <h1>Contacts</h1>
        <h3>Generated Contacts: {contacts.length}</h3>
    </div>)
}

export default Header;