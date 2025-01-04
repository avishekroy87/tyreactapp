import React, {useEffect, useState} from "react";

const Course = () => {
    const [course, setCourse] = useState('')
    useEffect(() => {
        setCourse(() => {'Physics'})
    },[])
    return(
        <>The course name is {course}</>
    )
}
export default  Course