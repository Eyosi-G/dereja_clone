import React from 'react'

interface IProps {
    total: number;
    page: number;
    selectPage: (page: number) => void;

}
const Pagination = (props: IProps) => {
    const { page, total, selectPage } = props;

    const numOfPages = Math.ceil(total / 9);
    const pages = [...new Array(numOfPages)].map((_, i) => i)

    const next = () => {
        if (pages.length > 0 && page < pages[pages.length - 1]) {
            selectPage(page + 1)
        }
    }

    const prev = () => {
        if (pages.length > 0 && page > 0) {
            selectPage(page - 1)
        }
    }


    return (
        <div className='flex  justify-center items-center space-x-4'>
            <button disabled={page === 0} className="disabled:text-gray-500" onClick={prev}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                </svg>
            </button>
            {pages.map(p => {
                if (p !== page) {
                    return <button onClick={() => selectPage(p)} className='h-9 w-9 flex justify-center items-center rounded-lg'>{p + 1}</button>
                }
                return <div className='bg-gradient-to-r from-[#de9844] to-[#d22464] h-9 w-9 flex justify-center items-center rounded-lg text-white'>{p + 1}</div>
            })}
            <button disabled={pages.length === 0 || pages[pages.length - 1] === page} className="disabled:text-gray-500" onClick={next}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    )
}

export default Pagination