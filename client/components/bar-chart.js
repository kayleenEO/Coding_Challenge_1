import React from 'react'
import {VictoryChart, VictoryBar, VictoryTheme} from 'victory'

const BarChart = ({data}) => {
  const barData = data[0] ? data : []
  console.log('BarChart data', barData)
  return (
    <div>
      <VictoryChart theme={VictoryTheme.material} domainPadding={{x: 15}}>
        <VictoryBar
          barRatio={0.8}
          style={{
            data: {fill: '#ea443c'},
            labels: {fontSize: 12}
          }}
          data={barData}
        />
      </VictoryChart>
    </div>
  )
}

export default BarChart
