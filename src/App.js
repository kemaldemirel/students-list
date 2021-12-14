import React from 'react';
import './App.css';
import { StudentsList, Modal, Empty, TotalFooter } from './components/';

function App() {
  const [isModal, setShowModal] = React.useState(false);
  const [studentsList, setStudentsList] = React.useState([
    {
      id: 1,
      avatarURL: 'https://source.unsplash.com/50x50/?people',
      fullName: 'Петр Петров',
      age: 24,
      payment: 5000,
      gender: 'Мужчина',
    },
  ]);
  const [studentsEdit, setStudentsEdit] = React.useState({});

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
    setStudentsList((prev) => prev.filter((obj) => obj.id !== id));
  };

  const clearAllStudents = () => {
    setStudentsList([]);
  };

  const addStudent = (student, id) => {
    if (id) {
      setStudentsList((prev) =>
        prev.map((obj) =>
          obj.id === id
            ? {
                ...student,
                id: studentsList[studentsList.length - 1]
                  ? studentsList[studentsList.length - 1].id + 1
                  : 1,
                avatarURL: `https://source.unsplash.com/50x50/?people`,
              }
            : obj,
        ),
      );
      setShowModal(false);
    } else {
      setStudentsList([
        ...studentsList,
        {
          id: studentsList[studentsList.length - 1]
            ? studentsList[studentsList.length - 1].id + 1
            : 1,
          avatarURL: `https://source.unsplash.com/50x50/?people`,
          ...student,
        },
      ]);
      setShowModal(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        {studentsList.length ? (
          <StudentsList
            deleteStudent={deleteStudent}
            toggleModal={toggleModal}
            data={studentsList}
          />
        ) : (
          <Empty toggleModal={toggleModal} />
        )}
        <TotalFooter
          clearAllStudents={clearAllStudents}
          totalPay={totalPay}
          totalStudents={studentsList.length}
          showModal={toggleModal}
        />
      </div>
      {isModal && <Modal {...studentsEdit} addStudent={addStudent} toggleModal={toggleModal} />}
    </div>
  );
}

export default App;
