import React from "react";

const ReadOnlyRow = ({ contact, deleteContact }) => {
    return (
        <tr>
          <td>
            {contact.id}<button onClick={deleteContact}>delete</button>
          </td>
          <td>{contact.fullName}</td>
          <td>{contact.address}</td>
          <td>{contact.phoneNumber}</td>
          <td>{contact.email}</td>
        </tr>
    );
};

export default ReadOnlyRow;
