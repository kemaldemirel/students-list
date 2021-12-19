import React from 'react';
import axios from 'axios';
import './App.css';
import { Modal, Loader, MainContent } from './components/';

function App() {
  const [isModal, setShowModal] = React.useState(false);
  const [studentsList, setStudentsList] = React.useState([]);
  const [studentsEdit, setStudentsEdit] = React.useState({});
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`https://61753daa08834f0017c70b7f.mockapi.io/students`)
      .then(({ data }) => setStudentsList(data))
      .catch((e) => alert(e.message))
      .finally(() => setIsLoaded(true));
  }, []);

  const totalPay = studentsList.reduce(
    (accumulator = 0, obj) => accumulator + Number(obj.payment),
    0,
  );

  const toggleModal = (id) => {
    if (id) {
      const edit = studentsList.find((obj) => obj.id === id);
      setStudentsEdit(edit);
    } else {
      setStudentsEdit({});
    }
    setShowModal(!isModal);
  };

  const deleteStudent = (id) => {
    const confirmDelete = window.confirm('Вы действительно хотите удалить студента?');
    if (confirmDelete) {
      setIsLoaded(false);
      axios
        .delete(`https://61753daa08834f0017c70b7f.mockapi.io/students/${id}`)
        .then(() => setStudentsList((prev) => prev.filter((obj) => obj.id !== id)))
        .catch((e) => alert(e.message))
        .finally(() => setIsLoaded(true));
    }
  };

  const clearAllStudents = () => {
    studentsList.forEach((obj) => {
      axios.delete(`https://61753daa08834f0017c70b7f.mockapi.io/students/${obj.id}`);
    });
    setStudentsList([]);
  };

  const addStudent = (student, id) => {
    setIsLoaded(false);
    if (id) {
      axios
        .put(`https://61753daa08834f0017c70b7f.mockapi.io/students/${id}`, {
          ...student,
          avatarURL: `https://source.unsplash.com/50x50/?people`,
        })
        .then(({ data }) => {
          setStudentsList((prev) => prev.map((obj) => (obj.id === id ? data : obj)));
        })
        .catch((e) => alert(e.message))
        .finally(() => setIsLoaded(true));

      setShowModal(false);
    } else {
      axios
        .post(`https://61753daa08834f0017c70b7f.mockapi.io/students`, {
          ...student,
          avatarURL: `https://source.unsplash.com/50x50/?people`,
        })
        .then(({ data }) => {
          setStudentsList([...studentsList, data]);
        })
        .catch((e) => alert(e.message))
        .finally(() => setIsLoaded(true));
      setShowModal(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        {isLoaded ? (
          <MainContent
            studentsList={studentsList}
            clearAllStudents={clearAllStudents}
            toggleModal={toggleModal}
            deleteStudent={deleteStudent}
            totalPay={totalPay}
          />
        ) : (
          <Loader />
        )}
      </div>
      {isModal && <Modal {...studentsEdit} addStudent={addStudent} toggleModal={toggleModal} />}
    </div>
  );
}

export default App;
