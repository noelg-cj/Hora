import React from 'react'

const ProjectMenu = ({ projectList }) => {
  return (
    <div className='w-full h-full border-r-[1px] py-4'>
      <h4 className='px-4 font-semibold'>Projects</h4>
      <div className='my-2'>
        {projectList.map((project, index) => (
          <div key={index} className='text-slate-800 px-4 py-1 border-b-[1px] hover:bg-slate-100 cursor-pointer'>
            {project}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectMenu