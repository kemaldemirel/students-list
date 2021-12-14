import React from 'react'
import smileIcon from '../assets/img/smile.svg'

const Empty = () => {
  return (
    <>
      <div className="empty">
        <div className="empty__img">
          <img src={smileIcon} alt="smile" />
        </div>
        <div className="empty__title">
          <h1>Список студентов пуст</h1>
          <p>Добавьте хотя бы одного студента в список...</p>
        </div>
      </div>
    </>
  )
}

export default Empty
