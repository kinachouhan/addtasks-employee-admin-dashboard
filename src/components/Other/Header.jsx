import  { useState } from 'react'
export const Header = (props) => {

    const userName = props.data?.name || "Admin";

    const handleClick = () => {
        localStorage.removeItem("loggedInUser");
        props.changeUser("");
    }

    return (
        <div>
            <div className="flex justify-between items-end">
                <h1 className="flex flex-col text-2xl font-medium ">Hi, <span className="text-3xl font-semibold">{userName} 🖐️</span></h1>
                <button onClick={handleClick} className="bg-red-500 rounded-sm px-4 py-2 font-medium">Logout</button>
            </div>
        </div>
    )
}