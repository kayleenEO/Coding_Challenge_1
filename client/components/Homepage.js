import React, {Component} from 'react'
import {fetchData} from '../store'
import {connect} from 'react-redux'

class Homepage extends Component {
  componentDidMount() {
    this.props.getData()
  }
  render() {
    const {data, isLoading} = this.props
    console.log(data)
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
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  data: state.data.all,
  isLoading: state.data.isLoading
})

const mapDispatch = dispatch => ({
  getData: () => dispatch(fetchData())
})
export default connect(mapState, mapDispatch)(Homepage)
