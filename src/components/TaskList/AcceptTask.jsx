
export const AcceptTask = ({data})=>{
     return(
        <div className="bg-red-400 w-[350px] h-full rounded-xl shrink-0 p-5">
                <div className="flex justify-between text-sm">
                    <h1 className="bg-red-600 rounded px-4 py-2">{data.category}</h1>
                    <h2>{data.taskDate}</h2>
                </div>
                <h1 className="font-bold mt-5 text-2xl">{data.taskTitle}</h1>
                <p className="mt-2 text-sm">Description: {data.taskDescription}</p>
                <div className="flex gap-2 text-sm mt-4">
                    <button className="bg-green-500 py-2 px-4 rounded-sm">Mark as Completed</button>
                    <button className="bg-red-500 py-2 px-4 rounded-sm">Mark as Failed</button>
                </div>
            </div>
     )
}