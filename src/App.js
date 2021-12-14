import { useState } from "react"
import { Route, Routes, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"
import "./styles.css"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  console.log({ hiredPeople })

  const navigate = useNavigate()

  function hireAPerson(person) {
    setHiredPeople([...hiredPeople, person])
    navigate("/")
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to="/">Dashboard</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/view/:id"
          element={<PersonProfile hireAPerson={hireAPerson} />}
        />
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} />}
        />
      </Routes>
    </>
  )
}
