import {Loader} from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, teamsList: {}}

  componentDidMount() {
    this.fetchFromApi()
  }

  fetchFromApi = async () => {
    const fetchedData = await fetch('https://apis.ccbp.in/ipl/')
    const jsonData = await fetchedData.json()
    const {teams} = jsonData
    console.log(teams)
    const modifiedTeamsData = teams.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }))
    console.log(modifiedTeamsData)
    this.setState({isLoading: false, teamsList: modifiedTeamsData})
  }

  render() {
    const {isLoading, teamsList} = this.state
    return (
      <div className="ipl-main-container">
        <div className="ipl-internal-content">
          <div className="ipl-title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <p className="ipl-title-text">IPL Dashboard</p>
          </div>
          <div className="teams-list-container">
            {isLoading ? (
              <h1 className="loading-txt">Loading...</h1>
            ) : (
              teamsList.map(team => <TeamCard key={team.id} team={team} />)
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
