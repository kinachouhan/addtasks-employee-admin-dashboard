export const TaskListNumbers = ({data}) => {
    return (
        <div className="mt-10 flex  gap-8 text-semibold">
            <div className="bg-red-400 w-[45%] p-6 px-8 rounded-xl">
                <h1 className="text-3xl font-bold">{data?.taskCounts?.new || 0}</h1>
                <h1 className="text-xl font-semibold">New Task</h1>
            </div>
            <div className="bg-blue-400 w-[45%] p-6 px-8 rounded-xl">
                <h1 className="text-3xl font-bold">{data?.taskCounts?.completed || 0}</h1>
                <h1 className="text-xl font-semibold">Completed Task</h1>
            </div>
            <div className="bg-green-400 w-[45%] p-6 px-8 rounded-xl">
                <h1 className="text-3xl font-bold">{data?.taskCounts?.active || 0}</h1>
                <h1 className="text-xl font-semibold">Accepted Task</h1>
            </div>
            <div className="bg-yellow-400 text-black w-[45%] p-6 px-8 rounded-xl">
                <h1 className="text-3xl font-bold">{data?.taskCounts?.failed || 0}</h1>
                <h1 className="text-xl font-semibold">Failed Task</h1>
            </div>
        </div>
    )
}