import React from "react";

import s from './Button.module.less';

/**
 * Кнопка
 *
 * @param left - развернута ли кнопка
 * @param disabled - активна ли кнопка
 * @param onControlBtnClick - функция обработчик
 * @returns {*}
 */
const Button = ({ left, disabled, onControlBtnClick }) => (
    <div
        className={`${s.button} ${s.opacity} ${left ? s.left : ''} ${disabled ? s.disabled : ''}`}
        onClick={() => {if (!disabled) onControlBtnClick()}}
    >
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className={s.arrow} xmlns="http://www.w3.org/2000/svg">
            <path className={s.arrow} d="M0.999999 1L7 7L0.999999 13" stroke="black" strokeLinecap="round"/>
        </svg>
    </div>
);

export default Button;