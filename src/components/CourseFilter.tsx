import React from 'react'
import { IArticleCategory } from '../redux/service/article'

interface IProps {
    categories: IArticleCategory[]
    selected: number[];
    toggleFilter: (id: number) => void;
}
const CourseFilter = (props: IProps) => {
    const { categories, selected, toggleFilter } = props;
    return (
        <div className='text-[#4d4d4d]'>

            {categories.map(cateogry => {
                return (<div className='px-5 py-1 flex items-center'>
                    <div className='flex items-center space-x-2'>
                        <div><input checked={selected.includes(cateogry.id)} onChange={() => { toggleFilter(cateogry.id) }} className='w-4 h-4 border-gray-300 rounded checked:accent-[#e26300]' type="checkbox" /></div>
                        <div>{cateogry.name}</div>
                    </div>
                    <div className='grow border border-dashed mx-1' />
                    <div>{cateogry.articles_count}</div>
                </div>)
            })}
        </div>
    )
}

export default CourseFilter