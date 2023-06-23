/* eslint-disable react/prop-types */



const GitItem = ({ title,url}) => {
  return (
    <div className="card">
    <img src={url} alt={title}/>
    
    </div>
    )
}
export default GitItem