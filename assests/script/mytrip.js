function GenerateTable() {
  //Build an array containing Customer records.
  var customers = new Array();
  customers.push([
    "Name",
    "Travel path",
    "Departure Date",
    "Return Date",
    "Price",
  ]);

  var localStoraytripsLibrary = localStorage.getItem("tripsLibrary");
  console.log("localStoraytripsLibrary:", localStoraytripsLibrary);
  var travellers = JSON.parse(localStoraytripsLibrary);
  console.log("travellers:", travellers);
  // [
  //     {"travellerName":"Nidhi Shah",
  //     "flights":[
  //         {
  //             "travelPaths":[
  //                 "Path: SFO → LIS → LHR Duration: 15h 15m",
  //                 "Path: LHR → LIS → SFO Duration: 16h 35m"
  //             ],
  //             "travelOriginDate":"2023-05-03",
  //             "travelReturnDate":"2023-05-10",
  //             "price":"267.00 EUR"
  //         }
  //     ]
  // }
  // ]
  try {
    for (let index = 0; index < travellers.length; index++) {
      const element = travellers[index];
      for (let j = 0; j < element.flights.length; j++) {
        const flight = element.flights[j];
        customers.push([
          element.travellerName,
          flight.travelPaths.join(" "),
          flight.travelOriginDate,
          flight.travelReturnDate,
          flight.price,
        ]);
      }
    }
  } catch (error) {
    console.error;
  }

  console.log(customers);
  //   customers.push([1, "John Hammond", "United States"]);
  //   customers.push([2, "Mudassar Khan", "India"]);
  //   customers.push([3, "Suzanne Mathews", "France"]);
  //   customers.push([4, "Robert Schidner", "Russia"]);

  //Create a HTML Table element.
  var table = document.createElement("TABLE");
  table.border = "1";

  //Get the count of columns.
  var columnCount = customers[0].length;

  //Add the header row.
  var row = table.insertRow(-1);
  for (var i = 0; i < columnCount; i++) {
    var headerCell = document.createElement("TH");

    headerCell.innerHTML = customers[0][i];
    row.appendChild(headerCell);
  }

  //Add the data rows.
  for (var i = 1; i < customers.length; i++) {
    row = table.insertRow(-1);

    for (var j = 0; j < columnCount; j++) {
      var cell = row.insertCell(-1);

      cell.innerHTML = customers[i][j];
    }
  }

  var dvTable = document.getElementById("divTable");
  dvTable.innerHTML = "";
  dvTable.appendChild(table);
}

GenerateTable();
