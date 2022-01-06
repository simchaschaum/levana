import { useContext } from "react";
import { UserContext } from "./App";
import Contact from './contact';

const Content = ({deleteUser}) => {

    const {userName, avatarSrc, draft, contacts} = useContext(UserContext);

    const handleDelete = (index) => {
        if(window.confirm(`Heads up!\nAre you sure you want to delete the info for ${contacts[index].userName}?`)){
           deleteUser(index)
        }
    }

    return(
    <div id="content">
        <h2><em>Current Contacts:</em></h2>
        {draft ? <div id="newContact" className="half-opacity">
            {avatarSrc.length > 0 ?  <img src={avatarSrc} alt={"avatar"} /> : null}
            {avatarSrc.length > 0 ?   null :  <h3><em>Typing new contact:</em></h3>}
            <p><em>Username:</em> <strong>{userName}</strong></p>
        </div> : null}
        {contacts.length === 0 ? <h4><em>No contacts yet.</em></h4> : null}
        <div id="contentContainer">
            {contacts.map((item,index) => (
                <Contact 
                    item={item}
                    index={index}
                    key={`contact-${index}`}
                    handleDelete={()=>handleDelete(index)}
                />
            ))}
        </div>
    </div>
    )
}

export default Content;