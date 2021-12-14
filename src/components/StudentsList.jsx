import React from 'react'
import Student from './Student'

const StudentsList = ({ toggleModal, data, deleteStudent }) => {
  return (
    <>
      <div className="students">
        {data.map((student) => (
          <Student onDeleteStudent={deleteStudent} showModal={toggleModal} key={student.id} {...student} />
        ))}
      </div>
    </>
  )
}

export default StudentsList
