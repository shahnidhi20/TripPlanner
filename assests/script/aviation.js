const originInput = document.getElementById("origin-input");
const originOptions = document.getElementById("origin-options");
const destinationInput = document.getElementById("destination-input");
const destinationOptions = document.getElementById("destination-options");
const flightTypeSelect = document.getElementById("flight-type-select");
const departureDateInput = document.getElementById("departure-date-input");
const returnDate = document.getElementById("return-date");
const returnDateInput = document.getElementById("return-date-input");
const travelClassSelect = document.getElementById("travel-class-select");
const adultsInput = document.getElementById("adults-input");
const childrenInput = document.getElementById("children-input");
const infantsInput = document.getElementById("infants-input");
const searchButton = document.getElementById("search-button");
const searchResultsSeparator = document.getElementById(
  "search-results-separator"
);
const searchResultsLoader = document.getElementById("search-results-loader");
const searchResults = document.getElementById("search-results");

let destinationCityCodes = {};
let originCityCodes = {};

const autocompleteTimeout = 300;
let autocompleteTimeoutHandle = 0;

//reset the UI to its orginial state
const reset = () => {
  originInput.value = "";
  destinationInput.value = "";
  flightTypeSelect.value = "one-way";
  departureDateInput.valueAsDate = new Date();
  returnDateInput.valueAsDate = new Date();
  returnDate.classList.add("d-none");
  travelClassSelect.value = "ECONOMY";
  adultsInput.value = 1;
  childrenInput.value = 0;
  infantsInput.value = 0;
  searchButton.disabled = true;
};

function getToken() {
  //get the token
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("client_id", "WyBbmNJ3z9mp6SlptF61CDxZWvIAGTaA");
  urlencoded.append("client_secret", "r0ulJlmWev2x7Hw0");
  urlencoded.append("grant_type", "client_credentials");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("https://test.api.amadeus.com/v1/security/oauth2/token", requestOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      console.log(result);
      localStorage.setItem("access_token", result.access_token);
    })
    .catch((error) => console.log("error", error));
}

//input the letter/char in the text field
document.body.addEventListener("change", () => {
  searchButton.disabled = !originInput.value || !destinationInput.value;
});

//input the letter/char in the text field
originInput.addEventListener("input", () => {
  if (originInput) {
    autocomplete(originInput, originOptions, originCityCodes);
  }
});

destinationInput.addEventListener("input", () => {
  if (destinationInput) {
    autocomplete(destinationInput, destinationOptions, destinationCityCodes);
  }
});

//Auto Compelte the Location for origin and destination fields
function autocomplete(input, datalist, citycodes) {
  clearTimeout(autocompleteTimeoutHandle);
  autocompleteTimeoutHandle = setTimeout(async () => {
    try {
      const params = new URLSearchParams({ keyword: input.value });

      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer" + " " + localStorage.getItem("access_token")
      );
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&${params}`,
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      datalist.textContent = "";

      data.data.forEach(function (item, index, data) {
        citycodes[item.name.toLowerCase()] = item.iataCode;
        datalist.insertAdjacentHTML(
          "beforeend",
          `<option value="${item.name}"></option>`
        );
      });
      // data.forEach((entry) => {
      //   cityCodes[entry.name.toLowerCase()] = entry.iataCode;
      //   datalist.insertAdjacentHTML(
      //     "beforeend",
      //     `<option value="${entry.name}"></option>`
      //   );
      // });
    } catch (error) {
      console.error(error);
    }
  }, autocompleteTimeout);
}

flightTypeSelect.addEventListener("change", () => {
  if (flightTypeSelect.value === "one-way") {
    returnDate.classList.add("d-none");
  } else {
    returnDate.classList.remove("d-none");
  }
});

const formatDate = (date) => {
  const [formattedDate] = date.toISOString().split("T");

  return formattedDate;
};

const formatNumber = (number) => {
  return `${Math.abs(parseInt(number))}`;
};

//Search the Flights based on the input provided by the user in the UI
const search = async () => {
  try {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer" + " " + localStorage.getItem("access_token")
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const returns = flightTypeSelect.value === "round-trip";

    var urlencoded = new URLSearchParams();
    urlencoded.append(
      "originLocationCode",
      originCityCodes[originInput.value.toLowerCase()]
    );
    urlencoded.append(
      "destinationLocationCode",
      destinationCityCodes[destinationInput.value.toLowerCase()]
    );
    urlencoded.append(
      "departureDate",
      formatDate(departureDateInput.valueAsDate)
    );
    urlencoded.append("returnDate", formatDate(returnDateInput.valueAsDate));

    urlencoded.append("adults", formatNumber(adultsInput.value));
    // urlencoded.append("children", formatNumber(childrenInput.value));
    // urlencoded.append("travelClass", travelClassSelect.value);
    urlencoded.append("max", "5");

    const response = await fetch(
      `https://test.api.amadeus.com/v2/shopping/flight-offers?${urlencoded}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

//Show the results of the API in the list form.
const showResults = (results) => {
  if (results.length === 0) {
    searchResults.insertAdjacentHTML(
      "beforeend",
      `<li class="list-group-item d-flex justify-content-center align-items-center" id="search-no-results">
        No results
      </li>`
    );
  }

  results.data.forEach(function (movement, i, arr) {
    const priceLabel = `${movement.price.total} ${movement.price.currency}`;

    searchResults.insertAdjacentHTML(
      "beforeend",
      `<li class="flex-column flex-sm-row list-group-item d-flex justify-content-between align-items-sm-center">

      ${movement.itineraries
        .map((itinerary, index) => {
          const [, hours, minutes] = itinerary.duration.match(/(\d+)H(\d+)?/);
          const travelPath = itinerary.segments
            .flatMap(({ arrival, departure }, index, segments) => {
              if (index === segments.length - 1) {
                return [departure.iataCode, arrival.iataCode];
              }
              return [departure.iataCode];
            })
            .join(" → ");

          return `
                    <div class="flex-column flex-1 m-2 d-flex">
                      <small class="text-muted">${
                        index === 0 ? "Outbound" : "Return"
                      }</small>
                      <span class="fw-bold">${travelPath}</span>
                      <div>${hours || 0}h ${minutes || 0}m</div>
                    </div>
                  `;
        })
        .join("")}


      <span class="bg-primary rounded-pill m-2 badge fs-6">${priceLabel}</span>
              </li>`
    );
  });
};

//Search button click
searchButton.addEventListener("click", async () => {
  // search
  searchResultsSeparator.classList.remove("d-none");
  searchResultsLoader.classList.remove("d-none");
  searchResults.textContent = "";

  const results = await search();

  searchResultsLoader.classList.add("d-none");
  showResults(results);
});

reset();

getToken();
