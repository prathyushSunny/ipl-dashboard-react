import './index.css'

const LatestMatch = ({latestMatchDetails}) => {
  const camelData = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  console.log(camelData)

  return (
    <>
      <div className="latest-match-header">
        <div className="match-details match-details-left">
          <p className="latest-match-heading competing-team-name">
            {camelData.competingTeam}
          </p>
          <p className="latest-match-heading competing-match-date">
            {camelData.date}
          </p>
          <p className="latest-match-para">{camelData.venue}</p>
          <p className="latest-match-para">{camelData.result}</p>
        </div>
        <div className="match-details match-details-right">
          <img
            src={camelData.competingTeamLogo}
            alt={camelData.competingTeam}
            className="competing-team-logo"
          />
        </div>
      </div>
      {/* <hr className="hr-element" /> */}
      <div className="latest-match-footer">
        <p className="latest-match-heading">First Innings</p>
        <p className="latest-match-para">{camelData.firstInnings}</p>
        <p className="latest-match-heading">Second Innings</p>
        <p className="latest-match-para">{camelData.secondInnings}</p>
        <p className="latest-match-heading">Man of the Match</p>
        <p className="latest-match-para">{camelData.manOfTheMatch}</p>
        <p className="latest-match-heading">Umpires</p>
        <p className="latest-match-para">{camelData.umpires}</p>
      </div>
    </>
  )
}

export default LatestMatch
