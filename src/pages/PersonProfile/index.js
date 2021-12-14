import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import HireForm from "./components/HireForm"

function PersonProfile(props) {
  const { hireAPerson } = props

  const [person, setPerson] = useState(null)

  const location = useLocation()

  console.log({ person, location })

  useEffect(() => {
    if (location.state) {
      const { person } = location.state

      setPerson(person)
    } else {
      const { pathname } = location

      const id = pathname.substring(pathname.lastIndexOf("/" + 1))

      fetch(`https://swapi.dev/api/people/${id}`)
        .then(res => res.json())
        .then(data => setPerson(data))
    }
  }, [location])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>{person.name}</h2>
      <HireForm person={person} hireAPerson={hireAPerson} />
    </article>
  )
}

export default PersonProfile
