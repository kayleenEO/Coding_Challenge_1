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
        program_percentage: {
          education: 0,
          mathematics: 0,
          business_marketing: 0,
          communications_technology: 0,
          language: 0,
          visual_performing: 0,
          engineering_technology: 0,
          parks_recreation_fitness: 0,
          agriculture: 0,
          security_law_enforcement: 0,
          computer: 0,
          precision_production: 0,
          humanities: 0,
          library: 0,
          psychology: 0,
          social_science: 0,
          legal: 0,
          english: 0,
          construction: 0,
          military: 0,
          communication: 0,
          public_administration_social_service: 0,
          architecture: 0,
          ethnic_cultural_gender: 0,
          resources: 0,
          health: 0,
          engineering: 0,
          history: 0,
          theology_religious_vocation: 0,
          transportation: 0,
          physical_science: 0,
          science_technology: 0,
          biological: 0,
          family_consumer_science: 0,
          philosophy_religious: 0,
          personal_culinary: 0,
          multidiscipline: 0,
          mechanic_repair_technology: 0
        }
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
