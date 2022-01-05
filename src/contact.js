
const Contact = ({item, index, handleDelete}) => {

    return(
            <div key={`contact ${index}`} className="contact" onClick={handleDelete}>
                <img src={item.avatarSrc} alt={`${item.fName} ${item.lName} avatar`} />
                <p>{item.userName}</p>
                <p>{item.fName} {item.lName}</p>
                <p>{item.email}</p>
            </div>
    )
}

export default Contact;
