import React from "react";

import s from './Card.module.less';

/**
 * Карточка-ссылка для блога
 *
 * @param imgSrc - стандартная картинка
 * @param imgSrc2x - картинка для ретины
 * @param linkSrc - ссылка
 * @param titleCard - заголовок
 * @param isVisible - видна ли карточка
 * @returns {*}
 */
const Card = ({ imgSrc, imgSrc2x, linkSrc, titleCard, isVisible }) => (
    <a
        href={linkSrc}
        target='_blank'
        rel='noopener noreferrer'
        className={`${s.card} ${isVisible ? '' : s.hide}`}
    >
        <div className={s.imgWrapper}>
            <img src={imgSrc} srcSet={`${imgSrc} 1x, ${imgSrc2x} 2x`} alt={'text'} />
        </div>
        <h3 className={s.title}>{titleCard}</h3>
    </a>
);

export default Card;