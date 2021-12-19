import React from "react";

const Loader = () => {
  return (
    <>
      <div className="students">
        <div className="student__column">
          <div className="student__img">
            <div></div>
          </div>
          <div className="student__info">
            <div className="student__name">
              <p className="student__top">Имя</p>
              <div className="empty student__bottom name"></div>
            </div>
            <div className="student__age">
              <p className="student__top">Возраст</p>
              <h1 className="empty student__bottom age"></h1>
            </div>
            <div className="student__gender">
              <p className="student__top">Пол</p>
              <h1 className="empty student__bottom gender"></h1>
            </div>
            <div className="student__money">
              <p className="student__top">Оплата</p>
              <h1 className="empty student__bottom pay"></h1>
            </div>
          </div>
        </div>
        <div className="student__column">
          <div className="student__img">
            <div></div>
          </div>
          <div className="student__info">
            <div className="student__name">
              <p className="student__top">Имя</p>
              <div className="empty student__bottom name"></div>
            </div>
            <div className="student__age">
              <p className="student__top">Возраст</p>
              <h1 className="empty student__bottom age"></h1>
            </div>
            <div className="student__gender">
              <p className="student__top">Пол</p>
              <h1 className="empty student__bottom gender"></h1>
            </div>
            <div className="student__money">
              <p className="student__top">Оплата</p>
              <h1 className="empty student__bottom pay"></h1>
            </div>
          </div>
        </div>
        <div className="student__column">
          <div className="student__img">
            <div></div>
          </div>
          <div className="student__info">
            <div className="student__name">
              <p className="student__top">Имя</p>
              <div className="empty student__bottom name"></div>
            </div>
            <div className="student__age">
              <p className="student__top">Возраст</p>
              <h1 className="empty student__bottom age"></h1>
            </div>
            <div className="student__gender">
              <p className="student__top">Пол</p>
              <h1 className="empty student__bottom gender"></h1>
            </div>
            <div className="student__money">
              <p className="student__top">Оплата</p>
              <h1 className="empty student__bottom pay"></h1>
            </div>
          </div>
        </div>
      </div>
      <div className="stick"></div>
      <div className="total">
        <div className="total__count">
          <p className="empty total__title">Общий доход:</p>
          <h1 className="empty total__gain"></h1>
        </div>
        <div className="total__people">
          <p className="empty total__written">Всего записано:</p>
          <h1 className="empty total__student"></h1>
        </div>
        <div className="button">
          <button className="add__student button-pushed">
            Добавить студента
          </button>
          <button className="clear__student button-pushed">
            Очистить список
          </button>
        </div>
      </div>
    </>
  );
};

export default Loader;
