import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  return (
    <Link to={`/team-matches/${team.id}`} className="team-card">
      <img className="team-image" src={team.teamImageUrl} alt={team.id} />
      <p className="team-name">{team.name}</p>
    </Link>
  )
}

export default TeamCard
