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
        {draft ? <div className="half-opacity">
            {avatarSrc.length > 0 ?  <img src={avatarSrc} alt={"avatar"} /> : null}
            <p>{userName}</p>
        </div> : null}
        {contacts.map((item,index) => (
            <Contact 
                item={item}
                index={index}
                key={`contact-${index}`}
                handleDelete={()=>handleDelete(index)}
            />
        ))}
   
    </div>
    )
}

export default Content;