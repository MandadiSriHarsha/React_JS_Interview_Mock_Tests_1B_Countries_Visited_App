import {Component} from 'react'

import './App.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

const RenderCountriesList = props => {
  const {eachitem, onUpdateCountryStatus} = props
  const updateCountryStatus = () => {
    onUpdateCountryStatus(eachitem.id)
  }
  return (
    <li key={eachitem.id} className="countries-list-item">
      <p className="countries-list-item-heading">{eachitem.name}</p>
      {eachitem.isVisited ? (
        <p className="visited-class">Visited</p>
      ) : (
        <button
          type="button"
          onClick={updateCountryStatus}
          className="visit-class"
        >
          Visit
        </button>
      )}
    </li>
  )
}

const RenderNoCountriesFoundCard = () => (
  <div className="no-countries-found-bg-container">
    <p className="no-countries-visited-text">No Countries Visited Yet</p>
  </div>
)

const RenderVisitedCountriesList = props => {
  const {eachitem, onRemoveCountry} = props
  const removeCountry = () => {
    onRemoveCountry(eachitem.id)
  }
  return (
    <li key={eachitem.id} className="visited-country-item">
      <img
        src={eachitem.imageUrl}
        alt="thumbnail"
        className="visited-country-image"
      />
      <div className="visited-country-content-card">
        <p className="visited-country-name">{eachitem.name}</p>
        <button className="remove-button" type="button" onClick={removeCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}

class App extends Component {
  state = {updatedCountriesList: initialCountriesList}

  onUpdateCountryStatus = id => {
    const {updatedCountriesList} = this.state
    const newList = updatedCountriesList.map(eachitem => {
      if (eachitem.id === id) {
        const newObject = {
          id: eachitem.id,
          imageUrl: eachitem.imageUrl,
          name: eachitem.name,
          isVisited: !eachitem.isVisited,
        }
        return newObject
      }
      return eachitem
    })
    this.setState({updatedCountriesList: newList})
  }

  onRemoveCountry = id => {
    const {updatedCountriesList} = this.state
    const newList = updatedCountriesList.map(eachitem => {
      if (eachitem.id === id) {
        const newObject = {
          id: eachitem.id,
          imageUrl: eachitem.imageUrl,
          name: eachitem.name,
          isVisited: !eachitem.isVisited,
        }
        return newObject
      }
      return eachitem
    })
    this.setState({updatedCountriesList: newList})
  }

  render() {
    const {updatedCountriesList} = this.state
    const visitedCountriesList = updatedCountriesList.filter(
      eachitem => eachitem.isVisited === true,
    )
    return (
      <div className="home-page-bg-container">
        <>
          <h1 className="countries-list-heading">Countries</h1>
          <ul className="countries-list-card">
            {updatedCountriesList.map(eachitem => (
              <RenderCountriesList
                key={eachitem.id}
                eachitem={eachitem}
                onUpdateCountryStatus={this.onUpdateCountryStatus}
              />
            ))}
          </ul>
        </>
        <>
          <h1 className="countries-list-heading">Visited Countries</h1>
          {visitedCountriesList.length > 0 ? (
            <ul className="visited-countries-card">
              {visitedCountriesList.map(eachitem => (
                <RenderVisitedCountriesList
                  eachitem={eachitem}
                  onRemoveCountry={this.onRemoveCountry}
                  key={eachitem.id}
                />
              ))}
            </ul>
          ) : (
            RenderNoCountriesFoundCard()
          )}
        </>
      </div>
    )
  }
}

export default App
