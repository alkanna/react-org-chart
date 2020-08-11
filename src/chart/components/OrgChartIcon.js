module.exports = function OrgChartIcon({ svg, x = 5, y = 5 }) {
  const container = svg
    .append('g')
    .attr('stroke', 'none')
    .attr('fill', 'none')
    .style('cursor', 'pointer')
    .append('g')

  const icon = container
    .append('g')
    .attr('id', 'icon')
    .attr('fill', 'rgba(0, 0, 0, 0.54)')
    .attr('transform', `translate(${x}, ${y})` + " scale(0.04, 0.04)" )

  const ico = icon
      .append('g')
      .attr('id', 'ico')

  icon.append('path').attr(
        'd',
        'M237.268,208.958v7.63c0,2.672,2.167,4.838,4.838,4.838h27.787c2.672,0,4.838-2.167,4.838-4.838v-7.63 c43.862-8.735,77.027-47.516,77.027-93.907c0-52.801-42.957-95.759-95.759-95.759c-52.802,0-95.759,42.957-95.759,95.759 C160.241,161.442,193.406,200.223,237.268,208.958z'
  )
  icon.append('path').attr(
        'd',
        'M172.785,301.191c-14.658,0-139.399,0-154.053,0C8.387,301.191,0,309.578,0,319.923v154.053 c0,10.345,8.387,18.732,18.732,18.732h154.053c10.345,0,18.732-8.387,18.732-18.732V319.924 C191.517,309.578,183.131,301.191,172.785,301.191z'
  )
  icon.append('path').attr(
        'd',
        'M493.268,301.191c-14.658,0-139.399,0-154.053,0c-10.345,0-18.732,8.387-18.732,18.732v154.053 c0,10.345,8.387,18.732,18.732,18.732h154.053c10.345,0,18.732-8.387,18.732-18.732V319.924 C512,309.578,503.613,301.191,493.268,301.191z'
  )
  icon.append('path').attr(
        'd',
        'M81.865,282.461c27.762,0,32.624,1.431,32.624-4.839h283.02c0,2.672,2.167,4.839,4.839,4.839h27.787 c2.672,0,4.839-2.167,4.839-4.839V258.89c0-10.345-8.387-18.732-18.732-18.732H95.759c-10.345,0-18.732,8.387-18.732,18.732 v18.732C77.027,280.294,79.193,282.461,81.865,282.461z'
  )

  icon.append('rect')
    .attr('id', 'bounds')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 24)
    .attr('height', 24)
    .attr('fill', 'transparent')
}