import { useState } from "react"

export const Login = ({handleLogin}) => {

    const [formDetails, setFormDetails] = useState({
        email: "",
        password: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        handleLogin(formDetails.email, formDetails.password)
        setFormDetails({
            email: "",
            password: ""
        })
    }

    return (
        <div className="flex h-screen justify-center items-center bg-black">
            <div className="flex justify-center items-center" >
                <form
                    onSubmit={handlerSubmit}

                    className="flex flex-col gap-8 border border-blue-500 p-15 rounded-xl   ">
                    <input
                        value={formDetails.email}
                        onChange={handleInput}
                        className="border border-blue-500 placeholder:text-gray-500 outline-none text-white py-4 px-10 rounded-full" placeholder="Enter Your Email" type="email" required name="email" />
                    <input
                        value={formDetails.password}
                        onChange={handleInput}
                        className="border border-blue-500 placeholder:text-gray-500 outline-none text-white py-4 px-10 rounded-full" placeholder="Enter Your Password" type="password" required name="password" />
                    <button className="bg-blue-500 p-2 text-white rounded-xl">Login</button>
                </form>
            </div>
        </div>
    )
}