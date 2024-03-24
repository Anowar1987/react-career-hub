import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
   
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-extrabold text-2xl">{job_title}</h2>
    <p className="text-xl font-semibold text-[#757575]">{company_name}</p>
    <div>
        <button className="text-base font-extrabold text-[#7E90FE] border-[1px] px-5 py-2 rounded mr-4">{remote_or_onsite}</button>
        <button className="text-base font-extrabold text-[#7E90FE] border-[1px] px-5 py-2 rounded mr-4">{job_type}</button>
    </div>
    <div className="mt-4 flex gap-6">
        <h2 className="flex"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
        <h2 className="flex"><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>{salary}</h2>
    </div>
    
    <div className="card-actions">
    <Link to={`/job/${id}`}>
    <button className="btn bg-[#7373FF] text-xl font-semibold text-[white]">View Details</button>
    </Link>
    </div>
  </div>
</div>
    );
};

export default Job;