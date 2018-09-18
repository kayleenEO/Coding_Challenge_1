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
    },
    latest: {
      cost: {
        net_price: {
          public: {
            by_income_level: []
          }
        }
      },
      student: {
        demographics: {
          race_ethnicity: {
            nhpi: 0,
            non_resident_alien: 0,
            black_2000: 0,
            aian_2000: 0,
            hispanic_prior_2009: 0,
            black: 0,
            asian: 0,
            api_2000: 0,
            hispanic_2000: 0,
            unknown_2000: 0,
            unknown: 0,
            white_non_hispanic: 0,
            black_non_hispanic: 0,
            asian_pacific_islander: 0,
            white: 0,
            two_or_more: 0,
            hispanic: 0,
            aian: 0,
            aian_prior_2009: 0,
            white_2000: 0
          }
        }
      },
      academics: {
        program_percentage: []
      },
      aid: {
        median_debt: {
          income: []
        }
      }
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

// export const getEthnicityPieChart = state => {
//   const demographics = state.data.all.latest.student.demographics.race_ethnicity
//   return Object.keys(demographics).map(demo => {
//     if (demographics[demo] !== 0) {
//       return {
//         x: demo,
//         y: demographics[demo]
//       }
//     }
//   })
// }
