import React from 'react'
import moment from "moment"
import DetailButton from './buttons/DetailButton'
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.bubble.css';
import { imageUrl } from '../redux/common';
import { IArticle } from '../redux/service/article';
import { Layout } from '../constant';

interface IProps {
    article: IArticle;
    layout: Layout
}
const ArticleCard = (props: IProps) => {
    const { article, layout } = props;

    const navigate = useNavigate()

    const formatDate = () => {
        if (Date.parse(article.published_at).toString() == 'NaN') {
            const reversed = article.published_at.split("-");
            return moment(`${reversed[2]}-${reversed[1]}-${reversed[0]}`).format("LL")
        }
        return moment(article.published_at).format("LL")
    }

    return (
        <div className={`${layout === Layout.ROW ? "grid grid-cols-5" : ""} bg-white overflow-clip rounded-md`}>
            <div className={`${layout === Layout.ROW ? "col-span-1" : "h-40"} flex items-center`}>
                <img src={`${imageUrl}/${article.cover}`} className="w-full h-full object-cover" />
            </div>
            <div className='p-4 col-span-4'>
                <div className=''>
                    <p className='text-[#d22464] font-bold capitalize line-clamp-2'>{article.name}</p>
                    <p className='whitespace-nowrap text-gray-500'>{formatDate()}</p>
                </div>
                <p className='mt-5 line-clamp-4 text-sm text-[#4d4d4d] font-normal text-start ' >
                    {parse(article.short_description)}
                </p>
                <div className='mt-3'>
                    <DetailButton text='See More' onClickHandler={() => { navigate(`/jobs/${article.id}`) }} />
                </div>
            </div>
        </div>
    )
}

export default ArticleCard


