import React, {useEffect, useState} from "react";
import { connect } from "react-redux";

import Slider from "./Slider";

import { getSliderData } from "../../redux/selectors/app-selector";

/**
 * Контейнерная компонента для слайдера
 * Здесь обрабатываются различные события слайдера
 * и само управление слайдером
 *
 * @param sliderData - массив данных слайдов
 * @returns {*}
 */
const SliderContainer = ({ sliderData }) => {

    // Номер активного слайда
    const [activeSlide, setActiveSlide] = useState(1);
    // Длина массива слайдов
    const [sliderDataLength, setSliderDataLength] = useState(0);

    // Установка длины массива слайдов
    useEffect(() => {
        if (sliderData) {
            setSliderDataLength(sliderData.length);
        }
    }, [sliderData]);

    // Обработчик на правую кнопку слайдера
    const onControlRightBtnClick = () => {
        if (activeSlide < sliderDataLength)
            setActiveSlide(activeSlide + 1)
    };

    // Обработчик на левую кнопку слайдера
    const onControlLeftBtnClick = () => {
        if (activeSlide > 1)
            setActiveSlide(activeSlide - 1)
    };

    return (
        sliderData &&
            <Slider
                sliders={sliderData}
                onControlRightBtnClick={onControlRightBtnClick}
                onControlLeftBtnClick={onControlLeftBtnClick}
                activeSlide={activeSlide}
                slidesLength={sliderDataLength}
            />
    );
};

const mstp = state => ({
    sliderData: getSliderData(state),
});

export default connect(mstp, null)(SliderContainer);