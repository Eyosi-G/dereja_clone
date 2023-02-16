import React, { useState } from 'react'
import { FilterName } from '../pages/JobsPage';
import { IFilter } from '../redux/service/jobs';

interface IProps {
  title: string;
  filter: IFilter;
  type: FilterName
  toggleFilter: (id: number, type: FilterName) => void;
  selected: number[];
}
const Filter = (props: IProps) => {
  const { title, filter, toggleFilter, type, selected } = props;
  const [open, setOpen] = useState(false)
  return (
    <div className='text-[#4d4d4d]'>
      <div onClick={() => setOpen(!open)} className='px-5 py-2  hover:bg-gray-100 hover:cursor-pointer'>
        <div className='flex justify-between'>
          <div className='font-semibold'>{title}</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      {open && Object.values(filter.filters).map(filter => {
        return <div className='px-5 py-1 flex items-center space-x-2'>
          <div><input checked={selected.includes(filter.id)} onChange={() => toggleFilter(filter.id, type)} className='w-4 h-4 border-gray-300 rounded checked:accent-[#e26300]' type="checkbox" /></div>
          <div>{filter.name}</div>
        </div>
      })}
    </div>
  )
}

export default Filter