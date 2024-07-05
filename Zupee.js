
<!DOCTYPE html>
<html>
  <head>
		<script>
      	var series = {"seriesA": {"x": [10,20,30,40], y: [1,7,5,8]},
                     	"seriesB": {"x": [10,20,30,40], y: [2,1,6,4]},
                      "seriesC": {"x": [10,20,30,40], y: [8,4,2,6]},
                      "seriesD": {"x": [10,20,30,40], y: [1,2,1,7]},
                      "seriesE": {"x": [10,20,30,40], y: [9,1,3,4]}
                     }
    </script>
  </head>
  <body>
    <div id="curve_chart" style="width: 500px; height: 250px"></div>
    <div id="dropdowns"></div>
    <button id="addButton">Add Dropdown</button>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script>
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(loaded);
			
      function updatedData(data) {
        let finalData = [];
        for(let i = 0, len = Object.keys(data)[0].x.length; i <= len; i++) {
            finalData[i] = new Array(len);
        }
        finalData[0][0] = "x";
        Object.keys(data).map((item, index) => {
            if((index + 1) <= finalData.length) {
                finalData[0][index + 1] = item;
                finalData[index + 1][0] = data[item].x[index];
                finalData[index + 1][index + 1] = data[item].y[index];
            }
        });
		return finalData;
	}
      function loaded(){
      
      let finalData = [
        ['x', 'Series A', 'SeriesB'],
                      ['10', 1, 10],
                      ['20', 7, 20],
                       ['30', 10, 50]];
        var dataTable = new google.visualization.arrayToDataTable (finalData);
        options = {chartArea: { width: '60%'}};
         /* dataTable.addColumn("number", "x"); */
				var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(dataTable, options);

      }
		const elem = document.getElementById('addButton');
			function addDropDown() {
				var select = document.createElement('select');
				for(let [key, value] of Object.entries(series)) {
					var option = document.createElement('option');
					var TextNode = document.createTextNode(key);
          option.append(TextNode);
					select.append(option);
			}
        
var dropDown = document.getElementById('dropdowns');
dropDown.addEventListener('click', ev => console.log(ev.target));
		document.getElementById('dropdowns').append(select);
}
		elem.addEventListener('click', addDropDown);
			var customData = Object.create(series);
      
      //  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
      //  chart.draw(dataTable, options);
      
      // https://developers.google.com/chart/interactive/docs/gallery/linechart
        

    </script>
  </body>
</html>
