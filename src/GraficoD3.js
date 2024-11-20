import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const GraficoD3 = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Dimensiones del SVG
    const width = 500;
    const height = 500;

    // Datos de ejemplo
    const data = [10, 210, 30, 40, 50];

    // Crear el SVG usando D3
    const svg = d3.select(svgRef.current)
                  .attr('width', width)
                  .attr('height', height);

    // Crear un gráfico de barras
    svg.selectAll('rect')
       .data(data)
       .enter()
       .append('rect')
       .attr('x', (d, i) => i * (width / data.length))
       .attr('y', d => height - d)
       .attr('width', width / data.length - 1)
       .attr('height', d => d)
       .attr('fill', 'steelblue');
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default GraficoD3;