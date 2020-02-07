import React from 'react';

import s from './Blog.module.less';

import Card from "./Card/Card";

import img1 from './../../assets/image/desktop/img1.png';
import img2 from './../../assets/image/desktop/img2.png';
import img3 from './../../assets/image/desktop/img3.png';
import img1x2 from './../../assets/image/desktop/img1@2x.png';
import img2x2 from './../../assets/image/desktop/img2@2x.png';
import img3x2 from './../../assets/image/desktop/img3@2x.png';

/**
 * Отображение блога
 *
 * @param onMoreClick - обработчик кнопки Read More
 * @param blogData - массив данных блога
 * @param isBlogDataLoaded - загружен ли массив данных
 * @param isCardShow - показаны ли загруженные карточки
 * @returns {*}
 */
const Blog = ({ onMoreClick, blogData, isBlogDataLoaded, isCardShow }) => {
    let imgCounter = -1;
    return (
        <>
            <div className={s.main}>
                <Card
                    imgSrc={img1}
                    imgSrc2x={img1x2}
                    linkSrc={'https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b'}
                    titleCard={'Instagram FAQ — All You Need To Know'}
                    isVisible={true}
                />
                <Card
                    imgSrc={img2}
                    imgSrc2x={img2x2}
                    linkSrc={'https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63'}
                    titleCard={'DMEXCO 2019 — Meet Combin in Cologne'}
                    isVisible={true}
                />
                <Card
                    imgSrc={img3}
                    imgSrc2x={img3x2}
                    linkSrc={'https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7'}
                    titleCard={'Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1'}
                    isVisible={true}
                />
                {
                    (isBlogDataLoaded && blogData) &&
                    blogData.map( (item, i) => {
                        if (imgCounter === 2) imgCounter = -1;
                        imgCounter++;

                        return (
                            <Card
                                key={i}
                                imgSrc={
                                    (imgCounter === 0)
                                        ? img1
                                        : (imgCounter === 1)
                                        ? img2
                                        : img3
                                }
                                imgSrc2x={
                                    (imgCounter === 0)
                                        ? img1x2
                                        : (imgCounter === 1)
                                        ? img2x2
                                        : img3x2
                                }
                                linkSrc={item.url}
                                titleCard={item.title}
                                isVisible={isCardShow}
                            />)
                    })
                }
            </div>
            {
                !isBlogDataLoaded &&
                <button className={s.linkMore} onClick={onMoreClick}>Read More</button>
            }
        </>
    );
};

export default Blog;