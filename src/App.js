import React, { useEffect } from "react";
import { connect, Provider } from "react-redux";
import store from './redux/store';

import s from "./App.module.less";

import SliderContainer from "./components/Slider/SliderContainer";
import Section from "./components/common/Section/Section";
import BlogContainer from "./components/Blog/BlogContainer";

import { setInitApp } from "./redux/app-reducer";
import { getInitApp } from "./redux/selectors/app-selector";

/**
 * Главная компонента
 *
 * @param setInitApp - функция thunk для запроса инициализации приложения
 * @param initApp - статус инициализации приложения
 * @returns {*}
 */
function App({ setInitApp, initApp }) {

    // Хук для инициализации
    useEffect(() => {
        setInitApp();
    }, [setInitApp]);

    useEffect(() => {
        document.title = "Test task from Open Media";
    });

    return (
        <div className={s.App}>
            <SliderContainer />
            <Section title={'What\'s New?'}>
                <BlogContainer />
            </Section>
            <div className={`${s.loader} ${initApp ? s.hidden : ''}`}>
                Пожалуйста, дождитесь загрузки...
            </div>
        </div>
    );
}

// MapStateToProps
// объект с данными из общего state
// Получен при помощи селекторов
const mstp = state => ({
    initApp: getInitApp(state),
});

const AppContainer = connect(mstp, { setInitApp })(App);

export default () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);
