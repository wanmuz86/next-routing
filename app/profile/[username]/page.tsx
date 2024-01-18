import React from 'react'

// The parameter is retrieved from the URL through props
// In the second part, we speciy the data type of the props

export default function ProfileUser({params}:{params:{username:String}}) {
  return (
    <div>
        <h1>Profile with parameter page</h1>
        <p>This my profile with {params.username}</p>
    </div>
  )
}
