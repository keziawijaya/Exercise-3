var inirequest = new XMLHttpRequest();
var iniurl = 'https://swapi.co/api/planets/'
inirequest.open('GET', iniurl, true);
inirequest.addEventListener('load',function(){
  if(inirequest.status >= 200 && inirequest.status < 400){
    var iniresponse = JSON.parse(inirequest.responseText);
    
    for(i=0; i<10; i++){
        var initable = document.getElementById('exercisetable');
        var row = initable.insertRow(1);

        var nama = row.insertCell(0);
        var RP = row.insertCell(1);
        var OP = row.insertCell(2);
        var Diameter = row.insertCell(3);
        var Climate = row.insertCell(4);
        var Gravity = row.insertCell(5);
        var Terrain = row.insertCell(6);
        var SW = row.insertCell(7);
        var Population = row.insertCell(8);
        var Created = row.insertCell(9);

        nama.innerHTML = iniresponse.results[i].name;
        RP.innerHTML = iniresponse.results[i].rotation_period;
        OP.innerHTML = iniresponse.results[i].orbital_period;
        Diameter.innerHTML = iniresponse.results[i].diameter;
        Climate.innerHTML = iniresponse.results[i].climate;
        Gravity.innerHTML = iniresponse.results[i].gravity;
        Terrain.innerHTML = iniresponse.results[i].terrain;
        SW.innerHTML = iniresponse.results[i].surface_water;
        Population.innerHTML = iniresponse.results[i].population;
        Created.innerHTML = iniresponse.results[i].created;
    }
  } else {
    console.log('Error gaizz: ' + inirequest.statusText);
  }});
inirequest.send(null);

  function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("exercisetable");
    switching = true;

    dir = "asc"; 
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }