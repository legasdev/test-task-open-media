import React from "react";

import s from "../Slider.module.less";

/**
 * Слайд в слайдере
 *
 * @param name - Имя пользователя
 * @param text - Текст отзыва
 * @param instagramUsername - Инстаграмм профиль
 * @param active - Активен ли слайд
 * @returns {*}
 */
const Slide = ({ name, text, instagramUsername, active }) => (
    <div className={`${s.slide} ${active ? s.active : ''}`} key={instagramUsername}>
        <p className={s.slideText}>
            {text}
        </p>
        <a
            href={`http://instagram.com/${instagramUsername}`}
            className={s.author}
            target='_blank'
            rel='noopener noreferrer'
        >
            {name}
            <span className={s.separator}>, </span>
            <span className={s.instLogin}>{`@${instagramUsername}`}</span>
        </a>
    </div>
);

export default Slide;
