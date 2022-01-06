import  Spinner  from "react-bootstrap/Spinner";

const Sidebar = (props) => {

    return(<div id="sideBar" >
        <input type="text" id="nameInput" placeholder="Type new username" value={props.userName} onChange={e=>props.handleInputChange(e)}/>
        <div id="avatar">
            {props.spinner ? 
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            : null
            }
            {props.error ? <p id="error">{props.errorMsg}</p> : null}
            {props.avatarSrc.length > 0 ? <img id="avatar" src={props.avatarSrc} alt={"avatar"}/> : null}
        </div>
        {props.avatarSrc.length > 0 ? <button id="createUser" onClick={props.createUser }>Create User</button> : null}
        
    </div>)
}

export default Sidebar;