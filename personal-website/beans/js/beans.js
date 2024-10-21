// margins, view size, chart size
var m = {top: 55, right: 20, bottom: 20, left: 80};
var w_view = 500;
var h_view = 260;
var w_chart  = w_view - m.left - m.right;
var h_chart = h_view - m.top - m.bottom;

function barColorlightcoral() {
    return "rgb(240,128,128)";
}

function barColorRed() {
    return "rgb(220,20,60)";
}

function barColorBlue() {
 return "rgb(135,206,235)";
}

function barColorGreen() {
  return "rgb(60,179,113)";
}

function barColorOrange() {
  return "rgb(255,165,0)";
}

// blank svg
var svgb1 = d3.select("#vitb1")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgb2 = d3.select("#vitb2")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgb3 = d3.select("#vitb3")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgb5 = d3.select("#vitb5")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgb6 = d3.select("#vitb6")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgb9 = d3.select("#vitb9")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgc = d3.select("#vitc")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svge = d3.select("#vite")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgk = d3.select("#vitk")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgome = d3.select("#omega3")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)            


// MINERALS
var svgz = d3.select("#zinc")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgi = d3.select("#iron")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgcop = d3.select("#copper")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgmag = d3.select("#magnesium")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgpot = d3.select("#potassium")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgcal = d3.select("#calcium")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgpho = d3.select("#phosphorus")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)

var svgman = d3.select("#manganese")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)
            
var svgsel = d3.select("#selenium")
            .append("svg")
            .attr("class", "svg")
            .attr("width", w_view)
            .attr("height", h_view)            



// x axis label
svgb1.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgb2.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgb3.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgb5.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgb6.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgb9.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgc.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svge.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgk.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");



//MINERALS
svgz.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgi.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgcop.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgmag.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgpot.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgcal.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgpho.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");
   
svgman.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgsel.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");

svgome.append("g")
   .append("text")
   .attr("class", "label_axis")
   .attr("x", w_chart/2 + m.left)
   .attr("y", 20)
   .text("% of RDI (1 cup serving)")
   .style("text-anchor", "middle");




// x and y ranges
var y = d3.scaleBand()
          .range([h_chart + m.top, m.top])
          .padding(0.4);       // space between bars

var x = d3.scaleLinear()
          .range([m.left, w_chart + m.left]);





d3.csv("data/vitb1.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )
//x.domain( [0, d3.max(d, d => +d.rdi)] )



svgb1.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorBlue)
     .transition()
     .duration(1400)
     .attr("width", d => x(d.rdi) - m.left);

/*

svgb1.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/



svgb1.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgb1.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgb1.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);

});

d3.csv("data/vitb2.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgb2.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorBlue)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);
   
/*
svgb2.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgb2.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgb2.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgb2.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});

d3.csv("data/vitb3.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgb3.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorBlue)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgb3.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgb3.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgb3.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgb3.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});

d3.csv("data/vitb5.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgb5.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorBlue)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgb5.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgb5.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgb5.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgb5.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});

d3.csv("data/vitb6.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgb6.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorBlue)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgb6.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgb6.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgb6.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgb6.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});

d3.csv("data/vitb9.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgb9.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorBlue)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgb9.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgb9.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgb9.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgb9.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});

d3.csv("data/vitc.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgc.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorRed)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgc.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgc.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgc.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgc.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});

d3.csv("data/vite.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svge.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorRed)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svge.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svge.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svge.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svge.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});

d3.csv("data/vitk.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgk.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorRed)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgk.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgk.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgk.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgk.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});




// MINERALS

d3.csv("data/zinc.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgz.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorGreen)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgz.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgz.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgz.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgz.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});

d3.csv("data/iron.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgi.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
    .style("fill",barColorGreen)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgi.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgi.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgi.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgi.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});

d3.csv("data/copper.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgcop.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
    .style("fill",barColorGreen)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgcop.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgcop.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgcop.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgcop.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});

d3.csv("data/magnesium.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgmag.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorGreen)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgmag.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgmag.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgmag.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgmag.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});

d3.csv("data/potassium.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgpot.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorGreen)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgpot.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgpot.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgpot.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgpot.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});

d3.csv("data/calcium.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgcal.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorGreen)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgcal.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgcal.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgcal.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgcal.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});


d3.csv("data/phosphorus.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgpho.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorGreen)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgpho.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgpho.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgpho.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgpho.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});


d3.csv("data/manganese.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgman.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorGreen)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgman.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgman.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgman.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));


svgman.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});


d3.csv("data/selenium.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgsel.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorGreen)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);

/*
svgsel.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgsel.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgsel.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgsel.append("g")
      
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});


d3.csv("data/omega3.csv")
  .then(
function(d) {

y.domain( d.map(d => d.bean) )
x.domain( [0, 100] )

svgome.append("g")
     .selectAll("rect")
     .data(d)
     .join("rect")
     .attr("y", d => y(d.bean))
     .attr("x", m.left)
     .attr("height",  y.bandwidth())
     .style("fill",barColorOrange)
     .transition()
     .duration(1000)
     .attr("width", d => x(d.rdi) - m.left);
/*
svgome.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + m.top + ")")
      .call( d3.axisTop(x)
               .tickSize(-h_chart)
               .tickFormat("") );
*/

svgome.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,"+ m.top +")")
      .call(d3.axisTop(x));

svgome.append("g")
     .attr("class", "axis")
     .attr("transform", "translate("+ m.left +",0)")
     .call(d3.axisLeft(y));

svgome.append("g")
      .selectAll("text")
      .data(d)
      .join("text")
      .attr("class", "label_bar")
      .attr("y", d => y(d.bean))
      .attr("x", d => x(d.rdi))
      .attr("dx", 5)
      .attr("dy", 12)
      .text(d => d.rdi);
});



// rectangle around the chart
//svgb1.append("g")
//   .append("rect")
//   .attr("width", w_view)
//   .attr("height", h_view)
//   .style("stroke", "black")
//   .style("fill", "none");