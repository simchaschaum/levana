
const Contact = ({item, index, handleDelete}) => {

    return(
            <div key={`contact ${index}`} className="contact" onClick={handleDelete}>
                <img src={item.avatarSrc} alt={`${item.fName} ${item.lName} avatar`} />
                <p><em>Username:</em> <strong>{item.userName}</strong></p>
                <p><em>Name:</em> <strong> {item.fName} {item.lName}</strong></p>
                <p id="email"><em>Email:</em><strong> {item.email}</strong></p>
            </div>
    )
}

export default Contact;
