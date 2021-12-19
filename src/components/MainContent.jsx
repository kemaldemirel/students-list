import React from "react";
import { Empty, StudentsList, TotalFooter } from "./index";

const MainContent = ({
  studentsList,
  deleteStudent,
  toggleModal,
  clearAllStudents,
  totalPay,
}) => {
  return (
    <>
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
    </>
  );
};

export default MainContent;
