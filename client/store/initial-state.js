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
      student: {
        size: 0,
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
      cost: {
        net_price: {
          public: {
            by_income_level: {
              '0-48000': 0,
              '30001-75000': 0,
              '30001-48000': 0,
              '75000-plus': 0,
              '0-30000': 0,
              '75001-110000': 0,
              '48001-75000': 0,
              '110001-plus': 0
            }
          }
        }
      },
      aid: {
        median_debt: {
          income: {
            '0_30000': 0,
            '30001_75000': 0,
            greater_than_75000: 0
          }
        }
      }
    }
  }
}

export default initialState
