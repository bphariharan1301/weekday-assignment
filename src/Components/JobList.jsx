import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";

// Custom Components
import JobCard from "./JobCard";
import DropDown from "./DropDown";
import Filters from "./Filters";

// Custom CSS
import "./styles.css";

function JobList() {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(false);
    const [offset, setOffset] = useState(0);
    const [minExpValues, setMinExpValues] = useState([]);
    const [companyNames, setCompanyNames] = useState([]);
    const [locations, setLocations] = useState([]);
    const [salaries, setSalaries] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const [roles, setRoles] = useState([]);

    const [filters, setFilters] = useState({
        minExp: [],
        companyName: [],
        location: [],
        minJdSalary: [],
        salaryCurrencyCode: [],
        jobRole: [],
    });

    const fetchJobs = async () => {
        try {
            const response = await fetch(
                "https://api.weekday.technology/adhoc/getSampleJdJSON",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        limit: 10,
                        offset: offset,
                    }),
                }
            );
            if (!response.ok) {
                throw new Error("Network Response was not ok");
            }

            const data = await response.json();
            console.log("Data", data);

            setJobs((prevJobs) => [...prevJobs, ...data.jdList]);
            setOffset((prevOffset) => prevOffset + 10);
            setIsLoading(false);
            const uniqueMinExpValues = [
                ...new Set(data.jdList.map((job) => job.minExp)),
            ];
            setMinExpValues(uniqueMinExpValues);

            const uniqueCompanyNames = [
                ...new Set(data.jdList.map((job) => job.companyName)),
            ];
            setCompanyNames(uniqueCompanyNames);

            const uniqueLocations = [
                ...new Set(data.jdList.map((job) => job.location)),
            ];
            setLocations(uniqueLocations);

            const uniqueSalaries = [
                ...new Set(data.jdList.map((job) => job.minJdSalary)),
            ];
            setSalaries(uniqueSalaries);

            const uniqueCurrencies = [
                ...new Set(data.jdList.map((job) => job.salaryCurrencyCode)),
            ];
            setCurrencies(uniqueCurrencies);

            const uniqueRoles = [
                ...new Set(data.jdList.map((job) => job.jobRole)),
            ];
            setRoles(uniqueRoles);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <section id="job-list">
            <Filters />
            <JobCard />
        </section>
    );
}

export default JobList;
