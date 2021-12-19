import React from "react";
import axios from "axios";
import "./App.css";
import { Modal, Loader, MainContent } from "./components/";

function App() {
  const [isModal, setShowModal] = React.useState(false);
  const [studentsList, setStudentsList] = React.useState([]);
  const [studentsEdit, setStudentsEdit] = React.useState({});
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`https://61753daa08834f0017c70b7f.mockapi.io/students`)
      .then(({ data }) => setStudentsList(data))
      .then(() => setIsLoaded(true));
  }, []);

  const totalPay = studentsList.reduce(
    (accumulator = 0, obj) => accumulator + Number(obj.payment),
    0
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
    setIsLoaded(false);
    axios
      .delete(`https://61753daa08834f0017c70b7f.mockapi.io/students/${id}`)
      .then(() =>
        setStudentsList((prev) => prev.filter((obj) => obj.id !== id))
      )
      .then(() => setIsLoaded(true));
  };

  const clearAllStudents = () => {
    setStudentsList([]);
  };

  const addStudent = (student, id) => {
    setIsLoaded(false);
    if (id) {
      student = {
        ...student,
        avatarURL: `https://source.unsplash.com/50x50/?people`,
      };
      axios
        .put(
          `https://61753daa08834f0017c70b7f.mockapi.io/students/${id}`,
          student
        )
        .then(({ data }) => {
          setStudentsList((prev) =>
            prev.map((obj) =>
              obj.id === id
                ? {
                    ...data,
                  }
                : obj
            )
          );
        })
        .then(() => setIsLoaded(true));

      setShowModal(false);
    } else {
      student = {
        ...student,
        avatarURL: `https://source.unsplash.com/50x50/?people`,
      };
      axios
        .post(`https://61753daa08834f0017c70b7f.mockapi.io/students`, student)
        .then(({ data }) => setStudentsList([...studentsList, data]))
        .then(() => setIsLoaded(true));
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
      {isModal && (
        <Modal
          {...studentsEdit}
          addStudent={addStudent}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
}

export default App;
