import { AcceptTask } from "./AcceptTask"
import { CompletedTask } from "./CompleteTask"
import { FailedTask } from "./FailedTask"
import { NewTask } from "./NewTask"

export const TaskList = ({ data }) => {

    return (
        <div id="task-list" className="h-[50%] w-full mt-10 flex gap-5 py-5 overflow-x-scroll">

            {
                data.tasks.map((task , index) => {
                    if (task.accepted) {
                        return <AcceptTask key={index} data={task} />
                    }
                    if (task.completed) {
                        return <CompletedTask key={index} data={task} />
                    }
                    if (task.failed) {
                        return <FailedTask key={index} data={task} />
                    }
                    if (task.active) {
                        return <NewTask key={index} data={task} />
                    }
                }

                )}
        </div>
    )
}