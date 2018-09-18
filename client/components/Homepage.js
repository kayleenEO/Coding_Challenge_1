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
            <section
              id="home-rel"
              className="hero is-primary is-medium is-bold"
            >
              <div className="hero-body">
                <div id="hero-title" className="container body-center">
                  <div className="columns">
                    <div className="column">
                      <br />
                      <br />
                      <br />
                      <h1 className="title">{data.school.name}</h1>
                      <h2 className="subtitle">{data.school.school_url}</h2>
                      <h2 className="address">{`${data.school.city}, ${
                        data.school.state
                      } ${data.school.zip}`}</h2>
                      <h2>
                        {data.latest.student.size} undergraduates enrolled
                      </h2>
                    </div>
                    <div className="column is-centered">
                      <PieChart data={programPercentagePieChartData} />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="home-bottom-section" className="section">
              <div className="container">
                <div className="columns">
                  <div className="column box">
                    <BarChart data={medianDebtByIncome} />
                  </div>
                  <div className="column box">
                    <PieChart data={ethnicityPieChartData} />
                  </div>
                  <div className="column box">
                    <BarChart data={costByIncomeData} />
                  </div>
                </div>
              </div>
            </section>
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
