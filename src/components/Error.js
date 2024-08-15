import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const error = useRouteError();

    console.log(error)
  return (
    <>
    <div>Error Oops - something went wrong </div>
    <h4>{error.data}</h4>
    </>
    
  )
}

export default Error