var all_data = [ {region:"#heatmap-em", overallRank:10,"#skills-spider":7,"#adoption-spider":9,"#infra-spider":5,"#research-spider":6,"#finance-spider":12,"#trade-spider":4, name: "East Midlands"},
						{region:"#heatmap-ee", overallRank:2,"#skills-spider":3,"#adoption-spider":3,"#infra-spider":9,"#research-spider":1,"#finance-spider":4,"#trade-spider":5, name: "East of England"},
						{region:"#heatmap-ldn", overallRank:1,"#skills-spider":1,"#adoption-spider":1,"#infra-spider":1,"#research-spider":11,"#finance-spider":1,"#trade-spider":7, name: "Greater London"},
						{region:"#heatmap-ne", overallRank:8,"#skills-spider":8,"#adoption-spider":11,"#infra-spider":7,"#research-spider":4,"#finance-spider":8,"#trade-spider":9, name: "North East"},
						{region:"#heatmap-nw", overallRank:7,"#skills-spider":6,"#adoption-spider":5,"#infra-spider":3,"#research-spider":7,"#finance-spider":6,"#trade-spider":10, name: "North West"},
						{region:"#heatmap-ni", overallRank:4,"#skills-spider":11,"#adoption-spider":4,"#infra-spider":8,"#research-spider":8,"#finance-spider":2,"#trade-spider":1, name: "Northern Ireland"},
						{region:"#heatmap-s", overallRank:9,"#skills-spider":9,"#adoption-spider":6,"#infra-spider":10,"#research-spider":5,"#finance-spider":10,"#trade-spider":8, name: "Scotland"},
						{region:"#heatmap-se", overallRank:3,"#skills-spider":2,"#adoption-spider":2,"#infra-spider":6,"#research-spider":2,"#finance-spider":5,"#trade-spider":2, name: "South East"},
						{region:"#heatmap-sw", overallRank:6,"#skills-spider":4,"#adoption-spider":7,"#infra-spider":11,"#research-spider":9,"#finance-spider":3,"#trade-spider":6, name: "South West"},
						{region:"#heatmap-w", overallRank:12,"#skills-spider":12,"#adoption-spider":12,"#infra-spider":12,"#research-spider":12,"#finance-spider":9,"#trade-spider":12, name: "Wales"},
						{region:"#heatmap-wm", overallRank:5,"#skills-spider":5,"#adoption-spider":10,"#infra-spider":2,"#research-spider":3,"#finance-spider":7,"#trade-spider":3, name: "West Midlands"},
						{region:"#heatmap-yh", overallRank:11,"#skills-spider":10,"#adoption-spider":8,"#infra-spider":4,"#research-spider":10,"#finance-spider":11,"#trade-spider":11, name: "Yorkshire & The Humber"}
					]
		var skillsSpider = [[
			{axis: "Scotland", value: 9},
			{axis: "North East", value: 8},
			{axis: "Yorkshire & the Humber", value: 10},
			{axis: "East Midlands", value: 7},
			{axis: "East of England", value: 3},
			{axis: "Greater London", value: 1},
			{axis: "South East", value: 2},
			{axis: "South West", value: 4},
			{axis: "West Midlands", value: 5},
			{axis: "Wales", value: 12},
			{axis: "North West", value: 6},
			{axis: "Northern Ireland", value: 11}
		]]

		var adoptionSpider = [[
			{axis: "Scotland", value: 6},
			{axis: "North East", value: 11},
			{axis: "Yorkshire & the Humber", value: 8},
			{axis: "East Midlands", value: 9},
			{axis: "East of England", value: 3},
			{axis: "Greater London", value: 1},
			{axis: "South East", value: 2},
			{axis: "South West", value: 7},
			{axis: "West Midlands", value: 10},
			{axis: "Wales", value: 12},
			{axis: "North West", value: 5},
			{axis: "Northern Ireland", value: 4}
		]]

		var InfrastructureSpider = [[
			{axis: "Scotland", value: 10},
			{axis: "North East", value: 7},
			{axis: "Yorkshire & the Humber", value: 4},
			{axis: "East Midlands", value: 5},
			{axis: "East of England", value: 9},
			{axis: "Greater London", value: 1},
			{axis: "South East", value: 6},
			{axis: "South West", value: 11},
			{axis: "West Midlands", value: 2},
			{axis: "Wales", value: 12},
			{axis: "North West", value: 3},
			{axis: "Northern Ireland", value: 8}
		]]

		var ResearchSpider = [[
			{axis: "Scotland", value: 5},
			{axis: "North East", value: 4},
			{axis: "Yorkshire & the Humber", value: 10},
			{axis: "East Midlands", value: 6},
			{axis: "East of England", value: 1},
			{axis: "Greater London", value: 11},
			{axis: "South East", value: 2},
			{axis: "South West", value: 9},
			{axis: "West Midlands", value: 3},
			{axis: "Wales", value: 12},
			{axis: "North West", value: 7},
			{axis: "Northern Ireland", value: 8}
		]]

		var TradeSpider = [[
			{axis: "Scotland", value: 8},
			{axis: "North East", value: 9},
			{axis: "Yorkshire & the Humber", value: 11},
			{axis: "East Midlands", value: 4},
			{axis: "East of England", value: 5},
			{axis: "Greater London", value: 7},
			{axis: "South East", value: 2},
			{axis: "South West", value: 6},
			{axis: "West Midlands", value: 3},
			{axis: "Wales", value: 12},
			{axis: "North West", value: 10},
			{axis: "Northern Ireland", value: 1}
		]]

		var FinanceSpider = [[
			{axis: "Scotland", value: 10},
			{axis: "North East", value: 8},
			{axis: "Yorkshire & the Humber", value: 11},
			{axis: "East Midlands", value: 12},
			{axis: "East of England", value: 4},
			{axis: "Greater London", value: 1},
			{axis: "South East", value: 5},
			{axis: "South West", value: 3},
			{axis: "West Midlands", value: 7},
			{axis: "Wales", value: 9},
			{axis: "North West", value: 6},
			{axis: "Northern Ireland", value: 2}
		]]


		var selectedRegions = []
		var selectedMetrics = []

		function calculateFilteredRanks(data) {
			if (selectedMetrics.length == 0){
				data.forEach(function(d){
					d.liveRank = d.overallRank;
				})
				data.sort((a, b) => (a.overallRank > b.overallRank) ? 1 : -1)
			} else {
				liveMetrics = ["#skills-spider", "#adoption-spider", "#infra-spider", "#research-spider", "#finance-spider", "#trade-spider"]
				liveMetrics = liveMetrics.filter(function(value, index, arr){ 
					return !selectedMetrics.includes(value);
				});
				data.forEach(function(d){
					d.liveScore = 0
					liveMetrics.forEach(function(m){
						d.liveScore += d[m]
					})
				});
				
				data.sort((a, b) => (a.liveScore > b.liveScore) ? 1 : -1)
				for (var i = 0; i < data.length; i++){
					data[i].liveRank = i+1;
				}
			}
			return data
			
		}

		function buildDatatable(data) {
			const headerLookup = {
				"#skills-spider": "Skills Rank",
				"#adoption-spider": "Adoption Rank",
				"#infra-spider": "Infrastructure Rank",
				"#research-spider": "R&D Rank",
				"#finance-spider": "F&I Rank",
				"#trade-spider": "Trade Rank"
			};

//width:'+ $("#main-panel").width() +'px

			tableHtml = '<table id="rankings-table" class="table-responsive stripe hover" style="width:100%"><thead><tr><th>Overall Rank</th><th>Nation/Region</th>';
			headerCreated = false;
			for (let i = 0; i < data.length; i++){
				if (!headerCreated){
					for (let k in headerLookup) {
						if (!selectedMetrics.includes(k)) {
							tableHtml += `<th>${headerLookup[k]}</th>`
						}
					}
					tableHtml += '</tr></thead><tbody>'
					headerCreated = true;
				}
				tableHtml += `<tr><td>${i + 1}</td><td>${data[i].name}</td>`
				for (let k in headerLookup) {
					if (!selectedMetrics.includes(k)) {
						tableHtml += `<td>${data[i][k]}</td>`
					}
				}
				tableHtml += '</tr>'
			}
			tableHtml += '</tbody></table>'
			$("#main-panel").html(tableHtml);

                        var rankingsTable = $('#rankings-table').DataTable({
				pageLength: 12,
				searching: false,
				lengthChange: false,
				info: false,
				paging: false,
				destroy: true
			});
             

		}

		function updateMainPanel() {		

			if (selectedRegions.length == 0){
				data = all_data;
			} else {
				data = []
				all_data.forEach(function(r){
					if (selectedRegions.includes(r.region)) {
						data.push(r);
					}
				})
			}
			data = calculateFilteredRanks(data)
			html = ""
			for (let i = 0; i < data.length; i++){
				html += `<li>${i+1}: ${data[i].name}</li>`
			}
			//$('#test-list').html(html)
			buildDatatable(data)

		}

		function spiderClickHandler(element_id) {
			if (selectedMetrics.includes(element_id)){
				selectedMetrics = selectedMetrics.filter(function(value, index, arr){ 
					return value != element_id;
				});
				RadarChart(element_id, spiderDict[element_id].data, spiderDict[element_id].options);
				updateMainPanel();
			} else {
				$(element_id).find('.radarWrapper').children().attr("style", "fill: rgb(156,162,173); fill-opacity: 0.35;");
				selectedMetrics.push(element_id);
				updateMainPanel();
			}
		}

		function mapClickHandler(element_id) {
			if (selectedRegions.includes(element_id)){
				selectedRegions = selectedRegions.filter(function(value, index, arr){ 
					return value != element_id;
				});
				$(element_id).attr("fill", "rgb(156,162,173)");
				updateMainPanel();
			} else {
				$('.leaflet-interactive').attr("fill", "rgb(156,162,173)");
				selectedRegions.push(element_id)
				selectedRegions.forEach(function(d){
					$(d).attr("fill", "#00263E");
				})
				updateMainPanel();
			}
			if (selectedRegions.length == 0) {
				$('.leaflet-interactive').attr("fill", "#73D1EB");
				updateMainPanel();
			}
			
		}

		function RadarChart(id, data, options) {
			var cfg = {
			w: 600,				//Width of the circle
			h: 600,				//Height of the circle
			margin: {top: 20, right: 20, bottom: 20, left: 20}, //The margins of the SVG
			levels: 3,				//How many levels or inner circles should there be drawn
			maxValue: 0, 			//What is the value that the biggest circle will represent
			labelFactor: 1.25, 	//How much farther than the radius of the outer circle should the labels be placed
			wrapWidth: 60, 		//The number of pixels after which a label needs to be given a new line
			opacityArea: 0.35, 	//The opacity of the area of the blob
			dotRadius: 4, 			//The size of the colored circles of each blog
			opacityCircles: 0.1, 	//The opacity of the circles of each blob
			strokeWidth: 2, 		//The width of the stroke around each blob
			roundStrokes: false,	//If true the area and stroke will follow a round path (cardinal-closed)
			color: d3.scale.category10()	//Color function
			};
			
			//Put all of the options into a variable called cfg
			if('undefined' !== typeof options){
			for(var i in options){
				if('undefined' !== typeof options[i]){ cfg[i] = options[i]; }
			}//for i
			}//if
			
			//If the supplied maxValue is smaller than the actual one, replace by the max in the data
			var maxValue = Math.max(cfg.maxValue, d3.max(data, function(i){return d3.max(i.map(function(o){return o.value;}))}));
				
			var allAxis = (data[0].map(function(i, j){return i.axis})),	//Names of each axis
				total = allAxis.length,					//The number of different axes
				radius = Math.min(cfg.w/2, cfg.h/2), 	//Radius of the outermost circle
				Format = d3.format('0d'),			 	//Percentage formatting
				angleSlice = Math.PI * 2 / total;		//The width in radians of each "slice"
			
			//Scale for the radius
			var rScale = d3.scale.linear()
				.range([0, radius])
				.domain([0, maxValue]);
				
			/////////////////////////////////////////////////////////
			//////////// Create the container SVG and g /////////////
			/////////////////////////////////////////////////////////

			//Remove whatever chart with the same id/class was present before
			d3.select(id).select("svg").remove();
			
			//Initiate the radar chart SVG
			var svg = d3.select(id).append("svg")
					.attr("width",  cfg.w + cfg.margin.left + cfg.margin.right)
					.attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
					.attr("class", "radar"+id);
			//Append a g element		
			var g = svg.append("g")
					.attr("transform", "translate(" + (cfg.w/2 + cfg.margin.left) + "," + (cfg.h/2 + cfg.margin.top) + ")");
			
			/////////////////////////////////////////////////////////
			////////// Glow filter for some extra pizzazz ///////////
			/////////////////////////////////////////////////////////
			
			//Filter for the outside glow
			var filter = g.append('defs').append('filter').attr('id','glow'),
				feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation','2.5').attr('result','coloredBlur'),
				feMerge = filter.append('feMerge'),
				feMergeNode_1 = feMerge.append('feMergeNode').attr('in','coloredBlur'),
				feMergeNode_2 = feMerge.append('feMergeNode').attr('in','SourceGraphic');

			/////////////////////////////////////////////////////////
			/////////////// Draw the Circular grid //////////////////
			/////////////////////////////////////////////////////////
			
			//Wrapper for the grid & axes
			var axisGrid = g.append("g").attr("class", "axisWrapper");
			
			//Draw the background circles
			axisGrid.selectAll(".levels")
			.data(d3.range(1,(cfg.levels+1)).reverse())
			.enter()
				.append("circle")
				.attr("class", "gridCircle")
				.attr("r", function(d, i){return radius/cfg.levels*d;})
				.style("fill", "#CDCDCD")
				.style("stroke", "#CDCDCD")
				.style("fill-opacity", cfg.opacityCircles)
				.style("filter" , "url(#glow)");

			//Text indicating at what % each level is
			axisGrid.selectAll(".axisLabel")
			.data(d3.range(1,(cfg.levels+1)).reverse())
			.enter().append("text")
			.attr("class", "axisLabel")
			.attr("x", 4)
			.attr("y", function(d){return -d*radius/cfg.levels;})
			.attr("dy", "0.4em")
			.style("font-size", "10px")
			.attr("fill", "#737373")
			.text(function(d,i) { return Format(maxValue * (6.5-d)/cfg.levels); });

			/////////////////////////////////////////////////////////
			//////////////////// Draw the axes //////////////////////
			/////////////////////////////////////////////////////////
			
			//Create the straight lines radiating outward from the center
			var axis = axisGrid.selectAll(".axis")
				.data(allAxis)
				.enter()
				.append("g")
				.attr("class", "axis");
			//Append the lines
			axis.append("line")
				.attr("x1", 0)
				.attr("y1", 0)
				.attr("x2", function(d, i){ return rScale(maxValue*1.1) * Math.cos(angleSlice*i - Math.PI/2); })
				.attr("y2", function(d, i){ return rScale(maxValue*1.1) * Math.sin(angleSlice*i - Math.PI/2); })
				.attr("class", "line")
				.style("stroke", "white")
				.style("stroke-width", "2px");

			//Append the labels at each axis
			axis.append("text")
				.attr("class", "legend")
				.style("font-size", "11px")
				.attr("text-anchor", "middle")
				.attr("dy", "0.35em")
				.attr("x", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice*i - Math.PI/2); })
				.attr("y", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2); })
				.text(function(d){
					return d})
				.call(wrap, cfg.wrapWidth);

			/////////////////////////////////////////////////////////
			///////////// Draw the radar chart blobs ////////////////
			/////////////////////////////////////////////////////////
			
			//The radial line function
			var radarLine = d3.svg.line.radial()
				.interpolate("linear-closed")
				.radius(function(d) { return rScale(13-d.value); })
				.angle(function(d,i) {	return i*angleSlice; });
				
			if(cfg.roundStrokes) {
				radarLine.interpolate("cardinal-closed");
			}
						
			//Create a wrapper for the blobs	
			var blobWrapper = g.selectAll(".radarWrapper")
				.data(data)
				.enter().append("g")
				.attr("class", "radarWrapper");
					
			//Append the backgrounds	
			blobWrapper
				.append("path")
				.attr("class", "radarArea")
				.attr("d", function(d,i) { return radarLine(d); })
				.style("fill", function(d,i) { return cfg.color(i); })
				.style("fill-opacity", cfg.opacityArea)
				.on('mouseover', function (d,i){
					//Dim all blobs
					d3.selectAll(".radarArea")
						.transition().duration(200)
						.style("fill-opacity", 0.1); 
					//Bring back the hovered over blob
					d3.select(this)
						.transition().duration(200)
						.style("fill-opacity", 0.7);	
				})
				.on('mouseout', function(){
					//Bring back all blobs
					d3.selectAll(".radarArea")
						.transition().duration(200)
						.style("fill-opacity", cfg.opacityArea);
				});
				
			//Create the outlines	
			blobWrapper.append("path")
				.attr("class", "radarStroke")
				.attr("d", function(d,i) { return radarLine(d); })
				.style("stroke-width", cfg.strokeWidth + "px")
				.style("stroke", function(d,i) { return cfg.color(i); })
				.style("fill", "none")
				.style("filter" , "url(#glow)");		
			
			//Append the circles
			blobWrapper.selectAll(".radarCircle")
				.data(function(d,i) { return d; })
				.enter().append("circle")
				.attr("class", "radarCircle")
				.attr("r", cfg.dotRadius)
				.attr("cx", function(d,i){ return rScale(13-d.value) * Math.cos(angleSlice*i - Math.PI/2); })
				.attr("cy", function(d,i){ return rScale(13-d.value) * Math.sin(angleSlice*i - Math.PI/2); })
				.style("fill", function(d,i,j) { return cfg.color(j); })
				.style("fill-opacity", 0.8);

			/////////////////////////////////////////////////////////
			//////// Append invisible circles for tooltip ///////////
			/////////////////////////////////////////////////////////
			
			//Wrapper for the invisible circles on top
			var blobCircleWrapper = g.selectAll(".radarCircleWrapper")
				.data(data)
				.enter().append("g")
				.attr("class", "radarCircleWrapper");
				
			//Append a set of invisible circles on top for the mouseover pop-up
			blobCircleWrapper.selectAll(".radarInvisibleCircle")
				.data(function(d,i) { return d; })
				.enter().append("circle")
				.attr("class", "radarInvisibleCircle")
				.attr("r", cfg.dotRadius*1.5)
				.attr("cx", function(d,i){ return rScale(13-d.value) * Math.cos(angleSlice*i - Math.PI/2); })
				.attr("cy", function(d,i){ return rScale(13-d.value) * Math.sin(angleSlice*i - Math.PI/2); })
				.style("fill", "none")
				.style("pointer-events", "all")
				.on("mouseover", function(d,i) {
					newX =  parseFloat(d3.select(this).attr('cx')) - 10;
					newY =  parseFloat(d3.select(this).attr('cy')) - 10;
							
					tooltip
						.attr('x', newX)
						.attr('y', newY)
						.text(Format(d.value))
						.transition().duration(200)
						.style('opacity', 1);
				})
				.on("mouseout", function(){
					tooltip.transition().duration(200)
						.style("opacity", 0);
				});
				
			//Set up the small tooltip for when you hover over a circle
			var tooltip = g.append("text")
				.attr("class", "tooltip")
				.style("opacity", 0);
			
			/////////////////////////////////////////////////////////
			/////////////////// Helper Function /////////////////////
			/////////////////////////////////////////////////////////

			//Taken from http://bl.ocks.org/mbostock/7555321
			//Wraps SVG text	
			function wrap(text, width) {
			text.each(function() {
				var text = d3.select(this),
					words = text.text().split(/\s+/).reverse(),
					word,
					line = [],
					lineNumber = 0,
					lineHeight = 1.4, // ems
					y = text.attr("y"),
					x = text.attr("x"),
					dy = parseFloat(text.attr("dy")),
					tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
				while (word = words.pop()) {
				line.push(word);
				tspan.text(line.join(" "));
				if (tspan.node().getComputedTextLength() > width) {
					line.pop();
					tspan.text(line.join(" "));
					line = [word];
					tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
				}
				}
			});
			}//wrap	
			
		}//RadarChart

		var margin = {top: 60, right: 60, bottom: 60, left: 60},
			width = Math.min(350, $(".spider").width() - 10) - margin.left - margin.right,
			height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
					
			////////////////////////////////////////////////////////////// 
			//////////////////// Draw the Chart ////////////////////////// 
			////////////////////////////////////////////////////////////// 

			var color = d3.scale.ordinal()
				.range(["#EDC951","#CC333F","#00A0B0"]);
				
			//Call function to draw the Radar chart
			//RadarChart(".radarChart", data, radarChartOptions);
			var SkillsChartOptions = {
			  w: width,
			  h: height,
			  margin: margin,
			  maxValue: 12,
			  levels: 6,
			  roundStrokes: true,
			  color: d3.scale.ordinal()
				.range(["#FEB300"])
			};

			var AdoptionChartOptions = {
			  w: width,
			  h: height,
			  margin: margin,
			  maxValue: 12,
			  levels: 6,
			  roundStrokes: true,
			  color: d3.scale.ordinal()
				.range(["#D7501C"])
			};

			var InfraChartOptions = {
			  w: width,
			  h: height,
			  margin: margin,
			  maxValue: 12,
			  levels: 6,
			  roundStrokes: true,
			  color: d3.scale.ordinal()
				.range(["#AA004C"])
			};

			var ResearchChartOptions = {
			  w: width,
			  h: height,
			  margin: margin,
			  maxValue: 12,
			  levels: 6,
			  roundStrokes: true,
			  color: d3.scale.ordinal()
				.range(["#2CD5C4"])
			};
			var FinanceChartOptions = {
			  w: width,
			  h: height,
			  margin: margin,
			  maxValue: 12,
			  levels: 6,
			  roundStrokes: true,
			  color: d3.scale.ordinal()
				.range(["#007EC5"])
			};
			var TradeChartOptions = {
			  w: width,
			  h: height,
			  margin: margin,
			  maxValue: 12,
			  levels: 6,
			  roundStrokes: true,
			  color: d3.scale.ordinal()
				.range(["#774FC4"])
			};

			var spiderDict = {
				'#skills-spider': {
					data: skillsSpider,
					options: SkillsChartOptions
				},
				'#adoption-spider': {
					data: adoptionSpider,
					options: AdoptionChartOptions
				},
				'#infra-spider': {
					data: InfrastructureSpider,
					options: InfraChartOptions
				},
				'#research-spider': {
					data: ResearchSpider,
					options: ResearchChartOptions
				},
				'#finance-spider': {
					data: FinanceSpider,
					options: FinanceChartOptions
				},
				'#trade-spider': {
					data: TradeSpider,
					options: TradeChartOptions
				}	
			}

$(window).on('resize', function(){
				container_width = $(".spider").width();
				//container_width = (window.innerWidth/4.5) - 10;
				//$(".spider svg").attr("width", container_width).attr("height", container_width);
				for(const element_id in spiderDict){
					spiderDict[element_id].options.w = Math.min(350, (container_width*0.7));
					spiderDict[element_id].options.h = Math.min(350, (container_width*0.7));
					RadarChart(element_id, spiderDict[element_id].data, spiderDict[element_id].options);
					if (selectedMetrics.includes(element_id)){
						$(element_id).find('.radarWrapper').children().attr("style", "fill: rgb(156,162,173); fill-opacity: 0.35;");
					};
				}
			});

			
			RadarChart("#skills-spider", skillsSpider, SkillsChartOptions)
			RadarChart("#adoption-spider", adoptionSpider, AdoptionChartOptions)
			RadarChart("#infra-spider", InfrastructureSpider, InfraChartOptions)
			RadarChart("#research-spider", ResearchSpider, ResearchChartOptions)
			RadarChart("#finance-spider", FinanceSpider, FinanceChartOptions)
			RadarChart("#trade-spider", TradeSpider, TradeChartOptions)

			all_data.sort((a, b) => (a.overallRank > b.overallRank) ? 1 : -1)
			buildDatatable(all_data)
