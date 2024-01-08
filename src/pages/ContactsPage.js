import { useDispatch, useSelector } from "react-redux";
import { getContacts, selectLoading } from "../Redux/contactsSlice";
import { fetchContactsAction } from "../Redux/api";

import { useEffect } from "react";
import { Form } from "../components/Form/Form";
import { Filter } from "../components/Filter/Filter";
import { List } from "../components/List/List";
import Title from "../components/Title/Title";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  const contacts = useSelector(getContacts);

  return (
    <div>
      <Title title="Phonebook"></Title>
      <Form />

      <Title title="Contacts"></Title>
      <Filter />

      {isLoading ? (
        <p>loading...</p>
      ) : contacts.length > 0 ? (
        <List />
      ) : (
        <p>No contacts</p>
      )}
    </div>
  );
}
