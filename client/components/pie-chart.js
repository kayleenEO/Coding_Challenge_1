import React from 'react'
import {VictoryPie, VictoryLabel} from 'victory'

const PieChart = ({data}) => {
  const pieData = data[0] ? data : []
  console.log('PieChart data', pieData)
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
        //labelComponent={<VictoryLabel dy={30} />}
        padding={{top: 20, bottom: 20, left: 100, right: 100}}
        innerRadius={60}
        style={{
          //data: {fill: 'tomato', opacity: 0.7},
          labels: {fontSize: 12}
          //parent: {border: '1px solid #ccc'}
        }}
        data={pieData}
      />
    </div>
  )
}

export default PieChart
