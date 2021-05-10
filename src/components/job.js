import '../job.css';

function Job(props) {
  return (
    <div className="job">
      <img src="" alt="" />
      <h3 className="job__title">{props.title}</h3>
      <p className="job__company-name">BIG Systems</p>
      <p className="job__location">{props.location}</p>
    </div>
  )
}

export default Job;