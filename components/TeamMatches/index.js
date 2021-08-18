import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatches: {}}

  componentDidMount() {
    this.fetchTeamMatches()
  }

  fetchTeamMatches = async () => {
    const {
      match: {
        params: {id},
      },
    } = this.props
    const result = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonData = await result.json()
    console.log(jsonData)
    const jsonDataCamel = {
      latestMatchDetails: jsonData.latest_match_details,
      recentMatches: jsonData.recent_matches,
      teamBannerUrl: jsonData.team_banner_url,
    }
    this.setState({isLoading: false, teamMatches: jsonDataCamel})
  }

  getTeamBgClass = () => {
    let returnClass = ''
    const {
      match: {
        params: {id},
      },
    } = this.props
    if (id === 'RCB' || id === 'KXP') returnClass = 'rcb-kxp'
    else if (id === 'CSK') returnClass = 'csk'
    else if (id === 'MI' || id === 'DC') returnClass = 'mi-dc'
    else if (id === 'SH') returnClass = 'srh'
    else if (id === 'KKR') returnClass = 'kkr'
    else if (id === 'RR') returnClass = 'rr'
    return returnClass
  }

  getTeamName = () => {
    const {
      match: {
        params: {id},
      },
    } = this.props
    let teamName = ''
    if (id === 'SH') teamName = 'Sunrisers Hyderabad'
    else if (id === 'MI') teamName = 'Mumbai Indians'
    else if (id === 'CSK') teamName = 'Chennai Super Kings'
    else if (id === 'RR') teamName = 'Rajasthan Royals'
    else if (id === 'KKR') teamName = 'Kolkata Knight Riders'
    else if (id === 'KXP') teamName = 'Kings XI Punjab'
    else if (id === 'RCB') teamName = 'Royal Challengers Bangalore'
    else if (id === 'DC') teamName = 'Delhi Capitals'
    return teamName
  }

  render() {
    const {isLoading, teamMatches} = this.state
    const {latestMatchDetails} = teamMatches
    const {recentMatches} = teamMatches
    const {
      match: {
        params: {id},
      },
    } = this.props
    return (
      <div
        className={`team-matches-details-container ${this.getTeamBgClass()}`}
      >
        {isLoading ? (
          <h1 className="loading-txt">Loading...</h1>
        ) : (
          <>
            <h1 className="loading-txt main-heading-team-name">
              {this.getTeamName()}
            </h1>
            <img
              className="team-banner"
              src={teamMatches.teamBannerUrl}
              alt={id}
            />
            <h1 className="latest-matches-txt">Latest Matches</h1>
            <div className="latest-match-container">
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
            <div className="recent-matches-details">
              {recentMatches.map(match => (
                <MatchCard match={match} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
