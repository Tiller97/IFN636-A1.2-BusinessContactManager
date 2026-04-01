import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';

const ContactList = ({ contacts, setContacts, setEditingContact }) => {
  const { user } = useAuth();

  const handleDelete = async (contactId) => {
    try {
      await axiosInstance.delete(`/api/contacts/${contactId}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setContacts(contacts.filter((contact) => contact._id !== contactId));
    } catch (error) {
      alert('Failed to delete contact.');
    }
  };

  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact._id} className="bg-gray-100 p-4 mb-4 rounded shadow">
          <h2 className="font-bold">{contact.title}</h2>
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <p><strong>Company:</strong> {contact.company}</p>
          <p><strong>Position:</strong> {contact.position}</p>
        
          <div className="mt-2">
            <button
              onClick={() => setEditingContact(contact)}
              className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(contact._id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
