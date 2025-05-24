import css from "./App.module.css";
import { useEffect, useState } from "react";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import PlaceHolder from "../PlaceHolder/PlaceHolder";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";

const contactKey = "Contacts List";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem(contactKey));
    if (savedContacts !== null && savedContacts.length !== 0) {
      return savedContacts;
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });
  const [filter, setFilter] = useState("");
  useEffect(() => {
    window.localStorage.setItem(contactKey, JSON.stringify(contacts));
  }, [contacts]);
  const addContact = (newContact) => {
    newContact = { id: nanoid(), ...newContact };
    setContacts((oldList) => [...oldList, newContact]);
  };
  const delContact = (delContactId) =>
    setContacts((oldList) =>
      oldList.filter((contact) => contact.id !== delContactId)
    );
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm setContact={addContact} />
      <SearchBox setFilter={setFilter} />
      {visibleContacts.length !== 0 && contacts.length > 0 ? (
        <ContactList contacts={visibleContacts} onDelete={delContact} />
      ) : (
        <PlaceHolder visible={visibleContacts} all={contacts} />
      )}
    </>
  );
}

export default App;
