import { createSelector } from "reselect";


// Simple-селекторы
// Напрямую получают данные из state

const ititApp = state => state.app.initApp;
const sliderData = state => state.app.sliderData;
const blogData = state => state.app.blogData;


// Selectors
// При использовании reselect можно предоставлять изменные данные для компонент
// Так же reselect не прокидывает данные в компоненту, если они не изменились

// Получить информацию об инициализации приложения
export const getInitApp = createSelector(ititApp, status => status);

// Получить данные для слайдера
export const getSliderData = createSelector(sliderData, data => data);

// Данные для блога
// Перед отдачей сортируем от нового к старому
export const getBlogData = createSelector(blogData, data => (
    data && data.map(item => item)
            .sort( (item1, item2) => -(Date.parse(item1.date) - Date.parse(item2.date)))
));