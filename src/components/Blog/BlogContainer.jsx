import React, {useEffect, useState} from "react";
import { connect } from "react-redux";

import Blog from "./Blog";

import { setBlogData } from "../../redux/app-reducer";
import { getBlogData } from "../../redux/selectors/app-selector";

/**
 * Контейнер для блога
 *
 * @param blogData - массив со статьями
 * @param setBlogData - функция загрузки данных блога
 * @returns {*}
 */
const BlogContainer = ({ blogData, setBlogData }) => {

    // Флаг загрузки информации
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    // Флаг отображения карточек
    const [isCardShow, setIsCardShow] = useState(false);

    useEffect(() => {
        if (isDataLoaded && !isCardShow) {
            setTimeout(() => setIsCardShow(true), 100)
        }
    });

    // Обработчик на событие клика Read More
    const onMoreClick = () => {
        if (!isDataLoaded) {
            setBlogData();
            setIsDataLoaded(true);
        }
    };

    return (
        <Blog
            onMoreClick={onMoreClick}
            blogData={blogData}
            isBlogDataLoaded={isDataLoaded}
            isCardShow={isCardShow}
        />
    );
};

const mstp = state => ({
    blogData: getBlogData(state),
});

export default connect(mstp, { setBlogData })(BlogContainer);