import { useContext } from "react"
import { AuthContext } from "../../context/AuthContextProvider"

export const AllTasks = () => {

    const authData = useContext(AuthContext)

    console.log(authData)

    return (
        <div  className="bg-[#333333] mt-5 p-5 flex flex-col gap-4 rounded-sm h-55 ">

            <div className="flex justify-between items-center bg-red-400 p-3 rounded-sm ">
                <h1>Employee Name</h1>
                <p>Active Task</p>
                <h2>Completed Task</h2>
                <h2>Accepted Task</h2>
                <h2>Failed Task</h2>
            </div>

           <div id="task-list" className="overflow-auto flex flex-col gap-4 ">
             {
                authData.employees.map((employee) => (
                    <div key={employee.id} className="flex justify-between items-center border border-blue-500 p-3 rounded-sm ">
                        <h1 className="font-semibold">{employee.name}</h1>
                        <p className="bg-yellow-500 px-4 p-1 rounded">{employee.taskCounts.active}</p>
                        <h2 className="bg-green-500 px-4 p-1 rounded">{employee.taskCounts.completed}</h2>
                        <h2 className="bg-blue-500 px-4 p-1 rounded">{employee.taskCounts.accepted}</h2>
                        <h2 className="bg-red-600 px-4 p-1 rounded">{employee.taskCounts.failed}</h2>
                    </div>
                ))
            }
           </div>


        </div>
    )
}