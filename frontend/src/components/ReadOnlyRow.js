import React from "react";

const ReadOnlyRow = ({ contact }) => {
    return (
        <tr>
          <td>
            {contact.id}
          </td>
          <td>{contact.fullName}</td>
          <td>{contact.address}</td>
          <td>{contact.phoneNumber}</td>
          <td>{contact.email}</td>
        </tr>
    );
};

export default ReadOnlyRow;
