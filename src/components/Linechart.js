import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisRight, scaleLinear, scaleBand, curveCardinal , line} from "d3";
import { View, Text, StyleSheet, Button } from "react-native";

function LineChart() {
  const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
  const svgRef = useRef();

  
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
      .domain([0,data.length - 1])
      .range([0, 300]);

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]);



    const xAxis = axisBottom(xScale).ticks(data.length).tickFormat(index => index + 1);


    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg
      .select(".y-axis")
      .style("transform", "translateX(300px)")
      .call(yAxis);

      const myLine = line().x((value,index)=> index * 50).y(value => 150 - value).curve(curveCardinal);
    svg
      .selectAll(".line")
      .data([data])
      .join("path").
      attr('d',value =>myLine(value)).
      attr('fill',"none").attr('stroke',"blue")
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
export default LineChart;
