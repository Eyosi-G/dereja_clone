import React, { useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import CourseFilter from '../components/CourseFilter'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LoadingModal from '../components/LoadingModal'
import NavBar from '../components/NavBar'
import SmallSizedScreenNavBar from '../components/SmallSizedScreenNavBar'
import { Layout } from '../constant'
import { useGetArticleCategoryQuery, useGetArticlesQuery } from '../redux/service/article'

const ArticlesPage = () => {
    const [layout, setLayout] = useState<Layout>(Layout.GRID)
    const [selected, setSelected] = useState<number[]>([])
    const { isFetching: isCategoryFetching, isSuccess: isFetchingCategorySuccess, data: categoryData } = useGetArticleCategoryQuery()
    const { isFetching: isArticleFetching, isSuccess: isFetchingArticleSuccessful, data: articleData } = useGetArticlesQuery(selected)
    const toggleFilter = (id: number) => {
        if (selected.includes(id)) {
            setSelected(selected.filter(item => item !== id))
        } else {
            setSelected([...selected, id])
        }
    }

    return (
        <div className='bg-[#fcf7f0] relative'>
            {(isCategoryFetching || isArticleFetching) && <LoadingModal open={true} />}
            <div className='relative z-50'>
                <SmallSizedScreenNavBar />
                <NavBar />
                <Header />
            </div>
            <div className='min-h-[300px]'>
                <div className='relative '>
                    <img className='absolute z-10 -top-48 ' src="/images/bg_top.png" />
                </div>

                <>
                    <div className='px-5 md:px-24 pt-20 pb-5 relative z-20'>
                        <div className='grid grid-cols-12  gap-5'>
                            <div className='col-span-full  md:block md:col-span-3 h-min bg-white rounded-md py-2'>
                                {
                                    isFetchingCategorySuccess &&
                                    <CourseFilter
                                        categories={categoryData?.data.categories}
                                        selected={selected}
                                        toggleFilter={toggleFilter}
                                    />
                                }
                            </div>
                            <div className='col-span-full md:col-span-9 '>
                                <div className='bg-white hidden md:flex justify-between p-3 rounded-md'>
                                    {isFetchingArticleSuccessful && <span>{articleData.data.length} Jobs</span>}
                                    <div className='space-x-2'>
                                        <button onClick={() => setLayout(Layout.ROW)} className={`${layout === Layout.ROW && 'text-[#e26300]'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                                            </svg>
                                        </button>
                                        <button onClick={() => setLayout(Layout.GRID)} className={`${layout === Layout.GRID && 'text-[#e26300]'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    {isFetchingArticleSuccessful && <div className={`${layout === Layout.GRID ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'block space-y-4'} mt-7`}>
                                        {articleData.data.map(article => {
                                            return <ArticleCard layout={layout} article={article} />
                                        })}
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </div>
            <Footer />
        </div>
    )
}

export default ArticlesPage