/**
 *
 * Редьюсер приложения
 *
 */

const
    SET_INIT_APP = 'app-reducer/SET_INIT_APP',
    SET_SLIDER_DATA = 'app-reducer/SER_SLIDER_DATA',
    SET_BLOG_DATA = 'app-reducer/SET_BLOG_DATA';

const initialState = {
    initApp: false,
    sliderData: null,
    blogData: null,
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_INIT_APP: 
            return {
                ...state,
                initApp: action.status
            };

        case SET_SLIDER_DATA:
            return {
                ...state,
                sliderData: action.data
            };

        case SET_BLOG_DATA:
            return {
                ...state,
                blogData: action.data
            };

        default: return state;
    }

};

export default appReducer;


// Actions

export const _setInitAppAction = status => ({type: SET_INIT_APP, status});
export const _setSliderDataAction = data => ({type: SET_SLIDER_DATA, data});
export const _setBlogDataAction = data => ({type: SET_BLOG_DATA, data});


// Thunks

// Инициализировать приложение
// и добавить данные слайдера
export const setInitApp = () => async dispatch => {
    const res = await require('./../json/feedback_data');
    if (res) {
        dispatch(_setSliderDataAction(res));
        dispatch(_setInitAppAction(true));
    }
};

// Добавить данные блога
export const setBlogData = () => async dispatch => {
    const res = await require('./../json/blog_posts');
    if (res) {
        dispatch(_setBlogDataAction(res));
    }
};