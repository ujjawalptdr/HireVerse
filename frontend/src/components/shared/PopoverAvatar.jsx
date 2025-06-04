import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/authSlice";
import emptyProfileImage from "../../assets/Empty-Profile-Pic.webp"


const PopoverAvatar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const response = await axios.get(`https://hireverse.onrender.com/api/v1/user/logout`, { withCredentials: true });
            if (response.data.success) {
                dispatch(setUser(null))
                navigate("/");
                toast.success(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarImage
                        src={user?.profile?.profilePhoto || emptyProfileImage}
                        alt="@shadcn"
                    />
                </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80 ">
                <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                        <AvatarImage
                            src={user?.profile?.profilePhoto}
                            alt="@shadcn"
                        />
                    </Avatar>
                    <div>
                        <h4 className="font-medium">{user?.fullname}</h4>
                        <p className="text-sm text-muted-foreground">
                            {user?.profile?.bio}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col text-gray-600 items-start mt-2">
                    {
                        user && user.role === "student" && (
                            <div className="flex items-center gap-3">
                                <User2 />
                                <Button variant="link" className="font-semibold">
                                    <Link to="/profile">View Profile</Link>
                                </Button>
                            </div>
                        )
                    }

                    <div className="flex items-center gap-3">
                        <LogOut />
                        <Button onClick={logoutHandler} variant="link" className="font-semibold">
                            Logout
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default PopoverAvatar