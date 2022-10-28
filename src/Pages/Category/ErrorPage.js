import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    const { data, status, statusText } = error;

    return (
        <div className='text-center'>
            <h1>This is Error Page. </h1>

            <p>{statusText || data}</p>
            <p>{status ? status : "Nothing found"}</p>
            <Link to="/"> <button className="btn btn-success">Home</button></Link>
        </div>
    );
};

export default ErrorPage;