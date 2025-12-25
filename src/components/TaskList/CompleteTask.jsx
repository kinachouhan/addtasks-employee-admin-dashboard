
export const CompletedTask = ({data}) => {
    return (
        <div className="bg-green-400 w-[350px] h-full rounded-xl shrink-0 p-5">
            <div className="flex justify-between text-sm">
                <h1 className="bg-red-600 rounded px-4 py-2">{data.category}</h1>
                <h2>{data.taskDate}</h2>
            </div>
            <h1 className="font-bold mt-5 text-2xl">{data.taskTitle}</h1>
            <p className="mt-2 text-sm">Description: {data.taskDescription}</p>
             <div className=" text-sm mt-4 w-full">
                    <button className="bg-green-700 py-2 px-4 rounded-sm w-full">Completed</button>
             </div>
        </div>
    )
}