import React from 'react'

const TotalFooter = ({ showModal, totalPay, totalStudents, clearAllStudents }) => {
  return (
    <>
      <div className="stick"></div>
      <div className="total">
        <div className="total__count">
          <p className="total__title">Общий доход:</p>
          <h1 className="total__gain">{totalPay}</h1>
        </div>
        <div className="total__people">
          <p className="total__written">Всего записано:</p>
          <h1 className="total__student">{totalStudents}</h1>
        </div>
        <div className="button">
          <button onClick={() => showModal()} className="add__student button-pushed">Добавить студента</button>
          <button onClick={clearAllStudents} className="clear__student button-pushed">Очистить список</button>
        </div>
      </div>
    </>
  )
}

export default TotalFooter
