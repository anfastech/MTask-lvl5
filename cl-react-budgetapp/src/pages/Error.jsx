// rrd imports
import { Link, useNavigate, useRouteError } from "react-router-dom"

// library
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error">
      <h1>Houston, we have a problem!</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <span>Go Back</span>
          <ArrowUturnLeftIcon width={20}/>
        </button>
        <Link to="/" className="btn btn--primary">
          <HomeIcon width={20}/>
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  )
}

export default Error
