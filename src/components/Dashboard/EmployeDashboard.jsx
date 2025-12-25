import { Header } from "../Other/Header"
import { TaskListNumbers } from "../Other/TaskListNumbers"
import { TaskList } from "../TaskList/TaskList"

export const EmployeDashboard = (props) => {
    return(
        <div className="bg-[#1C1C1C] p-10 h-screen text-white"> 
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskListNumbers data={props.data} />
            <TaskList data={props.data} />
        </div>
    )
}