import React, { useEffect, useState, useRef } from 'react'
import {
  scaleLinear,
  select,
  max,
  scaleBand,
  axisLeft,
  axisBottom
} from 'd3'

import './styles.css'

const BarChart = (props) => {
  const { title, description } = props
  const [shops, setShops] = useState([])
  const chartRef = useRef()

  useEffect(() => {
    window.fetch('https://alw-lab.herokuapp.com/commerces/graph')
      .then(res => res.json())
      .then(response => {
        setShops(response)
      })
  }, [])

  const drawChart = () => {
    const { width, height } = props
    const accessToRef = select(chartRef.current)
    const xValue = shop => parseFloat(shop.sales)
    const yValue = shop => shop.name
    const margin = { top: 20, right: 20, bottom: 20, left: 100 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    const xScale = scaleLinear()
      .domain([0, max(shops, xValue)])
      .range([0, innerWidth])

    const yScale = scaleBand()
      .domain(shops.map(yValue))
      .range([0, innerHeight])
      .padding(0.1)

    const g = accessToRef.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    g.append('g').call(axisLeft(yScale))
    g.append('g').call(axisBottom(xScale))
      .attr('transform', `translate(0, ${innerHeight})`)

    g.selectAll('rect')
      .data(shops)
      .enter()
      .append('rect')
      .attr('y', shop => yScale(yValue(shop)))
      .attr('width', shop => xScale(xValue(shop)))
      .attr('height', yScale.bandwidth())
  }

  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <svg
        ref={chartRef}
        width={props.width}
        height={props.height}
      />
      {
        shops.length > 0 &&
        drawChart()
      }
    </>
  )
}

export default BarChart
