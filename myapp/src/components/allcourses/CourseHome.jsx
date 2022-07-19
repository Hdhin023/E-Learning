import React from "react"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"

const CourseHome = () => {
  return (
    <>
      <h2> Choose Courses </h2>
      <OnlineCourses />
      <CoursesCard />
    </>
  )
}

export default CourseHome
