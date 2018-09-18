import React, {Component} from 'react'
import {
  fetchData,
  getEthnicityPieChart,
  getProgramPercentagePieChart,
  getCostByIncomeChart,
  getMedianDebtByIncome
} from '../store'
import {connect} from 'react-redux'
import PieChart from './pie-chart'
import BarChart from './bar-chart'

class Homepage extends Component {
  componentDidMount() {
    this.props.getData()
  }
  render() {
    const {
      data,
      isLoading,
      ethnicityPieChartData,
      programPercentagePieChartData,
      costByIncomeData,
      medianDebtByIncome
    } = this.props
    return (
      <div>
        {!isLoading && (
          <div>
            <h1>Welcome to the Homepage</h1>
            <h2>Name: {data.school.name}</h2>
            <h2>Website: {data.school.school_url}</h2>
            <h2>City: {data.school.city}</h2>
            <h2>State: {data.school.state}</h2>
            <h2>Zip: {data.school.zip}</h2>
            <h2>Total # of Students: {data.latest.student.size}</h2>
            <br />
            <br />
            <PieChart data={ethnicityPieChartData} />
            <br />
            <br />
            <PieChart data={programPercentagePieChartData} />
            <br />
            <br />
            <BarChart data={costByIncomeData} />
            <br />
            <br />
            <BarChart data={medianDebtByIncome} />
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  data: state.data.all,
  isLoading: state.data.isLoading,
  ethnicityPieChartData: getEthnicityPieChart(state),
  programPercentagePieChartData: getProgramPercentagePieChart(state),
  costByIncomeData: getCostByIncomeChart(state),
  medianDebtByIncome: getMedianDebtByIncome(state)
})

const mapDispatch = dispatch => ({
  getData: () => dispatch(fetchData())
})

export default connect(mapState, mapDispatch)(Homepage)
