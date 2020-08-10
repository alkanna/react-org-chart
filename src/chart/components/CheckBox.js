let _ = require('lodash')

module.exports = function CheckBox({
	svg,
	size = 14,
	x = 0,
	y = 0,
	rx = 0,
	ry = 0,
	markStrokeWidth = 1,
	boxStrokeWidth = 1,
	checked = false,
	clickEvent,
}) {
	var g = svg.append("g")
	var box = g.append("rect")
		.attr("width", size)
		.attr("height", size)
		.attr("x", x)
		.attr("y", y)
		.attr("rx", rx)
		.attr("ry", ry)
		.style({
			"fill-opacity": 0,
			"stroke-width": boxStrokeWidth,
			"stroke": "black",
      "cursor": "pointer"
		});

	var coordinates = [
		{
			x: x + (size / 8),
			y: y + (size / 3)
		},
		{
			x: x + (size / 2.2),
			y: (y + size) - (size / 4)
		},
		{
			x: (x + size) - (size / 8),
			y: (y + (size / 10))
		}
];

	var line = d3.svg.line()
		.x(function (d) {
			return d.x;
		})
		.y(function (d) {
			return d.y;
		})
		.interpolate("basic");

	var mark = g.append("path")
		.attr("d", line(coordinates))
		.attr("class", "mark")
		.style({
			"stroke-width": markStrokeWidth,
			"stroke": "black",
			"fill": "none",
			"opacity": (checked) ? 1 : 0
		});

	g.on("click", function () {
		checked = !checked;
		d3.select(this).select(".mark").style("opacity", (checked) ? 1 : 0);

		if (_.isFunction(clickEvent)) {
			clickEvent();
		};
		d3.event.stopPropagation();
	})
}