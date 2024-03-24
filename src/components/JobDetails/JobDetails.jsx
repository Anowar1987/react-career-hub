import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt =parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    return (
        <div>
            <h2>Job details of Id: {id}</h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border grid md:col-span-3"></div>
                <div className="border"></div>


            </div>



        </div>
    );
};

export default JobDetails;