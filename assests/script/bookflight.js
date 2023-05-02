var travellers = {};

function addTraveller() {
  alert("clicked add");
  //create travellers object
  // get the booked flight from local storage

  var flightbooked = JSON.parse(localStorage.getItem("flight_booked"));

  var traveller = {
    fName: document.getElementById("fname").value,
    lName: document.getElementById("lname").value,
    datofBirthValue: document.getElementById("birthdateinput").valueAsDate,
    email: document.getElementById("emailInput").value,
    phone: document.getElementById("phId").value,
  };
  //travellers.push(traveller);
  confirmFlightOrder(flightbooked, traveller);
  // confirmbooking();
}

function confirmbooking() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer " + localStorage.getItem("access_token")
  );

  var raw = JSON.stringify({
    data: {
      type: "flight-order",
      flightOffers: [
        {
          type: "flight-offer",
          id: "1",
          source: "GDS",
          instantTicketingRequired: false,
          nonHomogeneous: false,
          paymentCardRequired: false,
          lastTicketingDate: "2023-05-06",
          itineraries: [
            {
              segments: [
                {
                  departure: {
                    iataCode: "LHR",
                    terminal: "2",
                    at: "2023-05-13T17:00:00",
                  },
                  arrival: {
                    iataCode: "CPH",
                    terminal: "3",
                    at: "2023-05-13T19:50:00",
                  },
                  carrierCode: "SK",
                  number: "506",
                  aircraft: {
                    code: "32N",
                  },
                  operating: {
                    carrierCode: "SK",
                  },
                  duration: "PT1H50M",
                  id: "3",
                  numberOfStops: 0,
                  co2Emissions: [
                    {
                      weight: 109,
                      weightUnit: "KG",
                      cabin: "ECONOMY",
                    },
                  ],
                },
                {
                  departure: {
                    iataCode: "CPH",
                    terminal: "3",
                    at: "2023-05-14T16:35:00",
                  },
                  arrival: {
                    iataCode: "SFO",
                    terminal: "I",
                    at: "2023-05-14T18:55:00",
                  },
                  carrierCode: "SK",
                  number: "935",
                  aircraft: {
                    code: "333",
                  },
                  operating: {
                    carrierCode: "SK",
                  },
                  duration: "PT11H20M",
                  id: "4",
                  numberOfStops: 0,
                  co2Emissions: [
                    {
                      weight: 435,
                      weightUnit: "KG",
                      cabin: "ECONOMY",
                    },
                  ],
                },
              ],
            },
            {
              segments: [
                {
                  departure: {
                    iataCode: "SFO",
                    terminal: "I",
                    at: "2023-05-27T21:05:00",
                  },
                  arrival: {
                    iataCode: "CPH",
                    terminal: "3",
                    at: "2023-05-28T16:45:00",
                  },
                  carrierCode: "SK",
                  number: "936",
                  aircraft: {
                    code: "333",
                  },
                  operating: {
                    carrierCode: "SK",
                  },
                  duration: "PT10H40M",
                  id: "5",
                  numberOfStops: 0,
                  co2Emissions: [
                    {
                      weight: 435,
                      weightUnit: "KG",
                      cabin: "ECONOMY",
                    },
                  ],
                },
                {
                  departure: {
                    iataCode: "CPH",
                    terminal: "3",
                    at: "2023-05-28T18:30:00",
                  },
                  arrival: {
                    iataCode: "LHR",
                    terminal: "2",
                    at: "2023-05-28T19:30:00",
                  },
                  carrierCode: "SK",
                  number: "1507",
                  aircraft: {
                    code: "32N",
                  },
                  operating: {
                    carrierCode: "SK",
                  },
                  duration: "PT2H",
                  id: "6",
                  numberOfStops: 0,
                  co2Emissions: [
                    {
                      weight: 109,
                      weightUnit: "KG",
                      cabin: "ECONOMY",
                    },
                  ],
                },
              ],
            },
          ],
          price: {
            currency: "EUR",
            total: "1070.46",
            base: "138.00",
            fees: [
              {
                amount: "0.00",
                type: "SUPPLIER",
              },
              {
                amount: "0.00",
                type: "TICKETING",
              },
              {
                amount: "0.00",
                type: "FORM_OF_PAYMENT",
              },
            ],
            grandTotal: "1070.46",
            billingCurrency: "EUR",
          },
          pricingOptions: {
            fareType: ["PUBLISHED"],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ["SK"],
          travelerPricings: [
            {
              travelerId: "1",
              fareOption: "STANDARD",
              travelerType: "ADULT",
              price: {
                currency: "EUR",
                total: "535.23",
                base: "69.00",
                taxes: [
                  {
                    amount: "6.34",
                    code: "XY",
                  },
                  {
                    amount: "26.58",
                    code: "ZO",
                  },
                  {
                    amount: "252.00",
                    code: "YQ",
                  },
                  {
                    amount: "5.07",
                    code: "AY",
                  },
                  {
                    amount: "3.47",
                    code: "XA",
                  },
                  {
                    amount: "5.90",
                    code: "YC",
                  },
                  {
                    amount: "98.40",
                    code: "GB",
                  },
                  {
                    amount: "26.22",
                    code: "UB",
                  },
                  {
                    amount: "38.18",
                    code: "US",
                  },
                  {
                    amount: "4.07",
                    code: "XF",
                  },
                ],
                refundableTaxes: "171.98",
              },
              fareDetailsBySegment: [
                {
                  segmentId: "3",
                  cabin: "ECONOMY",
                  fareBasis: "LLXEUGHT",
                  brandedFare: "GOLIGHT",
                  class: "L",
                  includedCheckedBags: {
                    quantity: 0,
                  },
                },
                {
                  segmentId: "4",
                  cabin: "ECONOMY",
                  fareBasis: "LLXEUGHT",
                  brandedFare: "GOLIGHT",
                  class: "L",
                  includedCheckedBags: {
                    quantity: 0,
                  },
                },
                {
                  segmentId: "5",
                  cabin: "ECONOMY",
                  fareBasis: "LLWEUGHT",
                  brandedFare: "GOLIGHT",
                  class: "L",
                  includedCheckedBags: {
                    quantity: 0,
                  },
                },
                {
                  segmentId: "6",
                  cabin: "ECONOMY",
                  fareBasis: "LLWEUGHT",
                  brandedFare: "GOLIGHT",
                  class: "L",
                  includedCheckedBags: {
                    quantity: 0,
                  },
                },
              ],
            },
            {
              travelerId: "2",
              fareOption: "STANDARD",
              travelerType: "ADULT",
              price: {
                currency: "EUR",
                total: "535.23",
                base: "69.00",
                taxes: [
                  {
                    amount: "6.34",
                    code: "XY",
                  },
                  {
                    amount: "26.58",
                    code: "ZO",
                  },
                  {
                    amount: "252.00",
                    code: "YQ",
                  },
                  {
                    amount: "5.07",
                    code: "AY",
                  },
                  {
                    amount: "3.47",
                    code: "XA",
                  },
                  {
                    amount: "5.90",
                    code: "YC",
                  },
                  {
                    amount: "98.40",
                    code: "GB",
                  },
                  {
                    amount: "26.22",
                    code: "UB",
                  },
                  {
                    amount: "38.18",
                    code: "US",
                  },
                  {
                    amount: "4.07",
                    code: "XF",
                  },
                ],
                refundableTaxes: "171.98",
              },
              fareDetailsBySegment: [
                {
                  segmentId: "3",
                  cabin: "ECONOMY",
                  fareBasis: "LLXEUGHT",
                  brandedFare: "GOLIGHT",
                  class: "L",
                  includedCheckedBags: {
                    quantity: 0,
                  },
                },
                {
                  segmentId: "4",
                  cabin: "ECONOMY",
                  fareBasis: "LLXEUGHT",
                  brandedFare: "GOLIGHT",
                  class: "L",
                  includedCheckedBags: {
                    quantity: 0,
                  },
                },
                {
                  segmentId: "5",
                  cabin: "ECONOMY",
                  fareBasis: "LLWEUGHT",
                  brandedFare: "GOLIGHT",
                  class: "L",
                  includedCheckedBags: {
                    quantity: 0,
                  },
                },
                {
                  segmentId: "6",
                  cabin: "ECONOMY",
                  fareBasis: "LLWEUGHT",
                  brandedFare: "GOLIGHT",
                  class: "L",
                  includedCheckedBags: {
                    quantity: 0,
                  },
                },
              ],
            },
          ],
        },
      ],
      travelers: [
        {
          id: "1",
          dateOfBirth: "1982-01-16",
          name: {
            firstName: "JORGE",
            lastName: "GONZALES",
          },
          gender: "MALE",
          contact: {
            emailAddress: "jorge.gonzales833@telefonica.es",
            phones: [
              {
                deviceType: "MOBILE",
                countryCallingCode: "34",
                number: "480080076",
              },
            ],
          },
          documents: [
            {
              documentType: "PASSPORT",
              birthPlace: "Madrid",
              issuanceLocation: "Madrid",
              issuanceDate: "2015-04-14",
              number: "00000000",
              expiryDate: "2025-04-14",
              issuanceCountry: "ES",
              validityCountry: "ES",
              nationality: "ES",
              holder: true,
            },
          ],
        },
        {
          id: "2",
          dateOfBirth: "2012-10-11",
          gender: "FEMALE",
          contact: {
            emailAddress: "jorge.gonzales833@telefonica.es",
            phones: [
              {
                deviceType: "MOBILE",
                countryCallingCode: "34",
                number: "480080076",
              },
            ],
          },
          name: {
            firstName: "ADRIANA",
            lastName: "GONZALES",
          },
        },
      ],
      remarks: {
        general: [
          {
            subType: "GENERAL_MISCELLANEOUS",
            text: "ONLINE BOOKING FROM INCREIBLE VIAJES",
          },
        ],
      },
      ticketingAgreement: {
        option: "DELAY_TO_CANCEL",
        delay: "6D",
      },
      contacts: [
        {
          addresseeName: {
            firstName: "PABLO",
            lastName: "RODRIGUEZ",
          },
          companyName: "INCREIBLE VIAJES",
          purpose: "STANDARD",
          phones: [
            {
              deviceType: "LANDLINE",
              countryCallingCode: "34",
              number: "480080071",
            },
            {
              deviceType: "MOBILE",
              countryCallingCode: "33",
              number: "480080072",
            },
          ],
          emailAddress: "support@increibleviajes.es",
          address: {
            lines: ["Calle Prado, 16"],
            postalCode: "28014",
            cityName: "Madrid",
            countryCode: "ES",
          },
        },
      ],
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://test.api.amadeus.com/v1/booking/flight-orders", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log("Resposne of flight order" + result))
    .catch((error) => console.log("error", error));
}

const formatDate = (date) => {
  const [formattedDate] = date.toISOString().split("T");

  return formattedDate;
};

function confirmFlightOrder(flightbooked, traveller) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer " + localStorage.getItem("access_token")
  );

  var raw = JSON.stringify({
    data: {
      type: "flight-order",
      flightOffers: [flightbooked],
      travelers: [
        {
          id: "1",
          dateOfBirth: formatDate(traveller.datofBirthValue),
          name: {
            firstName: traveller.fName,
            lastName: traveller.lName,
          },
          gender: "FEMALE", //genderSelect.value.toUpperCase(),
          contact: {
            emailAddress: traveller.email,
            phones: [
              {
                deviceType: "MOBILE",
                countryCallingCode: "510",
                number: traveller.phone,
              },
            ],
          },
          documents: [],
        },
        // {
        //   id: "2",
        //   dateOfBirth: "2012-10-11",
        //   gender: "FEMALE",
        //   contact: {
        //     emailAddress: "jorge.gonzales833@telefonica.es",
        //     phones: [
        //       {
        //         deviceType: "MOBILE",
        //         countryCallingCode: "34",
        //         number: "480080076",
        //       },
        //     ],
        //   },
        //   name: {
        //     firstName: "ADRIANA",
        //     lastName: "GONZALES",
        //   },
        // },
      ],
      remarks: {
        general: [
          {
            subType: "GENERAL_MISCELLANEOUS",
            text: "ONLINE BOOKING FROM INCREIBLE VIAJES",
          },
        ],
      },
      ticketingAgreement: {
        option: "DELAY_TO_CANCEL",
        delay: "6D",
      },
      contacts: [
        // {
        //   addresseeName: {
        //     firstName: "PABLO",
        //     lastName: "RODRIGUEZ",
        //   },
        //   companyName: "INCREIBLE VIAJES",
        //   purpose: "STANDARD",
        //   phones: [
        //     {
        //       deviceType: "LANDLINE",
        //       countryCallingCode: "34",
        //       number: "480080071",
        //     },
        //     {
        //       deviceType: "MOBILE",
        //       countryCallingCode: "33",
        //       number: "480080072",
        //     },
        //   ],
        //   emailAddress: "support@increibleviajes.es",
        //   address: {
        //     lines: ["Calle Prado, 16"],
        //     postalCode: "28014",
        //     cityName: "Madrid",
        //     countryCode: "ES",
        //   },
        // },
      ],
    },
  });

  console.log("Raw post body: " + raw);
  var rawob = JSON.parse(raw);
  console.log(rawob);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  var flightPrice = "";
  var flightdetails = "";
  // flightOffers[0].data.forEach(function (movement, i, arr) {
  //   flightPrice = `${movement.price.total} ${movement.price.currency}`;

  //   flightdetails = movement.itineraries
  //     .map((itinerary, index) => {
  //       const [, hours, minutes] = itinerary.duration.match(/(\d+)H(\d+)?/);
  //       const travelPath = itinerary.segments
  //         .flatMap(({ arrival, departure }, index, segments) => {
  //           if (index === segments.length - 1) {
  //             return [departure.iataCode, arrival.iataCode];
  //           }
  //           return [departure.iataCode];
  //         })
  //         .join(" → ");

  //       return `travelPath: ${travelPath} , duration: ${hours || 0}h ${
  //         minutes || 0
  //       }m`;
  //     })
  //     .join("");
  // });

  try {
    fetch(
      "https://test.api.amadeus.com/v1/booking/flight-orders",
      requestOptions
    )
      .then((resposne) => resposne.json())
      .then((data) => {
        for (const flight in data.flightOffers) {
          console.log("FLight: " + flight);
        }
      })
      .catch(console.error);
  } catch (error) {
    console.log("error of flight-orders", error);
  }

  // save it in tripLibrary oBject
  var trip = {
    travellerName: travelfName.value + " " + travellName.value,
    flights: [
      {
        travelPath: flightdetails,
        travelOriginDate: formatDate(departureDateInput.valueAsDate),
        travelReturnDate: formatDate(returnDateInput.valueAsDate),
        price: flightPrice,
      },
    ],
  };

  //console.log(trip);

  //on the response show modal of booking conifmred.
  //on ok click of that popup it will clear the controls with the text saying flight booked.

  // fetch("https://test.api.amadeus.com/v1/booking/flight-orders", requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log("Resopnse of flight-order : " + result))
  //   .catch((error) => console.log("error", error));
}
