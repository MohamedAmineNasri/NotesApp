import React from 'react'
import { MdAdd } from 'react-icons/md'

const TagInput = ({ tags, setTags }) => {
  return (
    <div>
      <div className='flex items-center gap-4 mt-3'>
        <input type="text" className='' placeholder='Add Tags' />
        <button className=''>
          <MdAdd />
        </button>
      </div>
    </div>
  )
}

export default TagInput
