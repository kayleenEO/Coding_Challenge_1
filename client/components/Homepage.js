import React, {Component} from 'react'
import {
  fetchData,
  getEthnicityPieChart,
  getProgramPercentagePieChart,
  getCostByIncomeChart,
  getMedianDebtByIncome
} from '../store'
import {connect} from 'react-redux'
import {Footer, PieChart, BarChart} from './index'

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
            <section id="home-rel" className="hero is-primary is-small is-bold">
              <div className="hero-body">
                <div id="hero-title" className="container body-center">
                  <div className="columns">
                    <div className="column">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <h1 className="title is-size-1">{data.school.name}</h1>
                      <h2 className="subtitle is-size-3">
                        {data.school.school_url}
                      </h2>
                      <br />
                      <br />

                      <h2 className="is-size-5">{`${data.school.city}, ${
                        data.school.state
                      } ${data.school.zip}`}</h2>
                      <h2 className="is-size-5 content">
                        <span id="student-num" className="is-size-3">
                          {data.latest.student.size}
                        </span>
                        {'  '}
                        Undergraduates currently enrolled
                      </h2>
                    </div>
                    <div className="column">
                      <div id="header-card" className="card">
                        <PieChart
                          data={programPercentagePieChartData}
                          title="Program Percentages"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="home-bottom-section" className="section">
              <div className="container">
                <div className="columns">
                  <div className="column">
                    <BarChart
                      data={medianDebtByIncome}
                      title="Median Debt By Income"
                    />
                  </div>
                  <div className="column">
                    <PieChart data={ethnicityPieChartData} />
                  </div>
                  <div className="column">
                    <BarChart
                      data={costByIncomeData}
                      title="Net Price by Income"
                    />
                  </div>
                </div>
              </div>
            </section>
            <Footer />
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
