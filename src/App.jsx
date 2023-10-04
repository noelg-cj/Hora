
import Project from './containers/Project/Project'
import './App.css'
import data from '../Data/data.json'
import Menu from './containers/Menu'

function App() {
  let projectList = [];
  data.forEach(project => projectList.push(project.name));
  return (
    <>
      <div className='h-screen flex items-center'>
        <Menu />
        <Project data= { data[0] } projects={projectList} />
      </div>
    </>
  )
}

export default App
