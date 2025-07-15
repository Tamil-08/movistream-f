import React from 'react';
import './admin.css';
import { useState, useCallback, useEffect } from "react";
import { Carousel, Form, Button, Container, Row, Col } from "react-bootstrap";

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);

  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [num, setNum] = useState("")
  const [message, setMessage] = useState("")

  const [ uid, setUid]  = useState(null)

  const navigate = useNavigate()

  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const [editingIndex, setEditingIndex] = useState(null);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (editingIndex !== null) {
  //     const updated = [...inquiries];
  //     updated[editingIndex] = formData;
  //     setInquiries(updated);
  //     setEditingIndex(null);
  //   } else {
  //     setInquiries([...inquiries, formData]);
  //   }
  //   setFormData({ name: '', email: '', message: '' });
  // };

  // const handleEdit = (index) => {
  //   setFormData(inquiries[index]);
  //   setEditingIndex(index);
  // };

  // const handleDelete = (index) => {
  //   const filtered = inquiries.filter((_, i) => i !== index);
  //   setInquiries(filtered);
  // };

  useEffect(() => {
    const fetch = async () => {
      try {
        await axios.get("http://localhost:9091/get")
          .then((res) => setInquiries(res.data))

        await axios.get("http://localhost:9091/getal")
          .then((res) => setUsers(res.data))
      } catch (err) {
        console.log(err)
      } finally {
        setReload(false)
      }
    }

    fetch()
  }, [reload])

  const handleDelete = async (type, userId, itemId) => {
    if (type) {
      try {
        await axios.delete(`http://localhost:9091/deleteid/${userId}`)
          .then(() => {
            alert("User Deleted.")
            setReload(true)
          })
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        await axios.delete(`http://localhost:9091/${itemId}`)
          .then(() => {
            alert("Item Deleted.")
            setReload(true)
          })
      } catch (err) {
        console.log(err)
      }
    }
  }

  const handleEdit = (item, id) => {
    setIsEdit(true);
    setMail(item.mail)
    setName(item.name)
    setNum(item.num)
    setMessage(item.message)
    setUid(id)
  }

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:9091/${uid}`, {
        name: name,
        num: num,
        mail: mail,
        message: message,
      })
        .then(() => {setReload(true)
          navigate("/AdminDashboard")
        })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>

      <h3 className='custom-admin-title'>Admin Portal - Movistream</h3>

      {isEdit ? <div className="py-5 bg-dark text-white Inquiry1">
        <Container>
          <Row className="justify-content-center Inquiry">
            <Col xs={12} md={8} lg={6}>
              <h2 className="text-center mb-3">Need Anything? Ask Us</h2>
              <hr />
              <h4 className="text-center mb-4">Ask Your Queries</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="tel"
                    name="num"
                    maxLength={10}
                    placeholder="Enter phone number"
                    value={num}
                    onChange={(e) => setNum(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="mail"
                    placeholder="Enter email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={3}
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="success" type='submit'>
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div> : 
      <div className="admin-page-wrapper">

        <div className="admin-panel-glass">
          <h2 className="admin-title">👤 Registered Users - Movistream</h2>

          <div className="table-wrapper">
            <table className="admin-table-glass">
              <thead>
                <tr>
                  {/* <th>S.No</th> */}
                  <th>Username</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">No Users Found</td>
                  </tr>
                ) : (
                  users.map((user, idx) => (
                    user.role === "user" && <>
                      <tr key={idx}>
                        {/* <td>{idx + 1}</td> */}
                        <td>{user.username}</td>
                        <td>{user.role || 'User'}</td>
                        <td>
                          <button className="delete-btn" onClick={() => handleDelete(true, user.id, null)}>Delete</button>
                        </td>
                      </tr></>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="admin-panel-glass">
          <h2 className="admin-title">🎬 Inquerys - Movistream</h2>

          {/* <form className="admin-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
      <button type="submit" className="neon-btn">
        {editingIndex !== null ? 'Update' : 'Create'}
      </button>
    </form> */}

          <table className="admin-table-glass">
            <thead>
              <tr>
                <th>S.No</th><th>Name</th><th>Email</th><th>Message</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{inq.name}</td>
                  <td>{inq.mail}</td>
                  <td>{inq.message}</td>
                  <td>
                    {/* <button className="edit-btn" onClick={() => handleEdit(idx)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(idx)}>Delete</button> */}
                    <button className="edit-btn" onClick={() => handleEdit(inq, inq.id)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(false, null, inq.id)}>Delete</button>
                  </td>
                </tr>

              ))}
            </tbody>
          </table>
        </div>
      </div>}
    </>


  );
};

export default AdminDashboard;