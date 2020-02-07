import React from 'react';

import s from './Section.module.less';

/**
 * Секция страницы
 *
 * @param title - заголовок секции
 * @param props - остаточные параметры (ex: потомки)
 * @returns {*}
 */
const Section = ({title, ...props}) => (
    <section className={s.main}>
        <h2>{title}</h2>
        {props.children}
    </section>
);

export default Section;