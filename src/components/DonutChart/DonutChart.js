import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const DonutChart = ({ statistic }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (statistic) {
            const data = [statistic, 100 - statistic];
            const width = 250;
            const height = 250;

            const radius = Math.min(width, height) / 2;

            const color = d3.scaleOrdinal()
                .domain(data)
                .range(["#FB3AFF", "#ffffff"]);

            const svg = d3.select(chartRef.current)
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", `translate(${width / 2}, ${height / 2})`);

            const arc = d3.arc()
                .innerRadius(radius - 40)
                .outerRadius(radius);

            const pie = d3.pie()
                .sort(null)
                .value(d => d);

            const g = svg.selectAll(".arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc");

            g.append("path")
                .attr("d", arc)
                .style("fill", d => color(d.data));

            svg.append("text")
                .attr("text-anchor", "middle")
                .attr("dy", ".3em")
                .text(`${(statistic)}%`)
                .style("font-size", "40px")
                .style("fill", "#FB3AFF");

            return () => {
                d3.select(chartRef.current).selectAll("svg").remove();
            };
        }
    }, [statistic]);

    return <div style={{
        marginTop: '45px',
        display: 'flex',
        justifyContent: 'center'
    }} ref={chartRef}></div>;
};

export default DonutChart;
