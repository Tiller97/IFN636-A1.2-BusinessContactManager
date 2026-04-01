import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';

const ContactForm = ({ contacts, setContacts, editingContact, setEditingContact }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', position: '', });

  useEffect(() => {
    if (editingContact) {
      setFormData({
        name: editingContact.name || '',
        email: editingContact.email || '',
        phone: editingContact.phone || '',
        company: editingContact.company || '',
        position: editingContact.position || '',
      });
    } else {
      setFormData({ name: '', email: '', phone: '', company: '', position: '', });
    }
  }, [editingContact]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingContact) {
        const response = await axiosInstance.put(`/api/contacts/${editingContact._id}`, formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setContacts(contacts.map((contact) => (contact._id === response.data._id ? response.data : contact)));
      } else {
        const response = await axiosInstance.post('/api/contacts', formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setContacts([...contacts, response.data]);
      }
      setEditingContact(null);
      setFormData({ name: '', email: '', phone: '', company: '', position: '', });
    } catch (error) {
      alert('Failed to save contact.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded mb-6">
      <h1 className="text-2xl font-bold mb-4">{editingContact ? 'Edit Contact' : 'Add Contact'}</h1>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
       <input
        type="text"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder='Company'
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder='Position'
        value={formData.position}
        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        {editingContact ? 'Update Contact' : 'Create Contact'}
      </button>
    </form>
  );
};

export default ContactForm;
