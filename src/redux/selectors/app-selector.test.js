import { getInitApp, getSliderData, getBlogData } from './app-selector';

describe('SELECTOR --- Тестирование селектора приложения',() => {

    it('Тест #1 >> Получить информацию об инициализации приложения', () => {
        const state = {
            app: {
                initApp: true,
            }
        };
        const stateFalse = {
            app: {
                initApp: false,
            }
        };

        const res = getInitApp(state);
        const resFalse = getInitApp(stateFalse);

        expect(res).toBe(true);
        expect(resFalse).toBe(false);
    });

    it('Тест #2 >> Получить данные для слайдера', () => {
        const arrayData = [
            {
                "name": "Calvin Uy",
                "instagram_username": "calvinathor",
                "text": "Msg text"
            }
        ];

        const state = {
            app: {
                sliderData: arrayData,
            }
        };

        const res = getSliderData(state);

        expect(res).toEqual(arrayData);
    });

    it('Тест #3 >> Получить отсортированные данные (от нового до старого) для блога', () => {
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

        const arraySortedData = [
            {
                "title": "Instagram Reveals Explore Tab AI",
                "url": "https://blog.combin.com/instagram-explore-ai-5c947d990dde",
                "date": "2019-11-29"
            },
            {
                "title": "Instagram Reveals Explore Tab AI",
                "url": "https://blog.combin.com/instagram-explore-ai-5c947d990dde",
                "date": "2015-10-12"
            }
        ];

        const state = {
            app: {
                blogData: arrayData,
            }
        };

        const res = getBlogData(state);

        expect(res).toEqual(arraySortedData);
    });

});