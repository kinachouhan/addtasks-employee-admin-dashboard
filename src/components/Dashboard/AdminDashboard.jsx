import { AllTasks } from "../Other/AllTasks"
import { CreateTask } from "../Other/CreateTask"
import { Header } from "../Other/Header"

export const AdminDashboard = (props) => {
    return(
        <div className="bg-[#1C1C1C] p-10 h-screen text-white">
            <Header changeUser={props.changeUser} />
            <CreateTask/>
            <AllTasks/>

            
        </div>
    )
}