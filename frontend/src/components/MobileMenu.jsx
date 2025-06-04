import { X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const MobileMenu = ({ setShowMenu, showMenu }) => {
    return (
        <div className="fixed z-10 top-0 left-0 w-full min-h-screen bg-white text-gray-900 ">
            <div className="flex justify-end py-5 px-5">
                <X
                    onClick={() => setShowMenu(!showMenu)}
                    className="cursor-pointer"
                ></X>
            </div>
            <ul className="my-32 flex flex-col gap-8 items-center justify-start text-2xl">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Jobs</li>
                <li className="cursor-pointer">Browse</li>
                <div className="flex items-center gap- mt-4">
                    <Link to="/login">
                        <Button variant="outline">Login</Button>
                    </Link>
                    <Link to="/signup">
                        <Button className="bg-[#6A38C2] hover:bg-[#5b2ea9]">
                            Signup
                        </Button>
                    </Link>
                </div>
            </ul>


        </div>

    )
}

export default MobileMenu