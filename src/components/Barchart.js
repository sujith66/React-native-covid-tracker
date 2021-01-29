import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisRight, scaleLinear, scaleBand, curveCardinal , line} from "d3";
import { View, Text, StyleSheet, Button } from "react-native";

function BarChart() {
  const data =  [{day:'01',value:25}, {day:'02',value:26}, {day:'03',value:35}, 
    {day:'04',value:25}, {day:'05',value:35}, {day:'06',value:25}, {day:'07',value:45}];
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(data.map((value)=>value.day))
      .range([0, 300])
      .padding(0.5)

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]);

      const colorScale = scaleLinear()
      .domain([75, 100, 150])
      .range(["blue", "blue", "blue"])
      .clamp(true);

    const xAxis = axisBottom(xScale).ticks(data.length);


    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg
      .select(".y-axis")
      .style("transform", "translateX(300px)")
      .call(yAxis);

      //const myLine = line().x((value,index)=> index * 50).y(value => 150 - value).curve(curveCardinal);
      svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(value.day))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", 'steelblue')
      .attr("height", value => 150 - yScale(value.day));
  }, [data]);

    return (
        <View style={{marginTop: 20}}> 
             <svg ref={svgRef} height={200}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
        </View>
    )
}

const styles= StyleSheet.create({
})
export default BarChart;
