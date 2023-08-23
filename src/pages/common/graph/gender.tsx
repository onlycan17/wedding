// components/VerticalBarGraph.tsx
import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

const data = [
    { gender: '남자', value: 80 },
    { gender: '여자', value: 70 },
];

const GenderBarGraph: React.FC = () => {
    const ref = useRef<SVGSVGElement>(null);
    useEffect(() => {
        const svg = d3.select(ref.current);
        const xScale = d3.scaleBand().domain(data.map((d) => d.gender)).range([0, 300]).padding(0.4);
        const yScale = d3.scaleLinear().domain([0, 100]).range([200, 0]);

        svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", (d) => xScale(d.gender)!)
            .attr("y", (d) => yScale(d.value))
            .attr("width", xScale.bandwidth())
            .attr("height", (d) => 200 - yScale(d.value))
            .attr("dy", "0.35em")
            .attr("dx", -4);

        svg.selectAll(".label")
            .data(data)
            .enter()
            .append("text")
            .attr("class", "label")
            .attr("x", (d) => xScale(d.gender)! + xScale.bandwidth() / 2)
            .attr("y", (d) => yScale(d.value) - 10)
            .attr("text-anchor", "middle")
            .text((d) => `${d.value}%`);

        svg.append("g").attr("transform", "translate(0, 200)").call(d3.axisBottom(xScale));
        svg.append("g").call(d3.axisLeft(yScale));
    }, []);

    return <svg ref={ref} width={300} height={250} />;
};

export default GenderBarGraph;
