import React from 'react'
import Task from '../../components/task'
import ProjectMenu from './ProjectMenu'

const Project = ({ data, projectList }) => {
    const tasks = data.tasks
    console.log(projectList);
  return (
    <div className='w-9/12 flex h-full'>
        <div className='w-1/4'>
            <ProjectMenu />
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
                            <div className='p-3 h-full w-1/3 flex'>
                                <div className='bg-slate-100 w-full'>
                                    <div className='font-medium flex justify-between p-1 pt-0 border-b-2'>
                                        <h5 className='text-lg'>TO DO</h5>
                                        <p className='bg-indigo-500 text-white px-4 rounded-md'>2</p>
                                    </div>
                                    <div>
                                        <button className='w-full my-2 bg-white p-2 rounded-sm border-[1px] border-slate-200 hover:bg-indigo-500 hover:text-white transition'>+ Add Task</button>
                                    </div>
                                        <ul className='mt-2 flex flex-col gap-2'>
                                            {tasks[0].map((task, index) => (
                                                <div>
                                                    <Task data={task} />
                                                </div>
                                            ))}
                                        </ul>
                                </div>
                            </div>
                                <div className='p-3 h-full w-1/3 flex'>
                                    <div className='bg-slate-100 w-full'>
                                        <div className='font-medium flex justify-between p-1 pt-0 border-b-2'>
                                            <h5 className='text-lg'>IN PROGRESS</h5>
                                            <p className='bg-indigo-500 text-white px-4 rounded-md'>2</p>
                                        </div>
                                        <div>
                                            <button className='w-full my-2 bg-white p-2 rounded-sm border-[1px] border-slate-200 hover:bg-indigo-500 hover:text-white transition'>+ Add Task</button>
                                        </div>
                                        <ul className='mt-2 flex flex-col gap-2'>
                                            {tasks[1].map((task) => (
                                                <li><Task data={task} /></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className='p-3 h-full w-1/3 flex'>
                                    <div className='bg-slate-100 w-full'>
                                        <div className='font-medium flex justify-between p-1 pt-0 border-b-2'>
                                            <h5 className='text-lg'>COMPLETED</h5>
                                            <p className='bg-indigo-500 text-white px-4 rounded-md'>2</p>
                                        </div>
                                        <div>
                                            <button className='w-full my-2 bg-white p-2 rounded-sm border-[1px] border-slate-200 hover:bg-indigo-500 hover:text-white transition'>+ Add Task</button>
                                        </div>
                                        <ul className='mt-2 flex flex-col gap-2'>
                                            {tasks[2].map((task) => (
                                                <li><Task data={task} /></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>     
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project