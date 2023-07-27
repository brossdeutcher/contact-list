
const ContactRow = (contact) => {
  return (
    <>
      <tr>
        <td>{contact.contact.name}</td>
        <td>{contact.contact.phone}</td>
        <td>{contact.contact.email}</td>
      </tr>
    </>
  )
}

export default ContactRow;