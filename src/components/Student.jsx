import React from 'react'
import removeIcon from '../assets/img/icons/remove.svg';
import editIcon from '../assets/img/icons/edit.svg';

const Student = ({ id, avatarURL, fullName, age, gender, payment, showModal, onDeleteStudent }) => {

  /* const handelClickEdit = (id) => {
    showModal(id)
  } */

  return (
    <div className="student__column">
      <div className="student__img">
        <img src={`${avatarURL}&${id}`} alt="logo" />
      </div>
      <div className="student__info">
        <div className="student__name">
          <p className="student__top">Имя</p>
          <h1 className="student__bottom">{fullName}</h1>
        </div>
        <div className="student__age">
          <p className="student__top">Возраст</p>
          <h1 className="student__bottom age">{age}</h1>
        </div>
        <div className="student__gender">
          <p className="student__top">пол</p>
          <h1 className="student__bottom gender">{gender}</h1>
        </div>
        <div className="student__money">
          <p className="student__top">оплата</p>
          <h1 className="student__bottom pay">{payment}</h1>
        </div>
      </div>
      <div className="student__action">
        <div onClick={() => showModal(id)} className="student__edit">
          <img src={editIcon} alt="" />
        </div>
        <div onClick={() => onDeleteStudent(id)} className="student__remove">
          <img src={removeIcon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Student
