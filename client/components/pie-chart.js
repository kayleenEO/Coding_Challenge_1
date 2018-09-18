import React from 'react'
import {VictoryPie} from 'victory'

const PieChart = ({data}) => {
  const pieData = data[0] ? data : []
  return (
    <div>
      <VictoryPie
        colorScale={
          !data[0]
            ? null
            : [
                'yellow',
                'orange',
                'cyan',
                'gold',
                'navy',
                'green',
                'red',
                'pink',
                'purple',
                'blue'
              ]
        }
        labelRadius={100}
        padding={{top: 20, bottom: 20, left: 100, right: 100}}
        innerRadius={60}
        style={{
          labels: {fontSize: 12}
        }}
        data={pieData}
      />
    </div>
  )
}

export default PieChart
