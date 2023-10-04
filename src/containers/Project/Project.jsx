import React from 'react'
import ProjectMenu from './ProjectMenu'
import TaskContainer from './TaskContainer'

const Project = ({ data, projects }) => {
    const tasks = data.tasks
  return (
    <div className='w-9/12 flex h-full'>
        <div className='w-1/4'>
            <ProjectMenu projectList = {projects} />
        </div>
        <div className='w-3/4 h-full'>
            <div className='h-1/6 font-poppins p-5 pb-0 flex flex-col justify-end'>
                <h2 className='font-medium text-4xl'>{ data.name }</h2>
                <ul className='border-b-2 flex mt-4'>
                    <li className='text-slate-500 px-4 cursor-pointer hover:text-slate-600'>Details</li>
                    <li className='text-indigo-500 px-4 cursor-pointer border-b-2 border-b-indigo-500'>Tasks</li>
                    <li className='text-slate-500 px-4 cursor-pointer hover:text-slate-600'>Roadmaps</li>
                    <li className='text-slate-500 px-4 cursor-pointer hover:text-slate-600'>Settings</li>
                </ul>
            </div>
            <div className='h-5/6 bg-slate-100 px-3'>
                {/* Filter and sort */}
                <div className='h-[10%] p-5 flex items-center gap-3 justify-end'>
                    <div className='flex gap-1'>
                        <p className='text-slate-500'>Sort by: </p>
                        <select className='bg-transparent text-slate-900'>
                            <option value={'deadline'} >Deadline</option>
                            <option value={'priority'}>Priority</option>
                        </select>
                    </div>
                    <div className=''>
                        <select className='bg-transparent text-slate-900'>
                            <option>Filter</option>
                        </select>
                    </div>
                </div>

                {/* Tasks */}
                <div className='h-[90%] px-3 w-full flex'>
                    <TaskContainer section={"TO DO"} tasks={tasks[0]} />
                    <TaskContainer section={"IN PROGRESS"} tasks={tasks[1]} />
                    <TaskContainer section={"COMPLETED"} tasks={tasks[2]} />               
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project