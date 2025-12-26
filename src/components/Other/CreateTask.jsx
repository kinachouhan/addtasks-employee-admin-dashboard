import { useState } from "react";
export const CreateTask = () => {

    const [formDetails, setFormDetails] = useState({
        title: "",
        date: "",
        assignTo: "",
        category: "",
        description: ""
    });



    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            taskTitle: formDetails.title,
            taskDate: formDetails.date,
            taskAssignTo: formDetails.assignTo,
            category: formDetails.category,
            taskDescription: formDetails.description,
            active: true,
            accepted: false,
            completed: false,
            failed: false
        };

        const employees = JSON.parse(localStorage.getItem("employees")) || [];



        const updatedEmployees = employees.map(emp => {
            if (emp.name === formDetails.assignTo) {
                return {
                    ...emp,
                    tasks: [...emp.tasks, newTask]
                };
            }
            return emp;
        });

        localStorage.setItem("employees", JSON.stringify(updatedEmployees));

        window.dispatchEvent(new Event("taskUpdated"));

        console.log("Task added successfully:", newTask);

        console.log("Updated Employees:", updatedEmployees);

        setFormDetails({
            title: "",
            date: "",
            assignTo: "",
            category: "",
            description: ""
        });
    };



    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }

    return (
        <div >
            <form onSubmit={submitHandler} className="bg-[#333333] w-full flex p-8 justify-between text-sm text-gray-300 mt-10 rounded-sm">
                <div className="w-[40%] flex flex-col gap-4 ">
                    <div className="">
                        <h1>Task Title</h1>
                        <input value={formDetails.title} className="border border-gray-500 w-full p-2 rounded-sm mt-2 outline-none" type="text" placeholder="Enter Task Title" name="title" onChange={changeHandler} />
                    </div>
                    <div>
                        <h1>Date</h1>
                        <input value={formDetails.date} className="border border-gray-500 w-full p-2 rounded-sm mt-2 outline-none" type="date" name="date" onChange={changeHandler} />
                    </div>
                    <div>
                        <h1>Assign to</h1>
                        <input value={formDetails.assignTo} className="border border-gray-500 w-full p-2 rounded-sm mt-2 outline-none" type="text" placeholder="Enter Employee Name" name="assignTo" onChange={changeHandler} />
                    </div>
                    <div>
                        <h1>Category</h1>
                        <input value={formDetails.category} className="border border-gray-500 w-full p-2 rounded-sm mt-2 outline-none" type="text" placeholder="Enter Task Category(ex:- design, dev etc)" name="category" onChange={changeHandler} />
                    </div>

                </div>


                <div className="w-[40%] flex flex-col gap-6 h-full">
                    <div className="">
                        <h1>Description</h1>
                        <textarea value={formDetails.description} onChange={changeHandler} name="description" className="border border-gray-500 w-full h-50 rounded-sm mt-2" placeholder="Enter Task Description"></textarea>
                    </div>
                    <button className="bg-blue-500 px-4 py-2 rounded-sm font-medium">Create Task</button>
                </div>
            </form>
        </div>
    )
}