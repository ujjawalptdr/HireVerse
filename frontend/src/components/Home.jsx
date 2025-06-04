import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import { useGetAllJobs } from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, [])


  return (
    <div className="relative overflow-hidden">

      {/* Background decorative circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute -top-20 -left-20 w-80 h-80 z-10 bg-purple-300 rounded-full"
      />

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-[570px] -right-20 z-10 w-60 h-60 md:w-80 md:h-80 bg-purple-400 rounded-full "
      />
      <Navbar />
      <HeroSection />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
