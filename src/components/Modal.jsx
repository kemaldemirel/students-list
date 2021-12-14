import React from 'react'
import removeIcon from '../assets/img/icons/remove.svg'

const Modal = ({
  toggleModal,
  addStudent,
  fullName = "",
  gender = "",
  payment = "",
  age = "",
  id = null }) => {

  const [student, setStudent] = React.useState({
    fullName,
    gender,
    payment,
    age,
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setStudent({
      ...student,
      [name]: value
    })
  }

  const handleClick = (id) => {
    if (student.age > 0 && student.payment > 0) {
      addStudent(student, id)
    } else {
      alert('Поля возраст и оплата должны быть больше 0')
    }
  }

  return (
    <div className="popup">
      <form action='#' onSubmit={() => handleClick(id)}>
        <div className="popup__container">
          <img className="student__edit popup-close" src={removeIcon} alt="popup" onClick={toggleModal} />
          <div className="popup__title">
            <input required onChange={handleChange} value={student.fullName} name="fullName" type="text" placeholder="Введите имя и фамилию" />
          </div>
          <div className="popup__input">
            <input required onChange={handleChange} value={student.age} name="age" type="number" placeholder="Возраст" />
            <select onChange={handleChange} name="gender" title="fg">
              <option selected={gender === undefined} value="Пол">Пол</option>
              <option selected={gender === 'Мужчина'} value="Мужчина">Мужчина</option>
              <option selected={gender === 'Женщина'} value="Женщина">Женщина</option>
            </select>
            <input required onChange={handleChange} value={student.payment} name="payment" type="number" placeholder="Оплачено" />
          </div>
          <div className="popup__button">
            <button type='submit' className="popup__button-send button-pushed">Добавить</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Modal
