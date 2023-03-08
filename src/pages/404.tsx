import { Link } from 'react-router-dom'

function NotFound404() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-detailsmt-3">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="error-actions mt-4">
              <Link to={'/'} className="btn btn-primary btn-lg">
                <span className="glyphicon glyphicon-home"></span>
                Take Me Home{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound404
