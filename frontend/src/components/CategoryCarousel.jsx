import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <motion.div
            initial={{ scale: .5, opacity: 0 }}
            animate={{ scale: 1, opacity: 100 }}
            transition={{ duration: 1, delay: 0.3 }}
            className=''
        >

            <Carousel className='max-w-xs sm:max-w-xs lg:max-w-xl mx-auto z-10'>
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className='basis-1/2 md:basis-1/2 lg:basis-1/3'>
                                <Button onClick={() => searchJobHandler(cat)} variant="outline" className='rounded-full'>{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </motion.div>
    )
}

export default CategoryCarousel