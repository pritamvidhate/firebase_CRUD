import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfg';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import './App.css';

function App() {
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(doc, 'users', id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const delelteUser = async (id) => {
    const userDoc = doc(doc, 'users', id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='App'>
      <input
        type='text'
        placeholder='Enter the Name'
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input
        type='number'
        placeholder='Enter the Age'
        onChange={(e) => {
          setNewAge(e.target.value);
        }}
      />
      <button onClick={createUser}>Add User</button>
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button onClick={() => updateUser(user.id, user.age)}>
              Increase Age
            </button>
            <button onClick={() => delelteUser(user.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
