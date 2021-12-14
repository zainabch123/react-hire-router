import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props

  const url = person.url.slice(0, -1)

  const id = url.substring(url.lastIndexOf("/") + 1)

  return (
    <li>
      <h3>{person.name}</h3>
      {person.wage && `£${person.wage}`}
      <Link to={`/view/${id}`} state={{ person }}>
        View Profile
      </Link>
    </li>
  )
}

export default PeopleListItem
