import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import { useAuth } from '../context/AuthContext';

const Tasks = () => {
  const { user } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axiosInstance.get('/api/contacts', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setContacts(response.data);
      } catch (error) {
        alert('Failed to fetch contacts.');
      }
    };

    fetchContacts();
  }, [user]);

  return (
    <div className="container mx-auto p-6">
      <ContactForm
        contacts={contacts}
        setContacts={setContacts}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />
      <ContactList 
        contacts={contacts} 
        setContacts={setContacts} 
        setEditingContact={setEditingContact} 
      />
    </div>
  );
};

export default Tasks;
