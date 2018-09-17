import axios from 'axios'

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

//INITIAL STATE
const initialState = {
  isLoading: false,
  all: {
    school: {
      name: '',
      school_url: '',
      city: '',
      state: '',
      zip: ''
    }
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

// const GET_PROGRAM_PERCENTAGES = 'GET_PROGRAM_PERCENTAGES'
// const GET_STUDENT_BY_ETHNICITY = 'GET_STUDENT_BY_ETHNICITY'
// const GET_COST_BY_INCOME_LEVEL = 'GET_COST_BY_INCOME_LEVEL'
// const GET_MEDIAN_DEBT_BY_INCOME = 'GET_MEDIAN_DEBT_BY_INCOME'

// const gotProgramPercentages = () => ({type: GET_PROGRAM_PERCENTAGES})
// const gotStudentByEthnicity = () => ({type: GET_STUDENT_BY_ETHNICITY})
// const gotCost = () => ({type: GET_COST_BY_INCOME_LEVEL})
// const gotMedianDebt = () => ({type: GET_MEDIAN_DEBT_BY_INCOME})
