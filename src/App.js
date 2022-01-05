import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from './content';
import Header from './header';
import Sidebar from './sidebar';
import React, {useState, useEffect, createContext} from 'react';

export const UserContext = React.createContext();

function App() {

  const [userName, setUserName] = useState('');
  const [avatarSrc, setAvatarSrc] = useState('');
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);
  const [draft, setDraft] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(()=> {
    if(userName.length>0){
        setTimeout(()=>{
            let currentValue = document.getElementById("nameInput").value;
            if(currentValue === userName){
                getAvatar();
                setSpinner(false)
            }
        },2000)
    } else {
        setAvatarSrc("");
        setSpinner(false);
        setDraft(false);
    }
  },[userName]);

  useEffect(()=>{
    if(localStorage.getItem("contacts") !== null){
      setContacts([...JSON.parse(localStorage.getItem("contacts"))])
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts));
  },[contacts])

  const getAvatar = async () => {
      let url1 = `https://avatars.dicebear.com/api/human/`;
      let url2 = `.svg`;
      const response = await fetch(url1 + userName + url2);
      if(!response.ok){
          setError(true);
          let message = `Sorry! An error has occured. ${response.status}`;
          throw new Error(message);
      } else {
          setAvatarSrc(response.url);
      }
  }

  const handleInputChange = (e) => {
    setError(false);
    setSpinner(true);
    setDraft(true);
    setUserName(e.target.value);
  }

  const createUser = async ()=>{
    setDraft(false);
    const response = await fetch('https://randomuser.me/api/?seed=' + userName);
    if(!response.ok){
      setError(true);
      let message = `Sorry! An error has occured. ${response.status}`;
      throw new Error(message);
    } else {
        const data = await response.json();
        let obj = {
          "fName" : data.results[0].name.first,
          "lName" : data.results[0].name.last,
          "email" : data.results[0].email,
          "avatarSrc" : avatarSrc,
          "userName" : userName
        }
        let arr = contacts;
        arr.unshift(obj);
        setContacts([...arr]);
        setUserName("");
        setAvatarSrc("");
    }
  }

  const deleteUser = (index) => {
    let arr = contacts;
    arr.splice(index,1);
    setContacts([...arr]);
  }

  return (
    <div className="App">
      <UserContext.Provider value={{contacts}}>
        <Header />
      </UserContext.Provider >
      <Sidebar 
        handleInputChange={(e)=>handleInputChange(e)}
        userName={userName}
        setUserName={setUserName}
        avatarSrc={avatarSrc}
        spinner={spinner}
        error={error}
        setError={setError}
        createUser={createUser}
        />
      <UserContext.Provider value={{userName, avatarSrc, draft, contacts}}>
        <Content deleteUser={index=>deleteUser(index)}/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
