import './index.css'

const MatchCard = ({match}) => {
  const camelData = {
    competingTeam: match.competing_team,
    competingTeamLogo: match.competing_team_logo,
    date: match.date,
    firstInnings: match.first_innings,
    id: match.id,
    manOfTheMatch: match.man_of_the_match,
    matchStatus: match.match_status,
    result: match.result,
    secondInnings: match.second_innings,
    umpires: match.umpires,
    venue: match.venue,
  }
  return (
    <div className="recent-match-card">
      <img
        className="recent-match-logo"
        src={camelData.competingTeamLogo}
        alt={camelData.competingTeam}
      />
      <p className="latest-match-heading recent-match-status">
        {camelData.competingTeam}
      </p>
      <p className="latest-match-para">{camelData.result}</p>
      <p
        className={camelData.matchStatus === 'Won' ? 'won-color' : 'lost-color'}
      >
        {camelData.matchStatus}
      </p>
    </div>
  )
}

export default MatchCard
