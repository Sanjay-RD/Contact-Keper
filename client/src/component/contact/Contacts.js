import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItems from "./ContactItems";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  return (
    <React.Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItems key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItems key={contact.id} contact={contact} />
          ))}
    </React.Fragment>
  );
};

export default Contacts;
