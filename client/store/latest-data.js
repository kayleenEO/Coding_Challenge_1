import axios from 'axios'

//ACTION TYPES
const GET_DATA = 'GET_DATA'
const GET_PROGRAM_PERCENTAGES = 'GET_PROGRAM_PERCENTAGES'
const GET_STUDENT_BY_ETHNICITY = 'GET_STUDENT_BY_ETHNICITY'
const GET_COST_BY_INCOME_LEVEL = 'GET_COST_BY_INCOME_LEVEL'
const GET_MEDIAN_DEBT_BY_INCOME = 'GET_MEDIAN_DEBT_BY_INCOME'

//ACTION CREATORS
const gotData = data => ({
  type: GET_DATA,
  data
})
const gotProgramPercentages = () => ({type: GET_PROGRAM_PERCENTAGES})
const gotStudentByEthnicity = () => ({type: GET_STUDENT_BY_ETHNICITY})
const gotCost = () => ({type: GET_COST_BY_INCOME_LEVEL})
const gotMedianDebt = () => ({type: GET_MEDIAN_DEBT_BY_INCOME})

//THUNK CREATORS
export const fetchData = () => dispatch => {
  axios
    .get(
      'https://api.data.gov/ed/collegescorecard/v1/schools?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=HMAlV7xizKvwY2aSKPTzYjAm74g7EgbEt11GifVK'
    )
    .then(({data}) => dispatch(gotData(data)))
    .catch(error => console.error(error))
}
// (response => response.json)

//INITIAL STATE
const initialState = {}

//REDUCERS
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {}
    default:
      return state
  }
}
