import appReducer, { _setInitAppAction, _setBlogDataAction, _setSliderDataAction} from './app-reducer';

// Начальное стостояние
const state = {
    initApp: null,
    sliderData: null,
    blogData: null,
};

describe('APP REDUCER --- Тестирование редьюсера приложения',() => {

    it('Тест #1 >> Установка нового флага инициализации приложения', () => {

        const action = _setInitAppAction(true);
        const actionFalse = _setInitAppAction(false);
        const actionNull = _setInitAppAction(null);

        const res = appReducer(state, action);
        const resFalse = appReducer(res, actionFalse);
        const resNull = appReducer(resFalse, actionNull);

        expect(res.initApp).toBe(true);
        expect(resFalse.initApp).toBe(false);
        expect(resNull.initApp).toBe(null);
    });

    it('Тест #2 >> Добавление данных для блога', () => {

        const arrayData = [
            {
                "title": "Instagram Reveals Explore Tab AI",
                "url": "https://blog.combin.com/instagram-explore-ai-5c947d990dde",
                "date": "2015-10-12"
            },
            {
                "title": "Instagram Reveals Explore Tab AI",
                "url": "https://blog.combin.com/instagram-explore-ai-5c947d990dde",
                "date": "2019-11-29"
            }
        ];

        const action = _setBlogDataAction(arrayData);
        const actionNull = _setBlogDataAction(null);

        const res = appReducer(state, action);
        const resNull = appReducer(res, actionNull);

        expect(res.blogData.length).toEqual(2);
        expect(resNull.blogData).toBe(null);
    });

    it('Тест #3 >> Добавление данных для слайдера', () => {

        const arrayData = [
            {
                "name": "Calvin Uy",
                "instagram_username": "calvinathor",
                "text": "Msg text"
            }
        ];

        const action = _setSliderDataAction(arrayData);
        const actionNull = _setSliderDataAction(null);

        const res = appReducer(state, action);
        const resNull = appReducer(res, actionNull);

        expect(res.sliderData.length).toEqual(1);
        expect(resNull.sliderData).toBe(null);
    });
});