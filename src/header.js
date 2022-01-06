import { UserContext } from "./App";
import { useContext, useEffect } from "react";

const Header = (props) => {

    const {contacts, scrollPosition} = useContext(UserContext);

    let height = scrollPosition < 160 ? "tall-header" : "short-header"

    return(<div id="header" className={height}>
        <h1>Contacts</h1>
        <h3>Generated Contacts: {contacts.length}</h3>
    </div>)
}

export default Header;