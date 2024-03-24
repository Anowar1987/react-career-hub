

const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
   
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
    <div className="flex text-xl font-semibold text-[#757575]">
        <p>{location}</p>
        <p>{salary}</p>
    </div>
    <div className="card-actions">
      <button className="btn bg-[#7373FF] text-xl font-semibold text-[white]">View Details</button>
    </div>
  </div>
</div>
    );
};

export default Job;