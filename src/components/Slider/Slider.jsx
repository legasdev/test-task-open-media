import React from "react";

import s from "./Slider.module.less";
import Button from "../common/Button/Button";
import Slide from "./Slide/Slide";

/**
 * Отображение слайдера
 *
 * @param sliders - массив данных для слайдов
 * @param onControlLeftBtnClick - обработчик левой кнопки
 * @param onControlRightBtnClick - обработчик правой кнопки
 * @param activeSlide - номер активного слайда
 * @param slidesLength - количество слайдов
 * @returns {*}
 */
const Slider = ({
                    sliders, onControlLeftBtnClick,
                    onControlRightBtnClick, activeSlide,
                    slidesLength
                }) => (
    <div className={s.slider}>
        <div className={s.sliderWrapper}>
            {
                sliders ?
                    sliders.map((item, i) => (
                        <Slide
                            key={item.instagram_username}
                            active={activeSlide === i + 1}
                            selfNum={(i+1)}
                            name={item.name}
                            instagramUsername={item.instagram_username}
                            text={item.text}
                        />
                    ))
                    : <p>Данные слайдера еще загружаются...</p>

            }
        </div>
        <div className={s.sliderControlPanel}>
            <div className={s.circle} />
            <div className={s.sliderControlBtn}>
                <Button
                    left={true}
                    disabled={activeSlide === 1}
                    onControlBtnClick={onControlLeftBtnClick}
                />
                <Button
                    onControlBtnClick={onControlRightBtnClick}
                    disabled={activeSlide === slidesLength}
                />
            </div>
        </div>
    </div>
);

export default Slider;