import React from 'react'
import {VictoryPie} from 'victory'

const PieChart = ({data}) => {
  const pieData = data[0] ? data : []
  console.log('PieChart data', pieData)
  return (
    <div>
      <VictoryPie
        colorScale={
          !data[0] ? null : ['orange', 'gold', 'cyan', 'navy', 'green']
        }
        // labelRadius={!data[0] ? 50 : null}
        data={pieData}
      />
    </div>
  )
}

export default PieChart
