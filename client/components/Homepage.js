import React, {Component} from 'react'
import {fetchData, getEthnicityPieChart} from '../store'
import {connect} from 'react-redux'
import PieChart from './program-data-chart'

class Homepage extends Component {
  componentDidMount() {
    this.props.getData()
  }
  render() {
    const {data, isLoading, ethnicityPieChartData} = this.props
    return (
      <div>
        <h1>Welcome to the Homepage</h1>
        {!isLoading && (
          <div>
            <h2>Name: {data.school.name}</h2>
            <h2>Website: {data.school.school_url}</h2>
            <h2>City: {data.school.city}</h2>
            <h2>State: {data.school.state}</h2>
            <h2>Zip: {data.school.zip}</h2>
            <br />
            <br />
            <PieChart data={ethnicityPieChartData} />
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  data: state.data.all,
  isLoading: state.data.isLoading,
  ethnicityPieChartData: getEthnicityPieChart(state)
})

const mapDispatch = dispatch => ({
  getData: () => dispatch(fetchData())
})

export default connect(mapState, mapDispatch)(Homepage)
