import axios from 'axios'
import initialState from './initial-state'

//ACTION TYPES

const REQUEST_DATA = 'REQUEST_DATA'
const RECEIVE_DATA = 'RECEIVE_DATA'

//ACTION CREATORS

const requestData = () => ({
  type: REQUEST_DATA
})
const receiveData = data => ({type: RECEIVE_DATA, data})

//THUNK CREATORS

const API_KEY = 'HMAlV7xizKvwY2aSKPTzYjAm74g7EgbEt11GifVK'
const COMPOSED_URL = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=${API_KEY}`

export const fetchData = () => async dispatch => {
  dispatch(requestData())
  try {
    const {data} = await axios.get(COMPOSED_URL)
    dispatch(receiveData(data || []))
  } catch (error) {
    console.error(error)
  }
}

//REDUCERS

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true
      }
    case RECEIVE_DATA:
      return {
        ...state,
        isLoading: false,
        all: action.data.results[0]
      }
    default:
      return state
  }
}

//SELECTORS

export const getProgramPercentagePieChart = state => {
  const percentage = state.data.all.latest.academics.program_percentage
  return Object.keys(percentage).reduce((result, percent) => {
    if (percentage[percent] !== 0) {
      result.push({
        x: percent,
        y: percentage[percent]
      })
    }
    return result
  }, [])
}

export const getEthnicityPieChart = state => {
  const demographics = state.data.all.latest.student.demographics.race_ethnicity
  return Object.keys(demographics).reduce((result, demo) => {
    if (demographics[demo] !== 0) {
      result.push({
        x: demo,
        y: demographics[demo]
      })
    }
    return result
  }, [])
}

export const getCostByIncomeChart = state => {
  const incomeData = state.data.all.latest.cost.net_price.public.by_income_level
  return Object.keys(incomeData).map(income => {
    if (incomeData[income] !== 0) {
      return {
        x: income,
        y: incomeData[income]
      }
    }
  })
}

export const getMedianDebtByIncome = state => {
  const medianDebtData = state.data.all.latest.aid.median_debt.income
  return Object.keys(medianDebtData).map(debt => {
    if (medianDebtData[debt] !== 0) {
      return {
        x: debt,
        y: medianDebtData[debt]
      }
    }
  })
}
