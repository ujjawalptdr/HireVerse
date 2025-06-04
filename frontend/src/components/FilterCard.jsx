import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { Button } from './ui/button'

const filterData = [
    {
        filterType: "location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer", "Data Engineer"]
    },
    {
        filterType: "salary",
        array: ["0-40k", "42-1lakh", "1-5lakh"]
    }
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const dispatch = useDispatch();
    const changeHandler = (value) => {
        setSelectedValue(value);
    }

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue]);

    return (
        <div className="w-full p-4 bg-white rounded-md shadow-md md:max-w-lg mx-auto">
            <h1 className="font-bold text-xl mb-4">Filter Jobs</h1>
            <hr className="mb-4 border-gray-300" />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {filterData.map((data, index) => (
                    <div key={index} className="mb-6">
                        <h2 className="font-semibold text-lg capitalize mb-3">
                            {data.filterType}
                        </h2>
                        <div className="flex flex-wrap gap-2 md:flex-col">
                            {data.array.map((item, idx) => {
                                const itemId = `r${index}-${idx}`
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-1.5 md:space-x-2"
                                    >
                                        <RadioGroupItem value={item} id={itemId} />
                                        <Label htmlFor={itemId}>{item}</Label>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                ))}
            </RadioGroup>
            <div>
                <Button onClick={() => { dispatch(setSearchedQuery("")); setSelectedValue(""); }}
                    className="bg-gray-700 text-white">Remove Filter</Button>
            </div>
        </div>
    )
}

export default FilterCard
