import React, { useContext } from "react";
import { useNavigate } from "react-router";

import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const { contacts } = store;

  const editContact = (contact) => {
    actions.setContactForUpdate(contact);
    navigate("/new-contact");
  };

  const handleDelete = (contactId) => {
    actions.deleteContact(contactId);
  };

  return (
    <div className="text-center mt-5">
      {contacts.map((contact) => {
        return (
          <span key={contact.id}>
            <img
              alt="img alt"
              height="50px"
              width="50px"
              style={{ borderRadius: "50%" }}
              src="https://www.charitycomms.org.uk/wp-content/uploads/2019/02/placeholder-image-square.jpg"
            />
            <section>
              <h5>{contact.full_name}</h5>
              <p>{contact.address}</p>
              <p>{contact.email}</p>
            </section>
            <section>
              <i
                onClick={() => editContact(contact)}
                className="far fa-edit"
              ></i>
              <i
                onClick={() => handleDelete(contact.id)}
                className="fas fa-trash-alt"
              ></i>
            </section>
          </span>
        );
      })}
    </div>
  );
};