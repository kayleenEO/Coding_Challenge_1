import React from 'react'
import {VictoryChart, VictoryBar, VictoryTheme, VictoryLabel} from 'victory'

const BarChart = ({data, title}) => {
  const barData = data[0] ? data : []
  console.log('BarChart data', barData)
  return (
    <div>
      <VictoryChart theme={VictoryTheme.material} domainPadding={{x: 15}}>
        <VictoryLabel x={115} y={24} text={title} />

        <VictoryBar
          barRatio={0.6}
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
