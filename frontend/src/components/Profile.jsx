import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact2, Mail, PenBox } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';
import emptyProfileImage from "../assets/Empty-Profile-Pic.webp"



const Profile = () => {
    useGetAppliedJobs();

    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />

            <div className="max-w-4xl mx-auto bg-white shadow-lg border border-gray-200 rounded-2xl my-8 p-6 sm:p-8">
                {/* Profile Section */}
                <div className="flex flex-col sm:flex-row items-center sm:justify-between">
                    <div className="flex items-center gap-6">
                        <Avatar className="h-24 w-24 sm:h-28 sm:w-28">
                            <AvatarImage src={user?.profile?.profilePhoto || emptyProfileImage} />
                        </Avatar>
                        <div>
                            <h1 className="font-semibold text-2xl">{user?.fullname}</h1>
                            <p className="text-gray-600 text-sm sm:text-base">
                                {user?.profile?.bio}
                            </p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} variant="outline" className="mt-4  sm:mt-0">
                        <PenBox className="mr-2" /> Edit Profile
                    </Button>
                </div>

                {/* Contact Details */}
                <div className="mt-6">
                    <h2 className="font-semibold text-lg mb-2">Contact Information</h2>
                    <div className="flex flex-col gap-3 text-gray-700">
                        <div className="flex items-center gap-2">
                            <Mail className="text-gray-500" />
                            <span>{user?.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Contact2 className="text-gray-500" />
                            <span>{user?.phoneNumber}</span>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-6">
                    <h2 className="font-semibold text-lg mb-2">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {(user?.profile?.skills?.length != undefined) && (user?.profile?.skills?.length != 0) ? user?.profile?.skills?.map((skill, index) => (
                            <Badge key={index}>{skill}</Badge>
                        )) : <span className="text-gray-500">NA</span>}
                    </div>

                </div>

                {/* Resume */}
                <div className="mt-6 flex flex-col">
                    <Label className="font-semibold text-lg">Resume</Label>
                    {user?.profile?.resume ? (
                        <a href={user?.profile?.resume} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{user?.profile?.resumeOriginalName}</a>
                    ) : <span className="text-gray-500">NA</span>}
                </div>
            </div>

            {/* Applied Jobs Section */}
            <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-2xl my-6 p-6">
                <h2 className="text-lg font-semibold mb-4">Applied Jobs</h2>
                <AppliedJobTable />
            </div>

            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
};

export default Profile;
