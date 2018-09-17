import React, {Component} from 'react'
import {fetchData} from '../store'
import {connect} from 'react-redux'

class Homepage extends Component {
  componentDidMount() {
    this.props.getData()
  }
  render() {
    const {data} = this.props
    return (
      <div>
        <h1>Welcome to the Homepage</h1>
        <br />
      </div>
    )
  }
}

const mapState = state => ({
  data: state.data.all
})

const mapDispatch = dispatch => ({
  getData: () => dispatch(fetchData())
})
export default connect(mapState, mapDispatch)(Homepage)
