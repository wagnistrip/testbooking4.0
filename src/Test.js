import React, { useEffect, useState } from "react";

const Test = () => {
  const [data,setData]=useState(
     {
                "@attributes": {
                    "TraceId": "6e866ea3-c38f-4c78-816b-ec75c114677d",
                    "TransactionId": "19B536ED0A0D6A957D6C90E3FFADFC85",
                    "ResponseTime": "1487",
                    "DistanceUnits": "MI",
                    "CurrencyType": "INR"
                },
                "airFlightDetailsList": {
                    "airFlightDetails": [
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAlgofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T19:10:00.000+05:30",
                                "ArrivalTime": "2024-10-11T21:20:00.000+05:30",
                                "FlightTime": "130",
                                "TravelTime": "130",
                                "Equipment": "32N",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAngofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T07:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T09:15:00.000+05:30",
                                "FlightTime": "135",
                                "TravelTime": "135",
                                "Equipment": "32N",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKApgofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T14:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T16:15:00.000+05:30",
                                "FlightTime": "135",
                                "TravelTime": "135",
                                "Equipment": "32N",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKArgofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T21:20:00.000+05:30",
                                "ArrivalTime": "2024-10-11T23:35:00.000+05:30",
                                "FlightTime": "135",
                                "TravelTime": "135",
                                "Equipment": "32N",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAtgofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T22:30:00.000+05:30",
                                "ArrivalTime": "2024-10-12T00:45:00.000+05:30",
                                "FlightTime": "135",
                                "TravelTime": "135",
                                "Equipment": "32N",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAvgofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T08:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T10:20:00.000+05:30",
                                "FlightTime": "140",
                                "TravelTime": "140",
                                "Equipment": "321",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAxgofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T09:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T11:20:00.000+05:30",
                                "FlightTime": "140",
                                "TravelTime": "140",
                                "Equipment": "32N",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAzgofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T10:15:00.000+05:30",
                                "ArrivalTime": "2024-10-11T12:35:00.000+05:30",
                                "FlightTime": "140",
                                "TravelTime": "140",
                                "Equipment": "32N",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA1gofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T20:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T22:25:00.000+05:30",
                                "FlightTime": "145",
                                "TravelTime": "145",
                                "Equipment": "77W",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA3gofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T15:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T17:30:00.000+05:30",
                                "FlightTime": "150",
                                "TravelTime": "150",
                                "Equipment": "320",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA5gofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T17:15:00.000+05:30",
                                "ArrivalTime": "2024-10-11T20:05:00.000+05:30",
                                "FlightTime": "170",
                                "TravelTime": "170",
                                "Equipment": "77W",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA7gofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "IDR",
                                "DepartureTime": "2024-10-11T14:30:00.000+05:30",
                                "ArrivalTime": "2024-10-11T16:05:00.000+05:30",
                                "FlightTime": "95",
                                "TravelTime": "215",
                                "GroundTime": "35",
                                "Distance": "412",
                                "Equipment": "32N",
                                "OnTimePerformance": "-1",
                                "OriginTerminal": "3"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA8gofWAAAAA==",
                                "Origin": "IDR",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T16:40:00.000+05:30",
                                "ArrivalTime": "2024-10-11T18:05:00.000+05:30",
                                "FlightTime": "85",
                                "TravelTime": "215",
                                "Distance": "315",
                                "Equipment": "32N",
                                "OnTimePerformance": "-1",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA+gofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T14:20:00.000+05:30",
                                "ArrivalTime": "2024-10-11T16:25:00.000+05:30",
                                "FlightTime": "125",
                                "TravelTime": "125",
                                "Equipment": "320",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAAhofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T15:30:00.000+05:30",
                                "ArrivalTime": "2024-10-11T17:35:00.000+05:30",
                                "FlightTime": "125",
                                "TravelTime": "125",
                                "Equipment": "321",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAChofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T05:50:00.000+05:30",
                                "ArrivalTime": "2024-10-11T08:00:00.000+05:30",
                                "FlightTime": "130",
                                "TravelTime": "130",
                                "Equipment": "320",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAEhofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T11:40:00.000+05:30",
                                "ArrivalTime": "2024-10-11T13:50:00.000+05:30",
                                "FlightTime": "130",
                                "TravelTime": "130",
                                "Equipment": "320",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAGhofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T12:50:00.000+05:30",
                                "ArrivalTime": "2024-10-11T15:00:00.000+05:30",
                                "FlightTime": "130",
                                "TravelTime": "130",
                                "Equipment": "320",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAIhofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T02:30:00.000+05:30",
                                "ArrivalTime": "2024-10-11T04:45:00.000+05:30",
                                "FlightTime": "135",
                                "TravelTime": "135",
                                "Equipment": "320",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAKhofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T07:30:00.000+05:30",
                                "ArrivalTime": "2024-10-11T09:45:00.000+05:30",
                                "FlightTime": "135",
                                "TravelTime": "135",
                                "Equipment": "320",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAMhofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T08:55:00.000+05:30",
                                "ArrivalTime": "2024-10-11T11:10:00.000+05:30",
                                "FlightTime": "135",
                                "TravelTime": "135",
                                "Equipment": "321",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAOhofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T10:20:00.000+05:30",
                                "ArrivalTime": "2024-10-11T12:35:00.000+05:30",
                                "FlightTime": "135",
                                "TravelTime": "135",
                                "Equipment": "320",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAQhofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "AMD",
                                "DepartureTime": "2024-10-11T21:25:00.000+05:30",
                                "ArrivalTime": "2024-10-11T22:55:00.000+05:30",
                                "FlightTime": "90",
                                "TravelTime": "530",
                                "Equipment": "320",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "1"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAShofWAAAAA==",
                                "Origin": "AMD",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-12T04:50:00.000+05:30",
                                "ArrivalTime": "2024-10-12T06:15:00.000+05:30",
                                "FlightTime": "85",
                                "TravelTime": "530",
                                "Equipment": "320",
                                "OriginTerminal": "1",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAUhofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "AMD",
                                "DepartureTime": "2024-10-11T18:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T19:35:00.000+05:30",
                                "FlightTime": "95",
                                "TravelTime": "735",
                                "Equipment": "321",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "1"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAWhofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "AMD",
                                "DepartureTime": "2024-10-11T13:30:00.000+05:30",
                                "ArrivalTime": "2024-10-11T15:00:00.000+05:30",
                                "FlightTime": "90",
                                "TravelTime": "1005",
                                "Equipment": "320",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "1"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAYhofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T17:50:00.000+05:30",
                                "ArrivalTime": "2024-10-11T20:00:00.000+05:30",
                                "FlightTime": "130",
                                "TravelTime": "130",
                                "Equipment": "320",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAahofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T21:30:00.000+05:30",
                                "ArrivalTime": "2024-10-11T23:40:00.000+05:30",
                                "FlightTime": "130",
                                "TravelTime": "130",
                                "Equipment": "321",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAchofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T16:50:00.000+05:30",
                                "ArrivalTime": "2024-10-11T19:05:00.000+05:30",
                                "FlightTime": "135",
                                "TravelTime": "135",
                                "Equipment": "320",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAehofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T19:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T21:15:00.000+05:30",
                                "FlightTime": "135",
                                "TravelTime": "135",
                                "Equipment": "789",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAghofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T19:45:00.000+05:30",
                                "ArrivalTime": "2024-10-11T22:00:00.000+05:30",
                                "FlightTime": "135",
                                "TravelTime": "135",
                                "Equipment": "321",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAihofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T21:55:00.000+05:30",
                                "ArrivalTime": "2024-10-12T00:15:00.000+05:30",
                                "FlightTime": "140",
                                "TravelTime": "140",
                                "Equipment": "321",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAkhofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T20:40:00.000+05:30",
                                "ArrivalTime": "2024-10-11T23:05:00.000+05:30",
                                "FlightTime": "145",
                                "TravelTime": "145",
                                "Equipment": "320",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAmhofWAAAAA==",
                                "Origin": "AMD",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T17:25:00.000+05:30",
                                "ArrivalTime": "2024-10-11T19:00:00.000+05:30",
                                "FlightTime": "95",
                                "TravelTime": "330",
                                "Equipment": "320",
                                "OriginTerminal": "1",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAohofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "HYD",
                                "DepartureTime": "2024-10-11T10:25:00.000+05:30",
                                "ArrivalTime": "2024-10-11T12:35:00.000+05:30",
                                "FlightTime": "130",
                                "TravelTime": "280",
                                "Equipment": "320",
                                "OriginTerminal": "3"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAqhofWAAAAA==",
                                "Origin": "HYD",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T13:20:00.000+05:30",
                                "ArrivalTime": "2024-10-11T15:05:00.000+05:30",
                                "FlightTime": "105",
                                "TravelTime": "280",
                                "Equipment": "320",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAshofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "UDR",
                                "DepartureTime": "2024-10-11T13:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T14:15:00.000+05:30",
                                "FlightTime": "75",
                                "TravelTime": "305",
                                "Equipment": "319",
                                "OriginTerminal": "3"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAuhofWAAAAA==",
                                "Origin": "UDR",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T16:30:00.000+05:30",
                                "ArrivalTime": "2024-10-11T18:05:00.000+05:30",
                                "FlightTime": "95",
                                "TravelTime": "305",
                                "Equipment": "32A",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAwhofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "GOI",
                                "DepartureTime": "2024-10-11T10:50:00.000+05:30",
                                "ArrivalTime": "2024-10-11T13:20:00.000+05:30",
                                "FlightTime": "150",
                                "TravelTime": "355",
                                "Equipment": "321",
                                "OriginTerminal": "3"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAyhofWAAAAA==",
                                "Origin": "GOI",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T15:25:00.000+05:30",
                                "ArrivalTime": "2024-10-11T16:45:00.000+05:30",
                                "FlightTime": "80",
                                "TravelTime": "355",
                                "Equipment": "321",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA0hofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "VNS",
                                "DepartureTime": "2024-10-11T10:40:00.000+05:30",
                                "ArrivalTime": "2024-10-11T12:05:00.000+05:30",
                                "FlightTime": "85",
                                "TravelTime": "310",
                                "Equipment": "32A",
                                "OriginTerminal": "3"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA2hofWAAAAA==",
                                "Origin": "VNS",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T13:25:00.000+05:30",
                                "ArrivalTime": "2024-10-11T15:50:00.000+05:30",
                                "FlightTime": "145",
                                "TravelTime": "310",
                                "Equipment": "32N",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA4hofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "CCU",
                                "DepartureTime": "2024-10-11T06:45:00.000+05:30",
                                "ArrivalTime": "2024-10-11T09:00:00.000+05:30",
                                "FlightTime": "135",
                                "TravelTime": "345",
                                "Equipment": "321",
                                "OriginTerminal": "3"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA6hofWAAAAA==",
                                "Origin": "CCU",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T09:45:00.000+05:30",
                                "ArrivalTime": "2024-10-11T12:30:00.000+05:30",
                                "FlightTime": "165",
                                "TravelTime": "345",
                                "Equipment": "321",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA8hofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "GOX",
                                "DepartureTime": "2024-10-11T12:25:00.000+05:30",
                                "ArrivalTime": "2024-10-11T15:10:00.000+05:30",
                                "FlightTime": "165",
                                "TravelTime": "285",
                                "Equipment": "320",
                                "OriginTerminal": "3"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA+hofWAAAAA==",
                                "Origin": "GOX",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T15:50:00.000+05:30",
                                "ArrivalTime": "2024-10-11T17:10:00.000+05:30",
                                "FlightTime": "80",
                                "TravelTime": "285",
                                "Equipment": "320",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAAiofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "VNS",
                                "DepartureTime": "2024-10-11T13:20:00.000+05:30",
                                "ArrivalTime": "2024-10-11T14:40:00.000+05:30",
                                "FlightTime": "80",
                                "TravelTime": "310",
                                "Equipment": "320",
                                "OriginTerminal": "3"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKACiofWAAAAA==",
                                "Origin": "VNS",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T16:15:00.000+05:30",
                                "ArrivalTime": "2024-10-11T18:30:00.000+05:30",
                                "FlightTime": "135",
                                "TravelTime": "310",
                                "Equipment": "320",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAEiofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T19:55:00.000+05:30",
                                "ArrivalTime": "2024-10-11T22:00:00.000+05:30",
                                "FlightTime": "125",
                                "TravelTime": "125",
                                "Equipment": "737",
                                "OriginTerminal": "1D",
                                "DestinationTerminal": "1"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAGiofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T06:10:00.000+05:30",
                                "ArrivalTime": "2024-10-11T08:20:00.000+05:30",
                                "FlightTime": "130",
                                "TravelTime": "130",
                                "Equipment": "32S",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "1"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAIiofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T20:15:00.000+05:30",
                                "ArrivalTime": "2024-10-11T22:30:00.000+05:30",
                                "FlightTime": "135",
                                "TravelTime": "135",
                                "Equipment": "737",
                                "OriginTerminal": "1D",
                                "DestinationTerminal": "1"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAKiofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BLR",
                                "DepartureTime": "2024-10-11T16:05:00.000+05:30",
                                "ArrivalTime": "2024-10-11T18:45:00.000+05:30",
                                "FlightTime": "160",
                                "TravelTime": "350",
                                "Equipment": "321",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAMiofWAAAAA==",
                                "Origin": "BLR",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T20:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T21:55:00.000+05:30",
                                "FlightTime": "115",
                                "TravelTime": "350",
                                "Equipment": "320",
                                "OriginTerminal": "2",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAOiofWAAAAA==",
                                "Origin": "DEL",
                                "Destination": "BLR",
                                "DepartureTime": "2024-10-11T17:40:00.000+05:30",
                                "ArrivalTime": "2024-10-11T20:30:00.000+05:30",
                                "FlightTime": "170",
                                "TravelTime": "340",
                                "Equipment": "320",
                                "OriginTerminal": "3",
                                "DestinationTerminal": "2"
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAQiofWAAAAA==",
                                "Origin": "BLR",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T21:35:00.000+05:30",
                                "ArrivalTime": "2024-10-11T23:20:00.000+05:30",
                                "FlightTime": "105",
                                "TravelTime": "340",
                                "Equipment": "320",
                                "OriginTerminal": "2",
                                "DestinationTerminal": "2"
                            }
                        }
                    ]
                },
                "airAirSegmentList": {
                    "airAirSegment": [
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAkgofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "624",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T19:10:00.000+05:30",
                                "ArrivalTime": "2024-10-11T21:20:00.000+05:30",
                                "FlightTime": "130",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "32N",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAlgofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAmgofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "887",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T07:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T09:15:00.000+05:30",
                                "FlightTime": "135",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "32N",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAngofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAogofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "863",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T14:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T16:15:00.000+05:30",
                                "FlightTime": "135",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "32N",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKApgofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAqgofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "605",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T21:20:00.000+05:30",
                                "ArrivalTime": "2024-10-11T23:35:00.000+05:30",
                                "FlightTime": "135",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "32N",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKArgofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAsgofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "814",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T22:30:00.000+05:30",
                                "ArrivalTime": "2024-10-12T00:45:00.000+05:30",
                                "FlightTime": "135",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "32N",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAtgofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAugofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "665",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T08:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T10:20:00.000+05:30",
                                "FlightTime": "140",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "321",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAvgofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAwgofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "678",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T09:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T11:20:00.000+05:30",
                                "FlightTime": "140",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "32N",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAxgofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAygofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "865",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T10:15:00.000+05:30",
                                "ArrivalTime": "2024-10-11T12:35:00.000+05:30",
                                "FlightTime": "140",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "32N",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAzgofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA0gofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "805",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T20:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T22:25:00.000+05:30",
                                "FlightTime": "145",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "77W",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA1gofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA2gofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "856",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T15:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T17:30:00.000+05:30",
                                "FlightTime": "150",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA3gofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA4gofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "441",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T17:15:00.000+05:30",
                                "ArrivalTime": "2024-10-11T20:05:00.000+05:30",
                                "FlightTime": "170",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "77W",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA5gofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA6gofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "636",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T14:30:00.000+05:30",
                                "ArrivalTime": "2024-10-11T18:05:00.000+05:30",
                                "FlightTime": "215",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "32N",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "NumberOfStops": "1",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": [
                                {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKA7gofWAAAAA=="
                                    }
                                },
                                {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKA8gofWAAAAA=="
                                    }
                                }
                            ]
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA9gofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "951",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T14:20:00.000+05:30",
                                "ArrivalTime": "2024-10-11T16:25:00.000+05:30",
                                "FlightTime": "125",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA+gofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA/gofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "933",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T15:30:00.000+05:30",
                                "ArrivalTime": "2024-10-11T17:35:00.000+05:30",
                                "FlightTime": "125",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "321",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAAhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKABhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "975",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T05:50:00.000+05:30",
                                "ArrivalTime": "2024-10-11T08:00:00.000+05:30",
                                "FlightTime": "130",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAChofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKADhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "945",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T11:40:00.000+05:30",
                                "ArrivalTime": "2024-10-11T13:50:00.000+05:30",
                                "FlightTime": "130",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAEhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAFhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "993",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T12:50:00.000+05:30",
                                "ArrivalTime": "2024-10-11T15:00:00.000+05:30",
                                "FlightTime": "130",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAGhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAHhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "983",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T02:30:00.000+05:30",
                                "ArrivalTime": "2024-10-11T04:45:00.000+05:30",
                                "FlightTime": "135",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAIhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAJhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "943",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T07:30:00.000+05:30",
                                "ArrivalTime": "2024-10-11T09:45:00.000+05:30",
                                "FlightTime": "135",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAKhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKALhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "963",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T08:55:00.000+05:30",
                                "ArrivalTime": "2024-10-11T11:10:00.000+05:30",
                                "FlightTime": "135",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "321",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAMhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKANhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "995",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T10:20:00.000+05:30",
                                "ArrivalTime": "2024-10-11T12:35:00.000+05:30",
                                "FlightTime": "135",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAOhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAPhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "929",
                                "Origin": "DEL",
                                "Destination": "AMD",
                                "DepartureTime": "2024-10-11T21:25:00.000+05:30",
                                "ArrivalTime": "2024-10-11T22:55:00.000+05:30",
                                "FlightTime": "90",
                                "Distance": "472",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAQhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKARhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "918",
                                "Origin": "AMD",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-12T04:50:00.000+05:30",
                                "ArrivalTime": "2024-10-12T06:15:00.000+05:30",
                                "FlightTime": "85",
                                "Distance": "276",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAShofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAThofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "969",
                                "Origin": "DEL",
                                "Destination": "AMD",
                                "DepartureTime": "2024-10-11T18:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T19:35:00.000+05:30",
                                "FlightTime": "95",
                                "Distance": "472",
                                "ETicketability": "Yes",
                                "Equipment": "321",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAUhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAVhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "979",
                                "Origin": "DEL",
                                "Destination": "AMD",
                                "DepartureTime": "2024-10-11T13:30:00.000+05:30",
                                "ArrivalTime": "2024-10-11T15:00:00.000+05:30",
                                "FlightTime": "90",
                                "Distance": "472",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAWhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAXhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "955",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T17:50:00.000+05:30",
                                "ArrivalTime": "2024-10-11T20:00:00.000+05:30",
                                "FlightTime": "130",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAYhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAZhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "981",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T21:30:00.000+05:30",
                                "ArrivalTime": "2024-10-11T23:40:00.000+05:30",
                                "FlightTime": "130",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "321",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAahofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAbhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "941",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T16:50:00.000+05:30",
                                "ArrivalTime": "2024-10-11T19:05:00.000+05:30",
                                "FlightTime": "135",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAchofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAdhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "977",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T19:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T21:15:00.000+05:30",
                                "FlightTime": "135",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "789",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAehofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAfhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "985",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T19:45:00.000+05:30",
                                "ArrivalTime": "2024-10-11T22:00:00.000+05:30",
                                "FlightTime": "135",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "321",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAghofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAhhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "999",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T21:55:00.000+05:30",
                                "ArrivalTime": "2024-10-12T00:15:00.000+05:30",
                                "FlightTime": "140",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "321",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAihofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAjhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "957",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T20:40:00.000+05:30",
                                "ArrivalTime": "2024-10-11T23:05:00.000+05:30",
                                "FlightTime": "145",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAkhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAlhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "956",
                                "Origin": "AMD",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T17:25:00.000+05:30",
                                "ArrivalTime": "2024-10-11T19:00:00.000+05:30",
                                "FlightTime": "95",
                                "Distance": "276",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAmhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAnhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "859",
                                "Origin": "DEL",
                                "Destination": "HYD",
                                "DepartureTime": "2024-10-11T10:25:00.000+05:30",
                                "ArrivalTime": "2024-10-11T12:35:00.000+05:30",
                                "FlightTime": "130",
                                "Distance": "788",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Cached status used. Polled avail exists",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "P",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAohofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAphofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "878",
                                "Origin": "HYD",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T13:20:00.000+05:30",
                                "ArrivalTime": "2024-10-11T15:05:00.000+05:30",
                                "FlightTime": "105",
                                "Distance": "387",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Cached status used. Polled avail exists",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "P",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAqhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKArhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "469",
                                "Origin": "DEL",
                                "Destination": "UDR",
                                "DepartureTime": "2024-10-11T13:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T14:15:00.000+05:30",
                                "FlightTime": "75",
                                "Distance": "338",
                                "ETicketability": "Yes",
                                "Equipment": "319",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAshofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAthofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "644",
                                "Origin": "UDR",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T16:30:00.000+05:30",
                                "ArrivalTime": "2024-10-11T18:05:00.000+05:30",
                                "FlightTime": "95",
                                "Distance": "388",
                                "ETicketability": "Yes",
                                "Equipment": "32A",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAuhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAvhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "885",
                                "Origin": "DEL",
                                "Destination": "GOI",
                                "DepartureTime": "2024-10-11T10:50:00.000+05:30",
                                "ArrivalTime": "2024-10-11T13:20:00.000+05:30",
                                "FlightTime": "150",
                                "Distance": "928",
                                "ETicketability": "Yes",
                                "Equipment": "321",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAwhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAxhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "664",
                                "Origin": "GOI",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T15:25:00.000+05:30",
                                "ArrivalTime": "2024-10-11T16:45:00.000+05:30",
                                "FlightTime": "80",
                                "Distance": "257",
                                "ETicketability": "Yes",
                                "Equipment": "321",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAyhofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAzhofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "406",
                                "Origin": "DEL",
                                "Destination": "VNS",
                                "DepartureTime": "2024-10-11T10:40:00.000+05:30",
                                "ArrivalTime": "2024-10-11T12:05:00.000+05:30",
                                "FlightTime": "85",
                                "Distance": "415",
                                "ETicketability": "Yes",
                                "Equipment": "32A",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA0hofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA1hofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "696",
                                "Origin": "VNS",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T13:25:00.000+05:30",
                                "ArrivalTime": "2024-10-11T15:50:00.000+05:30",
                                "FlightTime": "145",
                                "Distance": "776",
                                "ETicketability": "Yes",
                                "Equipment": "32N",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA2hofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA3hofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "401",
                                "Origin": "DEL",
                                "Destination": "CCU",
                                "DepartureTime": "2024-10-11T06:45:00.000+05:30",
                                "ArrivalTime": "2024-10-11T09:00:00.000+05:30",
                                "FlightTime": "135",
                                "Distance": "816",
                                "ETicketability": "Yes",
                                "Equipment": "321",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA4hofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA5hofWAAAAA==",
                                "Group": "0",
                                "Carrier": "AI",
                                "FlightNumber": "676",
                                "Origin": "CCU",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T09:45:00.000+05:30",
                                "ArrivalTime": "2024-10-11T12:30:00.000+05:30",
                                "FlightTime": "165",
                                "Distance": "1035",
                                "ETicketability": "Yes",
                                "Equipment": "321",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA6hofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA7hofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "555",
                                "Origin": "DEL",
                                "Destination": "GOX",
                                "DepartureTime": "2024-10-11T12:25:00.000+05:30",
                                "ArrivalTime": "2024-10-11T15:10:00.000+05:30",
                                "FlightTime": "165",
                                "Distance": "911",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA8hofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA9hofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "588",
                                "Origin": "GOX",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T15:50:00.000+05:30",
                                "ArrivalTime": "2024-10-11T17:10:00.000+05:30",
                                "FlightTime": "80",
                                "Distance": "242",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA+hofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA/hofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "673",
                                "Origin": "DEL",
                                "Destination": "VNS",
                                "DepartureTime": "2024-10-11T13:20:00.000+05:30",
                                "ArrivalTime": "2024-10-11T14:40:00.000+05:30",
                                "FlightTime": "80",
                                "Distance": "415",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAAiofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKABiofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "622",
                                "Origin": "VNS",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T16:15:00.000+05:30",
                                "ArrivalTime": "2024-10-11T18:30:00.000+05:30",
                                "FlightTime": "135",
                                "Distance": "776",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKACiofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKADiofWAAAAA==",
                                "Group": "0",
                                "Carrier": "H1",
                                "FlightNumber": "860",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T19:55:00.000+05:30",
                                "ArrivalTime": "2024-10-11T22:00:00.000+05:30",
                                "FlightTime": "125",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "737",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "PolledAvailabilityOption": "No polled avail exists",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "A",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airCodeshareInfo": "SPICEJET",
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAEiofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAFiofWAAAAA==",
                                "Group": "0",
                                "Carrier": "H1",
                                "FlightNumber": "1885",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T06:10:00.000+05:30",
                                "ArrivalTime": "2024-10-11T08:20:00.000+05:30",
                                "FlightTime": "130",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "32S",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "PolledAvailabilityOption": "No polled avail exists",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "A",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airCodeshareInfo": "SPICEJET",
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAGiofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAHiofWAAAAA==",
                                "Group": "0",
                                "Carrier": "H1",
                                "FlightNumber": "1673",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T20:15:00.000+05:30",
                                "ArrivalTime": "2024-10-11T22:30:00.000+05:30",
                                "FlightTime": "135",
                                "Distance": "708",
                                "ETicketability": "Yes",
                                "Equipment": "737",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "PolledAvailabilityOption": "No polled avail exists",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "A",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airCodeshareInfo": "SPICEJET",
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAIiofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAJiofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "817",
                                "Origin": "DEL",
                                "Destination": "BLR",
                                "DepartureTime": "2024-10-11T16:05:00.000+05:30",
                                "ArrivalTime": "2024-10-11T18:45:00.000+05:30",
                                "FlightTime": "160",
                                "Distance": "1063",
                                "ETicketability": "Yes",
                                "Equipment": "321",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAKiofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKALiofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "850",
                                "Origin": "BLR",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T20:00:00.000+05:30",
                                "ArrivalTime": "2024-10-11T21:55:00.000+05:30",
                                "FlightTime": "115",
                                "Distance": "519",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAMiofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKANiofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "813",
                                "Origin": "DEL",
                                "Destination": "BLR",
                                "DepartureTime": "2024-10-11T17:40:00.000+05:30",
                                "ArrivalTime": "2024-10-11T20:30:00.000+05:30",
                                "FlightTime": "170",
                                "Distance": "1063",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAOiofWAAAAA=="
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAPiofWAAAAA==",
                                "Group": "0",
                                "Carrier": "UK",
                                "FlightNumber": "840",
                                "Origin": "BLR",
                                "Destination": "BOM",
                                "DepartureTime": "2024-10-11T21:35:00.000+05:30",
                                "ArrivalTime": "2024-10-11T23:20:00.000+05:30",
                                "FlightTime": "105",
                                "Distance": "519",
                                "ETicketability": "Yes",
                                "Equipment": "320",
                                "ChangeOfPlane": "false",
                                "ParticipantLevel": "Secure Sell",
                                "LinkAvailability": "true",
                                "PolledAvailabilityOption": "Polled avail used",
                                "OptionalServicesIndicator": "false",
                                "AvailabilitySource": "S",
                                "AvailabilityDisplayType": "Fare Shop/Optimal Shop"
                            },
                            "airAirAvailInfo": {
                                "@attributes": {
                                    "ProviderCode": "1G"
                                }
                            },
                            "airFlightDetailsRef": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAQiofWAAAAA=="
                                }
                            }
                        }
                    ]
                },
                "airFareInfoList": {
                    "airFareInfo": [
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKARiofWAAAAA==",
                                "FareBasis": "UU1YXSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR5100",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtEOwiAMRT9mue9tg268MYEoUVmiLpGX/f9n2DJNbELvhdNcGkIQEkdeJPzXgG2YC0p9ABWk57TccWAisF4aiCVjXbm9n6XAMpjYUO14V7ZBii4dVRDH6HZkhdZ7yjdl1JNVGfYzzOoDfiZf1NY5vdJyTkST9366yhfSCF31A9UtLBA=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAgpofWAAAAA==",
                                    "BrandID": "1497074",
                                    "UpSellBrandID": "1497073",
                                    "BrandTier": "0001"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "UU1YWSII",
                                        "FareInfoRef": "Tnb4cHVqWDKAqkofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAbiofWAAAAA==",
                                "FareBasis": "KL1PYS",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR8220",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YS"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjksOwjAMRA9TzX5sQKW7AElF1BIQn0U2vf8xsFOQasmesZ7jOISg1D0H1bCNDkv3mZDLEyig5fl+w1GVEGsqKJowzfKoL/gGoTgoDa4qPsbLEA8mGGXkijxQW41pNsa211Tg/8KtvcDfpKvZcorvXKRNk7v8Y+xhd34BPtsrIw==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAipofWAAAAA==",
                                    "BrandID": "1088379",
                                    "UpSellBrandID": "1088378",
                                    "BrandTier": "0002"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "KL1PYF",
                                        "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAriofWAAAAA==",
                                "FareBasis": "LL1PYS",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR9720",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YS"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjs0OAiEMhB9mM/dp1azcUGHjRkTjz4HLvv9j2LKa2ARmmq8diDEqdcugGv9rwDK8L5jrA6ignePtijAqIdY0UDSjFLm3JzxBKA5qh6uKj/EU0s4Ek0xckRdav1MuxthzTQX+LtzaBn4mn83WQ3rNVazfK7mZv4wj7J8fRHYrMA==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAkpofWAAAAA==",
                                    "BrandID": "1088379",
                                    "UpSellBrandID": "1088378",
                                    "BrandTier": "0002"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "LL1PYF",
                                        "FareInfoRef": "Tnb4cHVqWDKADlofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA1iofWAAAAA==",
                                "FareBasis": "OL1PYL",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "HYD",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR5870",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YL"
                                }
                            },
                            "airBaggageAllowance": {
                                "airNumberOfPieces": "1",
                                "airMaxWeight": []
                            },
                            "airFareRuleKey": "gws-eJxNjtEKwjAMRT9m3Peb6tj2VrEdK5Yoog998f8/w6SbYCC5N5w0TYwxMJy5hBD/Y8BneN9Q9AkoaLm1hHGeCLGmgRIy7lUercI3CMWBdrir+BivSxpNsMrKHXmg9ZpyNca+11Tg/8KtvcDP5M2sXtKrqFg/WzmVg3GC3fkFSFQrNg==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAmpofWAAAAA==",
                                    "BrandID": "1088380",
                                    "UpSellBrandID": "1088379",
                                    "BrandTier": "0001"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "VL1PYS",
                                        "FareInfoRef": "Tnb4cHVqWDKANlofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA8iofWAAAAA==",
                                "FareBasis": "OL1PYL",
                                "PassengerTypeCode": "ADT",
                                "Origin": "HYD",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR4045",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YL"
                                }
                            },
                            "airBaggageAllowance": {
                                "airNumberOfPieces": "1",
                                "airMaxWeight": []
                            },
                            "airFareRuleKey": "gws-eJxNjkEOwjAMBB9T7d22UtHeAqRVI0qKEBxy4f/PYJ2CVEv2rjWO4xijiQUZzeIxOny69w25PIECYV62O4KEHsamQtQmbKs+6grfoKJKUBrcVX1MrmPqKZh1lh15oLa61EQmbS9V4f/CLV/gb6aFtpzTKxdlP7Bo/jE5gXd+AUL7KzA=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAopofWAAAAA==",
                                    "BrandID": "1088380",
                                    "UpSellBrandID": "1088379",
                                    "BrandTier": "0001"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "VL1PYS",
                                        "FareInfoRef": "Tnb4cHVqWDKAUlofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAAjofWAAAAA==",
                                "FareBasis": "UU1YXSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "UDR",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR4793",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjsEKAyEMRD9mmXuSSl1vLipbabGwrdC99P8/o4nbQgNmJrw4GmMUEkdBJP7XhPe0VNS2AQ2kp+cNzocTWIcdxFLQO++vR62wDCY21AY+lG2RkstnFSSf3IGssI+ey00ZjWRVhr0Ms3oDP1MuatuSn/m+ZqI5hDBf5QvJQ7/6AevKLD8=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAqpofWAAAAA==",
                                    "BrandID": "1497074",
                                    "UpSellBrandID": "1497073",
                                    "BrandTier": "0001"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "UU1YWSII",
                                        "FareInfoRef": "Tnb4cHVqWDKAYlofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAHjofWAAAAA==",
                                "FareBasis": "UU1YXSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "UDR",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR5150",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtEKwjAMRT9m3PckdG5962yGFrGDacG++P+fYdopGGjuDSe9bQhBSBx5kfBfA97DkpDyDmSQnfN2x8gjQWyoIJYVpXB9PVJCy2BiNpQ7PpTbIkWnJxPEKboDtULtvehujHqyKaO9jGbtBn5mvZrNiz51uyjR7L2fb/KFNMG++gHgQSwx",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAspofWAAAAA==",
                                    "BrandID": "1497074",
                                    "UpSellBrandID": "1497073",
                                    "BrandTier": "0001"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "UU1YWSII",
                                        "FareInfoRef": "Tnb4cHVqWDKAflofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKALjofWAAAAA==",
                                "FareBasis": "UU1YXSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "GOI",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR7170",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtEKwyAMRT+m3PckyKxvFpVONixsK8yX/f9nLLEdLGDuDSdejTEKiaMgEv9rwmdaKmp7AA2kZ90qPHsC69BBLAX7zv39rBWWwcSG2sCHsi1ScvmiguSTO5AV+ui53JXRSFZl2MswqzfwM+Wqti35lbc1E80hhPkmJyQP/eoX3YcsIw==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAupofWAAAAA==",
                                    "BrandID": "1497074",
                                    "UpSellBrandID": "1497073",
                                    "BrandTier": "0001"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "UU1YWSII",
                                        "FareInfoRef": "Tnb4cHVqWDKAjlofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKASjofWAAAAA==",
                                "FareBasis": "UU1YXSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "GOI",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR3386",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtEKwyAMRT+m3PcklVbf7LR0MqawrTBf9v+f0Wg3WMDcG0686r0XEkNOxP/XgM+wJKT8ADJIz6XcMY52guhQQSwr9p3r+5kSWgYTs6Lc8ancFimYOKkgzMGcqBVq71tJyqgnqzLay2hWb+Bn1qvavMRXLFskss45e5MvpBn61QPkdiw3",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAwpofWAAAAA==",
                                    "BrandID": "1497074",
                                    "UpSellBrandID": "1497073",
                                    "BrandTier": "0001"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "UU1YWSII",
                                        "FareInfoRef": "Tnb4cHVqWDKAqlofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAWjofWAAAAA==",
                                "FareBasis": "UU1YXSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "VNS",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR5700",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjsEOAiEMRD9mM/e2QVlubIAo0WDiukYu/v9n2LKa2ITOwGuGxhiFxFEQif814T0tFbXdgQbS82wrDp4IrJcOYinYNu6vtVZYBhMbagPvyjZIyeWjCpJPbkdW6KPnclVGI1mVYT/DrD7gZ8pZbVvyI99OmWgOIcwX+ULy0FU/6eosNQ==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAypofWAAAAA==",
                                    "BrandID": "1497074",
                                    "UpSellBrandID": "1497073",
                                    "BrandTier": "0001"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "UU1YWSII",
                                        "FareInfoRef": "Tnb4cHVqWDKAulofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAdjofWAAAAA==",
                                "FareBasis": "UU1YXSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "VNS",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR6635",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtEOwiAMRT9mue9tRTbemLBMYmSJc0Ze/P/PsDBN1oTe25xywXsvJIaciD9Wh083JqT8ADJIz2W5w9rTGaJDAbFM2DYu7zUl1AwmZkW54V25LlIw0aog9MHsqBZK66+8KqOWrMqoL6NavYG/ma5q8xifcZkj0eCcG27yg9RDv/oF608sTw==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA0pofWAAAAA==",
                                    "BrandID": "1497074",
                                    "UpSellBrandID": "1497073",
                                    "BrandTier": "0001"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "UU1YWSII",
                                        "FareInfoRef": "Tnb4cHVqWDKA1lofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAhjofWAAAAA==",
                                "FareBasis": "UU1YXSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "CCU",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR6280",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareSurcharge": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAsjofWAAAAA==",
                                    "Type": "Other",
                                    "Amount": "INR200"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjsEKAyEMRD9mmXsSxNWbi0orLRbaCvXS//+MJrstNGBmwoujKSUhcRRF0n8teC9bQ+t3oIP05DzgKRBYhwliqRiD5+vRGiyDiQ31HR/KtkjZFa+CvGZ3ICvMvZd6VUZeNFmVYS/DrN7Az9Sz2r6VZ7mdClGIMYaLfCGt0K9+ANqdLB8=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA2pofWAAAAA==",
                                    "BrandID": "1497074",
                                    "UpSellBrandID": "1497073",
                                    "BrandTier": "0001"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "UU1YWSII",
                                        "FareInfoRef": "Tnb4cHVqWDKA5lofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAojofWAAAAA==",
                                "FareBasis": "UU1YXSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "CCU",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR8232",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtEKwjAMRT9m3PckFre+dbbDFbEDtWBf/P/PMOkUFkjuDSdNE0IQEkdeJBxjwGeYM3J5AAWkednumOQkEG0aiGVBrdzez5xhO5iYFZWOd2UbpOjSWQVxjG5HFmi9xliVUd+syrCfYVZf4G+WVW2Z0ytt16TT3vvpJj9II/TUL98eLCk=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA4pofWAAAAA==",
                                    "BrandID": "1497074",
                                    "UpSellBrandID": "1497073",
                                    "BrandTier": "0001"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "UU1YWSII",
                                        "FareInfoRef": "Tnb4cHVqWDKAAmofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAtjofWAAAAA==",
                                "FareBasis": "LL1PYS",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "GOX",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR9870",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YS"
                                }
                            },
                            "airFareSurcharge": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA4jofWAAAAA==",
                                    "Type": "Other",
                                    "Amount": "INR500"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjt0KwjAMhR9mnPukTrbeVWzniqWKP2Bv9v6P4cnmwEByTvjSNCEEJ64X71z4jw5L974i1wdQIczL7QN/GATKpkHUJZSi9/aEbVBRA3WFm6qNydnHIwWTTrIhC7S1xlTIxI/cS1XYvzDLF9hNmmnrKb5yVfYjS59/TAbwzi9QOytH",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA6pofWAAAAA==",
                                    "BrandID": "1088379",
                                    "UpSellBrandID": "1088378",
                                    "BrandTier": "0002"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "LL1PYF",
                                        "FareInfoRef": "Tnb4cHVqWDKAEmofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA0jofWAAAAA==",
                                "FareBasis": "LL1PYS",
                                "PassengerTypeCode": "ADT",
                                "Origin": "GOX",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR5245",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YS"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjksOwjAMRA9Tzd62GpXuAvRDREkRH4lsuP8xGKcgYcmesZ7jOMZoYq30ZvE/Gryb5xkp34AMYR7WC4K1AcamQNRGLIteyx2+QUWVIFe4qfqYHPshUDDpJBvyQKl1Xl9kUvdSFf4v3PIFfmY80eb98EhZ2e+8pC+TDrzzA0nhK0I=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA8pofWAAAAA==",
                                    "BrandID": "1088379",
                                    "UpSellBrandID": "1088378",
                                    "BrandTier": "0002"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "LL1PYF",
                                        "FareInfoRef": "Tnb4cHVqWDKALmofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA5jofWAAAAA==",
                                "FareBasis": "LL1PYS",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "VNS",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR8000",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YS"
                                }
                            },
                            "airFareSurcharge": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAEkofWAAAAA==",
                                    "Type": "Other",
                                    "Amount": "INR300"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtEKwjAMRT9m3PebonR7q9gOy0oQp0Jf/P/PMNkmGEjubU9IklIKDCdOIaT/GPAZXguqPgAFLd+6IkYSYo8OSihoTe59hU8QigPd4K7ibbxO+WyCWWbuyAN9q7k0YxwtXQW+F27tAz9Tbmb1kp9VxbutSD0YI+zOL06xKzg=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA+pofWAAAAA==",
                                    "BrandID": "1088379",
                                    "UpSellBrandID": "1088378",
                                    "BrandTier": "0002"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "LL1PYF",
                                        "FareInfoRef": "Tnb4cHVqWDKAPmofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAAkofWAAAAA==",
                                "FareBasis": "LL1PYS",
                                "PassengerTypeCode": "ADT",
                                "Origin": "VNS",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR9500",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YS"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtEKwjAMRT9m3PckOmbfqm5jxRnFqdCX/f9neNspGEjuTU9IGmM0sb0Es/gfDdbmdUHyB+AQ5ul2RWhFYGwyRG3APOs9LygbVFQJvMJNtYzJOfQtBaOOsqESyLW+fSGTupeqKHdRLB/wM8NE68f+mVzZH1h26cukA//5AUsVK0o=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAAqofWAAAAA==",
                                    "BrandID": "1088379",
                                    "UpSellBrandID": "1088378",
                                    "BrandTier": "0002"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "LL1PYF",
                                        "FareInfoRef": "Tnb4cHVqWDKAWmofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAFkofWAAAAA==",
                                "FareBasis": "KOWSG",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR11755",
                                "NegotiatedFare": "false"
                            },
                            "airBaggageAllowance": {
                                "airNumberOfPieces": "1",
                                "airMaxWeight": []
                            },
                            "airFareRuleKey": "gws-eJxNTssKg0AM/BiZeyZU1t621a0rtivUQvHS//+MJi6CgWQmmbxijCp6katqPFuDX5OJqbyBAjG/Ly+QoW1ByzYINWFevusI30Ch18uuVaR3Sd89aICkfaiSG7Y9DulpWl0rRuB34dQmcJCUjZbb8MlcR5FOvVglCbA3//s9Kqo=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKACqofWAAAAA==",
                                    "BrandID": "1387032",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0034"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKATkofWAAAAA==",
                                "FareBasis": "NL1PYS",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "BLR",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR12860",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YS"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjksOwjAMRA9Tzd62SGl3AZKKiChCBRbZcP9jMG5BwpLtsZ5/MUYTO8hsFv9twHt43VDaCjQI/VxXqIVRoKw6RC2jVb33B3yFijpoG9yzeptc5hSYsOgiO3JD32LKlUxt4l6hgB+GS07gJ/KVsp3SszRlPTGE8mVyBB/9AGuMK2A=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAEqofWAAAAA==",
                                    "BrandID": "1088379",
                                    "UpSellBrandID": "1088378",
                                    "BrandTier": "0002"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "NL1PYF",
                                        "FareInfoRef": "Tnb4cHVqWDKAamofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAakofWAAAAA==",
                                "FareBasis": "NL1PYS",
                                "PassengerTypeCode": "ADT",
                                "Origin": "BLR",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR7150",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YS"
                                }
                            },
                            "airFareSurcharge": [
                                {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKAlkofWAAAAA==",
                                        "Type": "Other",
                                        "Amount": "INR300"
                                    }
                                },
                                {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKAmkofWAAAAA==",
                                        "Type": "Other",
                                        "Amount": "INR150"
                                    }
                                }
                            ],
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjsEOwkAIRD+mmTsQm9rbWtvGjRVN1cNe/P/P6LDVRBKYIY9lSSmZ2EF6s/QfDT7N+4rsK+AQ5nC/odNWYGwKRG2CL/ooT8QGFVUCr3BXjTE592NLwayz7CgCpdZhWcmk7qUq4l+E5Qv8zHSh9dP4yq7sjyyWv0w68M4NRL4rMg==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAGqofWAAAAA==",
                                    "BrandID": "1088379",
                                    "UpSellBrandID": "1088378",
                                    "BrandTier": "0002"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "NL1PYF",
                                        "FareInfoRef": "Tnb4cHVqWDKAhmofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAhkofWAAAAA==",
                                "FareBasis": "NL1PYS",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "BLR",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR13010",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YS"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjsEOwjAMQz9m8j0uFNitQDtRUUVowKEX/v8zlmwgEamxrZe0TSkFCXsZQ0j/NeAzvO+oOgMKsXNpMxjiQUBLHcJQoI2P/oRfQaEDXeGm9DG5jjmaYOIkG/JCX3suzRh3QjEVwh+GW9vAz5SbWT3nV1VaPlmL9cvkCPvoAmiSK1Q=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAIqofWAAAAA==",
                                    "BrandID": "1088379",
                                    "UpSellBrandID": "1088378",
                                    "BrandTier": "0002"
                                },
                                "airUpsellBrand": {
                                    "@attributes": {
                                        "FareBasis": "NL1PYF",
                                        "FareInfoRef": "Tnb4cHVqWDKAomofWAAAAA=="
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAqkofWAAAAA==",
                                "FareBasis": "UU1YWSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR5600",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtEOwiAMRT9mue9tg9t4YwJRorJEXQwv/v9n2DJNbELvhdNcGkIQEkdeJPzXgPewFJR6BypIz3G94TASgfXSQCwZ28bt9SgFlsHEhmrHu7INUnRpVEGcotuRFVrvKV+VUU9WZdjPMKsP+Jl8VluX9EzrKRHN3vv5Il9IE3TVD9jxLBk=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAKqofWAAAAA==",
                                    "BrandID": "1497073",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0002"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAzkofWAAAAA==",
                                "FareBasis": "KL1PYF",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR9170",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YF"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "20",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjsEOwjAMQz9m8t0JoNFbgbai2igIwWEX/v8zlnQgEam1o5e4jTEqdc+gGv9rwGd4T6jtCTTQzvl+Q5CREGsWUDRjmuWxFHiCUBy0DjcVH+MlpIMJihRuyAtLv1OejbHnmgr8Xbi1DfxMvpptp/SqTaw/KrmrX8YR9s8VPFcrIA==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAMqofWAAAAA==",
                                    "BrandID": "1088378",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0003"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKADlofWAAAAA==",
                                "FareBasis": "LL1PYF",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR10670",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YF"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "20",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjksOwjAMRA9TzX5sPqW7AGlERAgIwSKb3v8Y2A1IWLI91vMvhKDULSfV8G8DluF9Ra5PoILmp/sNwv1IiFUNFJ1Rijxagq8QioO6wp7F23ie4s4SkiR25Ia2xjgXY30vTcAPw6VN4Cfmi8l6jK9cxeqDkpv8ZRxhj34AYb8rSw==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAOqofWAAAAA==",
                                    "BrandID": "1088378",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0003"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKANlofWAAAAA==",
                                "FareBasis": "VL1PYS",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "HYD",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR6670",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YS"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjksKwzAMRA8TZj9y26TZudQOMQmi9Afe9P7HqOS0EIE0I54sK8YYGI4cQ4j76PDpXguK3gEFLeea0PcDIdZUUELGe5VbfcA3CMWBNrip+BivYzqZYJKJG/JAbTXl1RjbXlOB/wu39gJ/k2ezeknPomL92cqh/BgH2J1fTtkrQg==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAQqofWAAAAA==",
                                    "BrandID": "1088379",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0002"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAUlofWAAAAA==",
                                "FareBasis": "VL1PYS",
                                "PassengerTypeCode": "ADT",
                                "Origin": "HYD",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR4545",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YS"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjs0KAjEMhB9mmXsSWnRvVbvLFrWKf9CL7/8YTroKBpKZ8KVpUkomFmQ0S/8x4D08jyj1BlQIc385I8QQYWwaRG3C66TXdodvUFElqB2uqj4mhzFHCmadZUUeaL0uLZNJ30tV+L9wyxf4mWmhrbv8KFXZb1m0fJlswDs/To4rSA==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKASqofWAAAAA==",
                                    "BrandID": "1088379",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0002"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAYlofWAAAAA==",
                                "FareBasis": "UU1YWSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "UDR",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR5295",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjsEKAyEMRD9mmXsS3O56c1FppcXCtlK89P8/o4nbQgNmJrw4GkIQEkdeJPzXhPe0FZS6AxWkp6Uds/gZrEMHsWS0xv31KAWWwcSG6sCHsi1SdOmkgrhEdyAr9NFTvimjkazKsJdhVm/gZ/JFbd3SM93PiWj13q9X+UJaoF/9AOmELDo=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAUqofWAAAAA==",
                                    "BrandID": "1497073",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0002"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAflofWAAAAA==",
                                "FareBasis": "UU1YWSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "UDR",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR5650",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjt0KwyAMhR+mnPsk2B/v7LSsMmahmwxv9v6P0Wg3aMCcE7541DknJIasiLtWh283R8S0Awmk57Y90Q89QXQoIJYFOXP5vGJEzWBiVpQaPpXrInkTBhX40ZsT1UJpPYddGbVkVUZ9GdXqDfzNsqpNc3iH7R6IJmvt9JAfpBH61QPkBSw6",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAWqofWAAAAA==",
                                    "BrandID": "1497073",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0002"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAjlofWAAAAA==",
                                "FareBasis": "UU1YWSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "GOI",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR7670",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtEKwyAMRT+m3PckSK1vFpVONixsK8OX/f9nLLEbLGDuDSdejTEKiaMgEv9rwntaK2q7Aw2kZ9sr/OwJrEMHsRQcB/fXo1ZYBhMbagOfyrZIyeVZBckndyIr9NFzuSmjkazKsJdhVm/gZ8pFbVvzM+9bJlpCCMtVvpA89Ksf4UssLA==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAYqofWAAAAA==",
                                    "BrandID": "1497073",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0002"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAqlofWAAAAA==",
                                "FareBasis": "UU1YWSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "GOI",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR3890",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtEKwyAMRT+m3Pckk1Xf7LR0MqawrQxf9v+f0WhXaMDcG0686r0XEkNOxJ9rwG+YElJ+ARmk51aeuFhHEB0qiGXGunL9vlNCy2BiVpQ73pXbIgUTryoIYzA7aoXa+1KSMurJqoz2MprVGzjMfFebp/iJZYlE1jlnH/KHNEK/ugHkBCw2",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAaqofWAAAAA==",
                                    "BrandID": "1497073",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0002"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAulofWAAAAA==",
                                "FareBasis": "UU1YWSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "VNS",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR6200",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjsEKwjAQRD+mzH12CW1zS0mKBiWCtUou/v9nuEkVXMjOJG+ZbAhBqY5eNfzXgPewZORyBwpo51k2jEpC7FJB0RX7LvW15YyWIZSGSseHShtkdGk0QZyiO1Ar1N7TejXGnmwqaD+jWXvAz6xns2VJj3Q7JXL23s8X/UJOsFU/5fQsLA==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAcqofWAAAAA==",
                                    "BrandID": "1497073",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0002"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA1lofWAAAAA==",
                                "FareBasis": "UU1YWSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "VNS",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR7135",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtEOwiAMRT9mue9txTHemLAoMbLEOQ0v+//PsDBN1oTe25xywXsvJIaciD9Wh60bE1J+Ahmk5zI/YPl0huhQQCwT1pXLZ0kJNYOJWVFueFeuixRM7FUQbDA7qoXS+jsvyqglqzLqy6hWb+BvppvaPMZXnK+RaHDODXf5QbLQr34B51ksRg==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAeqofWAAAAA==",
                                    "BrandID": "1497073",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0002"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA5lofWAAAAA==",
                                "FareBasis": "UU1YWSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "CCU",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR6780",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjs0KAyEMhB9mmXsi1p+bi8pWWiy0leKl7/8YTXZbaMDMhC+OppQMGUvRmPRfC97L2tD6HeggOTkPuFMgsAwTxKZiDJ6vR2vQDCZW1Hd8KOsiZVucCLLP9kBamHsv9SqMnJdkUYa+DLVyAz9Tz2L7Wp7lthWiEGMMF/OF5CFf/QDeYSwo",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAgqofWAAAAA==",
                                    "BrandID": "1497073",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0002"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAAmofWAAAAA==",
                                "FareBasis": "UU1YWSII",
                                "PassengerTypeCode": "ADT",
                                "Origin": "CCU",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR8735",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "15",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtEOwiAMRT9mue9txTHemLAoMbJEJYaX/f9nWJgma9Le25xS6r0XEkNOxB9jwDbMCSk/gQzSvKwPTPZ0hmhTQSwLSuH6eaWEtoOJWVHueFdugxRMHFUQbDA7aoHaawhFGfXNqoz2M5rVF/ib5aY2z/Ed12vUaefcdJcfJAs99Qvlaiw4",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAiqofWAAAAA==",
                                    "BrandID": "1497073",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0002"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAEmofWAAAAA==",
                                "FareBasis": "LL1PYF",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "GOX",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR10820",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YF"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "20",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjt0KwjAMhR9mnPuTOHG7q9hWi6WKKNgb3/8xlmwKBpKc8OUvhKDUkbNq+LcBn+F1RWkPoIHm59sbwp0SYlUHRRNqlXvP8BVCcdBWuGXxNp7muLeELJkbckNfY0zVmHCyvTQBPwyXNoGfSBeT7RifpYnVk4WxfBkPsEcXZhArUA==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAkqofWAAAAA==",
                                    "BrandID": "1088378",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0003"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKALmofWAAAAA==",
                                "FareBasis": "LL1PYF",
                                "PassengerTypeCode": "ADT",
                                "Origin": "GOX",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR6195",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YF"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "20",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtEKwjAMRT9m3Pfc4NS+Vd2qxdmJKNiX/f9nmHQKBpJ7w0nTxBhVdCNBNf5Hh6V7XZHLAygQy+N8w5ahh1pTIdQR08R7TfANFNJAaXBV+picwtCbIDHJijxQWz3Pb2PS9poS/i/c2gv8zHgxWw7DMxdav/eSv0x2sDs/R10rPw==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAmqofWAAAAA==",
                                    "BrandID": "1088378",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0003"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAPmofWAAAAA==",
                                "FareBasis": "LL1PYF",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "VNS",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR8950",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YF"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "20",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjtsKAjEMRD9mmfdMcXX7VrEtFksQb9AX//8zTHYVDCQz5eTSlFKQsJMYQvqPCe/peUHTG6AQy5fesexnAe0xIAwFvfM6KnwDhQ50hZvS2+QU82yCyiob8sBYay7dmCzR9poSfhdubQI/U85m9ZgfTendVti+TA6wf34ATmwrPg==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAoqofWAAAAA==",
                                    "BrandID": "1088378",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0003"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAWmofWAAAAA==",
                                "FareBasis": "LL1PYF",
                                "PassengerTypeCode": "ADT",
                                "Origin": "VNS",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR10450",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YF"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "20",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjksOwjAMRA9Tzd42rUp3AdqoEcUgflI2vf8xmDQgYcn2WM+/EIKJtTKYhX9rsDavM5LfAYfQj9cLVNpOYKwyRG3CsugtR5QVKqoEvsGatbTJaRg7JkSNUlEx5C2+/UFW9woFymEUyQn8xDRT+mF8JlfWe4Zd+jLpwUc/aF4rZQ==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAqqofWAAAAA==",
                                    "BrandID": "1088378",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0003"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAamofWAAAAA==",
                                "FareBasis": "NL1PYF",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "BLR",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR13810",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YF"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "20",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjk0KAjEMhQ8zvH3SsejsqrbFYgky6KIb738MX2YUDCR54ctfSilIOMgSQvq3Ce/pdUezFTAI/dJX6BxVoKwGREOBdX2MCl+hog5sg3tWb5PrkiMTqlbZkRvGFnPpZDqfuFco4IfhkhP4iXKjtHN+NlPWbJbYvkyO4KMfYYQrSw==",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAsqofWAAAAA==",
                                    "BrandID": "1088378",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0003"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAhmofWAAAAA==",
                                "FareBasis": "NL1PYF",
                                "PassengerTypeCode": "ADT",
                                "Origin": "BLR",
                                "Destination": "BOM",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR8100",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YF"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "20",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjsEOwjAMQz9m8t2JQGO3MraKihHQBIde+P/PIOmGRKTUbp+VNKWk1AMH1fRfHT7d+4ZiK2Cg9/i44yQk1C8VFJ1hizxrRkwQijiwBjeViPEyTEcXZMncUBRqO8dldcY211UQexHWH/Az89WtnadXMdnTWnbGHv7PLzq2Kx0=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAuqofWAAAAA==",
                                    "BrandID": "1088378",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0003"
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAomofWAAAAA==",
                                "FareBasis": "NL1PYF",
                                "PassengerTypeCode": "ADT",
                                "Origin": "DEL",
                                "Destination": "BLR",
                                "EffectiveDate": "2024-09-22T17:59:00.000+05:30",
                                "DepartureDate": "2024-10-11",
                                "Amount": "INR13960",
                                "NegotiatedFare": "false",
                                "NotValidBefore": "2024-10-11",
                                "NotValidAfter": "2024-10-11"
                            },
                            "airFareTicketDesignator": {
                                "@attributes": {
                                    "Value": "YF"
                                }
                            },
                            "airBaggageAllowance": {
                                "airMaxWeight": {
                                    "@attributes": {
                                        "Value": "20",
                                        "Unit": "Kilograms"
                                    }
                                }
                            },
                            "airFareRuleKey": "gws-eJxNjsEOAiEMRD9mM/cOKyo3dIFIJI3Z6IGL//8Zll1NbEJnJq8FYoxO3EGCc/G/Jryn1x1VV0Ahdq5tBWdPAS11CF2GNj56wbiCwgF0g7tyjMkSkjdBYZEdjULfesrNGOdwFFMhxsMY1jbwM/lmVi/pWZWWz9Z8/TI5wT76AWL/K1E=",
                            "airBrand": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAwqofWAAAAA==",
                                    "BrandID": "1088378",
                                    "UpSellBrandFound": "false",
                                    "BrandTier": "0003"
                                }
                            }
                        }
                    ]
                },
                "airRouteList": {
                    "airRoute": {
                        "@attributes": {
                            "Key": "Tnb4cHVqWDKAvmofWAAAAA=="
                        },
                        "airLeg": {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAaiofWAAAAA==",
                                "Group": "0",
                                "Origin": "DEL",
                                "Destination": "BOM"
                            }
                        }
                    }
                },
                "airAirPricePointList": {
                    "airAirPricePoint": [
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAwmofWAAAAA==",
                                "TotalPrice": "INR5923",
                                "BasePrice": "INR5100",
                                "ApproximateTotalPrice": "INR5923",
                                "ApproximateBasePrice": "INR5100",
                                "Taxes": "INR823",
                                "ApproximateTaxes": "INR823",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAxmofWAAAAA==",
                                    "TotalPrice": "INR5923",
                                    "BasePrice": "INR5100",
                                    "ApproximateTotalPrice": "INR5923",
                                    "ApproximateBasePrice": "INR5100",
                                    "Taxes": "INR823",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKARiofWAAAAA=="
                                    }
                                },
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAymofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR264",
                                            "Key": "Tnb4cHVqWDKAzmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKA0mofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKA1mofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR170",
                                            "Key": "Tnb4cHVqWDKA2mofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI BOM 5100UU1YXSII INR5100END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR4000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA3mofWAAAAA==",
                                                    "TravelTime": "P0DT2H10M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKARiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAkgofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA5mofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKARiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAmgofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA7mofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKARiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAogofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA9mofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKARiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAqgofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA/mofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKARiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAsgofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKABnofWAAAAA==",
                                                    "TravelTime": "P0DT2H20M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKARiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAugofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKADnofWAAAAA==",
                                                    "TravelTime": "P0DT2H20M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKARiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAwgofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAFnofWAAAAA==",
                                                    "TravelTime": "P0DT2H20M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKARiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAygofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAHnofWAAAAA==",
                                                    "TravelTime": "P0DT2H25M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKARiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA0gofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAJnofWAAAAA==",
                                                    "TravelTime": "P0DT2H30M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKARiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA2gofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKALnofWAAAAA==",
                                                    "TravelTime": "P0DT2H50M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKARiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA4gofWAAAAA=="
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKANnofWAAAAA==",
                                "TotalPrice": "INR5923",
                                "BasePrice": "INR5100",
                                "ApproximateTotalPrice": "INR5923",
                                "ApproximateBasePrice": "INR5100",
                                "Taxes": "INR823",
                                "ApproximateTaxes": "INR823",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKASiofWAAAAA==",
                                    "TotalPrice": "INR5923",
                                    "BasePrice": "INR5100",
                                    "ApproximateTotalPrice": "INR5923",
                                    "ApproximateBasePrice": "INR5100",
                                    "Taxes": "INR823",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKARiofWAAAAA=="
                                    }
                                },
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKATiofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR264",
                                            "Key": "Tnb4cHVqWDKAUiofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAViofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAWiofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR170",
                                            "Key": "Tnb4cHVqWDKAXiofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI BOM 5100UU1YXSII INR5100END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR4000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKAYiofWAAAAA==",
                                                "TravelTime": "P0DT3H35M0S"
                                            },
                                            "airBookingInfo": {
                                                "@attributes": {
                                                    "BookingCode": "U",
                                                    "BookingCount": "9",
                                                    "CabinClass": "Economy",
                                                    "FareInfoRef": "Tnb4cHVqWDKARiofWAAAAA==",
                                                    "SegmentRef": "Tnb4cHVqWDKA6gofWAAAAA=="
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAOnofWAAAAA==",
                                "TotalPrice": "INR9157",
                                "BasePrice": "INR8220",
                                "ApproximateTotalPrice": "INR9157",
                                "ApproximateBasePrice": "INR8220",
                                "Taxes": "INR937",
                                "ApproximateTaxes": "INR937",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAPnofWAAAAA==",
                                    "TotalPrice": "INR9157",
                                    "BasePrice": "INR8220",
                                    "ApproximateTotalPrice": "INR9157",
                                    "ApproximateBasePrice": "INR8220",
                                    "Taxes": "INR937",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKAbiofWAAAAA=="
                                    }
                                },
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAQnofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR418",
                                            "Key": "Tnb4cHVqWDKARnofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKASnofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKATnofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR130",
                                            "Key": "Tnb4cHVqWDKAUnofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK BOM 8220KL1PYS/YS INR8220END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAVnofWAAAAA==",
                                                    "TravelTime": "P0DT2H5M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA9gofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAXnofWAAAAA==",
                                                    "TravelTime": "P0DT2H5M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA/gofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAZnofWAAAAA==",
                                                    "TravelTime": "P0DT2H10M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKABhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAbnofWAAAAA==",
                                                    "TravelTime": "P0DT2H10M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKADhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAdnofWAAAAA==",
                                                    "TravelTime": "P0DT2H10M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAFhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAfnofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAHhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAhnofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAJhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAjnofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKALhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAlnofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKANhofWAAAAA=="
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAnnofWAAAAA==",
                                "TotalPrice": "INR9293",
                                "BasePrice": "INR8220",
                                "ApproximateTotalPrice": "INR9293",
                                "ApproximateBasePrice": "INR8220",
                                "Taxes": "INR1073",
                                "ApproximateTaxes": "INR1073",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAciofWAAAAA==",
                                    "TotalPrice": "INR9293",
                                    "BasePrice": "INR8220",
                                    "ApproximateTotalPrice": "INR9293",
                                    "ApproximateBasePrice": "INR8220",
                                    "Taxes": "INR1073",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKAbiofWAAAAA=="
                                    }
                                },
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAdiofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR424",
                                            "Key": "Tnb4cHVqWDKAeiofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAfiofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAgiofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR260",
                                            "Key": "Tnb4cHVqWDKAhiofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK X/AMD UK BOM 8220KL1PYS/YS INR8220END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAiiofWAAAAA==",
                                                    "TravelTime": "P0DT8H50M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "K",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                            "SegmentRef": "Tnb4cHVqWDKAPhofWAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "K",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                            "SegmentRef": "Tnb4cHVqWDKARhofWAAAAA=="
                                                        }
                                                    }
                                                ],
                                                "airConnection": {
                                                    "@attributes": {
                                                        "SegmentIndex": "0"
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAliofWAAAAA==",
                                                    "TravelTime": "P0DT12H15M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "K",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                            "SegmentRef": "Tnb4cHVqWDKAThofWAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "K",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                            "SegmentRef": "Tnb4cHVqWDKARhofWAAAAA=="
                                                        }
                                                    }
                                                ],
                                                "airConnection": {
                                                    "@attributes": {
                                                        "SegmentIndex": "0"
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAoiofWAAAAA==",
                                                    "TravelTime": "P0DT16H45M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "K",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                            "SegmentRef": "Tnb4cHVqWDKAVhofWAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "K",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "Tnb4cHVqWDKAbiofWAAAAA==",
                                                            "SegmentRef": "Tnb4cHVqWDKARhofWAAAAA=="
                                                        }
                                                    }
                                                ],
                                                "airConnection": {
                                                    "@attributes": {
                                                        "SegmentIndex": "0"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAonofWAAAAA==",
                                "TotalPrice": "INR10732",
                                "BasePrice": "INR9720",
                                "ApproximateTotalPrice": "INR10732",
                                "ApproximateBasePrice": "INR9720",
                                "Taxes": "INR1012",
                                "ApproximateTaxes": "INR1012",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKApnofWAAAAA==",
                                    "TotalPrice": "INR10732",
                                    "BasePrice": "INR9720",
                                    "ApproximateTotalPrice": "INR10732",
                                    "ApproximateBasePrice": "INR9720",
                                    "Taxes": "INR1012",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKAriofWAAAAA=="
                                    }
                                },
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAqnofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR493",
                                            "Key": "Tnb4cHVqWDKArnofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAsnofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAtnofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR130",
                                            "Key": "Tnb4cHVqWDKAunofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK BOM 9720LL1PYS/YS INR9720END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAvnofWAAAAA==",
                                                    "TravelTime": "P0DT2H10M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAriofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAXhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAxnofWAAAAA==",
                                                    "TravelTime": "P0DT2H10M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAriofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAZhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAznofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAriofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAbhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA1nofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAriofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAdhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA3nofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAriofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAfhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA5nofWAAAAA==",
                                                    "TravelTime": "P0DT2H20M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAriofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAhhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA7nofWAAAAA==",
                                                    "TravelTime": "P0DT2H25M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAriofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAjhofWAAAAA=="
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA9nofWAAAAA==",
                                "TotalPrice": "INR10868",
                                "BasePrice": "INR9720",
                                "ApproximateTotalPrice": "INR10868",
                                "ApproximateBasePrice": "INR9720",
                                "Taxes": "INR1148",
                                "ApproximateTaxes": "INR1148",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAsiofWAAAAA==",
                                    "TotalPrice": "INR10868",
                                    "BasePrice": "INR9720",
                                    "ApproximateTotalPrice": "INR10868",
                                    "ApproximateBasePrice": "INR9720",
                                    "Taxes": "INR1148",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKAriofWAAAAA=="
                                    }
                                },
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAtiofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR499",
                                            "Key": "Tnb4cHVqWDKAuiofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAviofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAwiofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR260",
                                            "Key": "Tnb4cHVqWDKAxiofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK X/AMD UK BOM 9720LL1PYS/YS INR9720END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKAyiofWAAAAA==",
                                                "TravelTime": "P0DT5H30M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAriofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAVhofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAriofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAlhofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA+nofWAAAAA==",
                                "TotalPrice": "INR11073",
                                "BasePrice": "INR9915",
                                "ApproximateTotalPrice": "INR11073",
                                "ApproximateBasePrice": "INR9915",
                                "Taxes": "INR1158",
                                "ApproximateTaxes": "INR1158",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA2iofWAAAAA==",
                                    "TotalPrice": "INR11073",
                                    "BasePrice": "INR9915",
                                    "ApproximateTotalPrice": "INR11073",
                                    "ApproximateBasePrice": "INR9915",
                                    "Taxes": "INR1158",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKA1iofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKA8iofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKA3iofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR509",
                                            "Key": "Tnb4cHVqWDKA4iofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKA5iofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKA6iofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR260",
                                            "Key": "Tnb4cHVqWDKA7iofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK HYD 5870OL1PYL/YL UK BOM 4045OL1PYL/YL INR9915END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3500.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKA9iofWAAAAA==",
                                                "TravelTime": "P0DT4H40M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "O",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKA1iofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAnhofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "O",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKA8iofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAphofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA/nofWAAAAA==",
                                "TotalPrice": "INR11186",
                                "BasePrice": "INR9943",
                                "ApproximateTotalPrice": "INR11186",
                                "ApproximateBasePrice": "INR9943",
                                "Taxes": "INR1243",
                                "ApproximateTaxes": "INR1243",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKABjofWAAAAA==",
                                    "TotalPrice": "INR11186",
                                    "BasePrice": "INR9943",
                                    "ApproximateTotalPrice": "INR11186",
                                    "ApproximateBasePrice": "INR9943",
                                    "Taxes": "INR1243",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAAjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAHjofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKACjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR514",
                                            "Key": "Tnb4cHVqWDKADjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAEjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAFjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "Tnb4cHVqWDKAGjofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI UDR 4793UU1YXSII AI BOM 5150UU1YXSII INR9943END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR4000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKAIjofWAAAAA==",
                                                "TravelTime": "P0DT5H5M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAAjofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKArhofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAHjofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAthofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAAoofWAAAAA==",
                                "TotalPrice": "INR11830",
                                "BasePrice": "INR10556",
                                "ApproximateTotalPrice": "INR11830",
                                "ApproximateBasePrice": "INR10556",
                                "Taxes": "INR1274",
                                "ApproximateTaxes": "INR1274",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAMjofWAAAAA==",
                                    "TotalPrice": "INR11830",
                                    "BasePrice": "INR10556",
                                    "ApproximateTotalPrice": "INR11830",
                                    "ApproximateBasePrice": "INR10556",
                                    "Taxes": "INR1274",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKALjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKASjofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKANjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR545",
                                            "Key": "Tnb4cHVqWDKAOjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAPjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAQjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "Tnb4cHVqWDKARjofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI GOI 7170UU1YXSII AI BOM 3386UU1YXSII INR10556END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR4000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKATjofWAAAAA==",
                                                "TravelTime": "P0DT5H55M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKALjofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAvhofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKASjofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAxhofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKABoofWAAAAA==",
                                "TotalPrice": "INR13698",
                                "BasePrice": "INR12335",
                                "ApproximateTotalPrice": "INR13698",
                                "ApproximateBasePrice": "INR12335",
                                "Taxes": "INR1363",
                                "ApproximateTaxes": "INR1363",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAXjofWAAAAA==",
                                    "TotalPrice": "INR13698",
                                    "BasePrice": "INR12335",
                                    "ApproximateTotalPrice": "INR13698",
                                    "ApproximateBasePrice": "INR12335",
                                    "Taxes": "INR1363",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAWjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAdjofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAYjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR634",
                                            "Key": "Tnb4cHVqWDKAZjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAajofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAbjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "Tnb4cHVqWDKAcjofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI VNS 5700UU1YXSII AI BOM 6635UU1YXSII INR12335END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR4000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKAejofWAAAAA==",
                                                "TravelTime": "P0DT5H10M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAWjofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAzhofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAdjofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA1hofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKACoofWAAAAA==",
                                "TotalPrice": "INR15984",
                                "BasePrice": "INR14512",
                                "ApproximateTotalPrice": "INR15984",
                                "ApproximateBasePrice": "INR14512",
                                "Taxes": "INR1472",
                                "ApproximateTaxes": "INR1472",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAijofWAAAAA==",
                                    "TotalPrice": "INR15984",
                                    "BasePrice": "INR14512",
                                    "ApproximateTotalPrice": "INR15984",
                                    "ApproximateBasePrice": "INR14512",
                                    "Taxes": "INR1472",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAhjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAojofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAjjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR743",
                                            "Key": "Tnb4cHVqWDKAkjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAljofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAmjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "Tnb4cHVqWDKAnjofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI CCU Q200 6080UU1YXSII AI BOM 8232UU1YXSII INR14512END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR4000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKApjofWAAAAA==",
                                                "TravelTime": "P0DT5H45M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAhjofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA3hofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAojofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA5hofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKADoofWAAAAA==",
                                "TotalPrice": "INR17914",
                                "BasePrice": "INR15115",
                                "ApproximateTotalPrice": "INR17914",
                                "ApproximateBasePrice": "INR15115",
                                "Taxes": "INR2799",
                                "ApproximateTaxes": "INR2799",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAujofWAAAAA==",
                                    "TotalPrice": "INR17914",
                                    "BasePrice": "INR15115",
                                    "ApproximateTotalPrice": "INR17914",
                                    "ApproximateBasePrice": "INR15115",
                                    "Taxes": "INR2799",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAtjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKA0jofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR1443",
                                            "Key": "Tnb4cHVqWDKAvjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR769",
                                            "Key": "Tnb4cHVqWDKAwjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAxjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAyjofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR260",
                                            "Key": "Tnb4cHVqWDKAzjofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK GOX Q500 9370LL1PYS/YS UK BOM 5245LL1PYS/YS INR15115END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKA1jofWAAAAA==",
                                                "TravelTime": "P0DT4H45M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "8",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAtjofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA7hofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "8",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKA0jofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA9hofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAEoofWAAAAA==",
                                "TotalPrice": "INR19037",
                                "BasePrice": "INR17500",
                                "ApproximateTotalPrice": "INR19037",
                                "ApproximateBasePrice": "INR17500",
                                "Taxes": "INR1537",
                                "ApproximateTaxes": "INR1537",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA6jofWAAAAA==",
                                    "TotalPrice": "INR19037",
                                    "BasePrice": "INR17500",
                                    "ApproximateTotalPrice": "INR19037",
                                    "ApproximateBasePrice": "INR17500",
                                    "Taxes": "INR1537",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKA5jofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAAkofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKA7jofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR888",
                                            "Key": "Tnb4cHVqWDKA8jofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKA9jofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKA+jofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR260",
                                            "Key": "Tnb4cHVqWDKA/jofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK VNS Q300 7700LL1PYS/YS UK BOM 9500LL1PYS/YS INR17500END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKABkofWAAAAA==",
                                                "TravelTime": "P0DT5H10M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKA5jofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA/hofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAAkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKABiofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAFoofWAAAAA==",
                                "TotalPrice": "INR20449",
                                "BasePrice": "INR11755",
                                "ApproximateTotalPrice": "INR20449",
                                "ApproximateBasePrice": "INR11755",
                                "Taxes": "INR8694",
                                "ApproximateTaxes": "INR8694",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAGkofWAAAAA==",
                                    "TotalPrice": "INR20449",
                                    "BasePrice": "INR11755",
                                    "ApproximateTotalPrice": "INR20449",
                                    "ApproximateBasePrice": "INR11755",
                                    "Taxes": "INR8694",
                                    "LatestTicketingTime": "2024-09-24T17:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "HR",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKAFkofWAAAAA=="
                                    }
                                },
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAHkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR955",
                                            "Key": "Tnb4cHVqWDKAIkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAJkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAKkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YQ",
                                            "Amount": "INR2850",
                                            "Key": "Tnb4cHVqWDKALkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR4500",
                                            "Key": "Tnb4cHVqWDKAMkofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL H1 BOM 11755KOWSG INR11755END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airPercentage": "0.00"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airPercentage": "0.00"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKANkofWAAAAA==",
                                                    "TravelTime": "P0DT2H5M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "4",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAFkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKADiofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAPkofWAAAAA==",
                                                    "TravelTime": "P0DT2H10M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "4",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAFkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAFiofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKARkofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "4",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAFkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAHiofWAAAAA=="
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAGoofWAAAAA==",
                                "TotalPrice": "INR21673",
                                "BasePrice": "INR20010",
                                "ApproximateTotalPrice": "INR21673",
                                "ApproximateBasePrice": "INR20010",
                                "Taxes": "INR1663",
                                "ApproximateTaxes": "INR1663",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAUkofWAAAAA==",
                                    "TotalPrice": "INR21673",
                                    "BasePrice": "INR20010",
                                    "ApproximateTotalPrice": "INR21673",
                                    "ApproximateBasePrice": "INR20010",
                                    "Taxes": "INR1663",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKATkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAakofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAVkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR1014",
                                            "Key": "Tnb4cHVqWDKAWkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAXkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAYkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR260",
                                            "Key": "Tnb4cHVqWDKAZkofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK BLR 12560NL1PYS/YS UK BOM 7150NL1PYS/YS Q DELBOM300INR20010END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKAnkofWAAAAA==",
                                                "TravelTime": "P0DT5H50M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "N",
                                                        "BookingCount": "5",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKATkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAJiofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "N",
                                                        "BookingCount": "5",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAakofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKALiofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAHoofWAAAAA==",
                                "TotalPrice": "INR21830",
                                "BasePrice": "INR20160",
                                "ApproximateTotalPrice": "INR21830",
                                "ApproximateBasePrice": "INR20160",
                                "Taxes": "INR1670",
                                "ApproximateTaxes": "INR1670",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAbkofWAAAAA==",
                                    "TotalPrice": "INR21830",
                                    "BasePrice": "INR20160",
                                    "ApproximateTotalPrice": "INR21830",
                                    "ApproximateBasePrice": "INR20160",
                                    "Taxes": "INR1670",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "ETicketability": "Yes",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G",
                                    "Cat35Indicator": "false"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAhkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAakofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAckofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR1021",
                                            "Key": "Tnb4cHVqWDKAdkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAekofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAfkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR260",
                                            "Key": "Tnb4cHVqWDKAgkofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK BLR 12560NL1PYS/YS UK BOM 7150NL1PYS/YS Q DELBOM150Q DELBOM300INR20160END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKAikofWAAAAA==",
                                                "TravelTime": "P0DT5H40M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "N",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAhkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKANiofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "N",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAakofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAPiofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAIoofWAAAAA==",
                                "TotalPrice": "INR6448",
                                "BasePrice": "INR5600",
                                "ApproximateTotalPrice": "INR6448",
                                "ApproximateBasePrice": "INR5600",
                                "Taxes": "INR848",
                                "ApproximateTaxes": "INR848",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAJoofWAAAAA==",
                                    "TotalPrice": "INR6448",
                                    "BasePrice": "INR5600",
                                    "ApproximateTotalPrice": "INR6448",
                                    "ApproximateBasePrice": "INR5600",
                                    "Taxes": "INR848",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKAqkofWAAAAA=="
                                    }
                                },
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAKoofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR289",
                                            "Key": "Tnb4cHVqWDKALoofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAMoofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKANoofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR170",
                                            "Key": "Tnb4cHVqWDKAOoofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI BOM 5600UU1YWSII INR5600END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3500.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAPoofWAAAAA==",
                                                    "TravelTime": "P0DT2H10M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAqkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAkgofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKARoofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAqkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAmgofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAToofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAqkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAogofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAVoofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAqkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAqgofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAXoofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAqkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAsgofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAZoofWAAAAA==",
                                                    "TravelTime": "P0DT2H20M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAqkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAugofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAboofWAAAAA==",
                                                    "TravelTime": "P0DT2H20M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAqkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAwgofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAdoofWAAAAA==",
                                                    "TravelTime": "P0DT2H20M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAqkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAygofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAfoofWAAAAA==",
                                                    "TravelTime": "P0DT2H25M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAqkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA0gofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAhoofWAAAAA==",
                                                    "TravelTime": "P0DT2H30M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAqkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA2gofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAjoofWAAAAA==",
                                                    "TravelTime": "P0DT2H50M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAqkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA4gofWAAAAA=="
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAloofWAAAAA==",
                                "TotalPrice": "INR6448",
                                "BasePrice": "INR5600",
                                "ApproximateTotalPrice": "INR6448",
                                "ApproximateBasePrice": "INR5600",
                                "Taxes": "INR848",
                                "ApproximateTaxes": "INR848",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKArkofWAAAAA==",
                                    "TotalPrice": "INR6448",
                                    "BasePrice": "INR5600",
                                    "ApproximateTotalPrice": "INR6448",
                                    "ApproximateBasePrice": "INR5600",
                                    "Taxes": "INR848",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKAqkofWAAAAA=="
                                    }
                                },
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAskofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR289",
                                            "Key": "Tnb4cHVqWDKAtkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAukofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAvkofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR170",
                                            "Key": "Tnb4cHVqWDKAwkofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI BOM 5600UU1YWSII INR5600END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3500.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKAxkofWAAAAA==",
                                                "TravelTime": "P0DT3H35M0S"
                                            },
                                            "airBookingInfo": {
                                                "@attributes": {
                                                    "BookingCode": "U",
                                                    "BookingCount": "9",
                                                    "CabinClass": "Economy",
                                                    "FareInfoRef": "Tnb4cHVqWDKAqkofWAAAAA==",
                                                    "SegmentRef": "Tnb4cHVqWDKA6gofWAAAAA=="
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAmoofWAAAAA==",
                                "TotalPrice": "INR10154",
                                "BasePrice": "INR9170",
                                "ApproximateTotalPrice": "INR10154",
                                "ApproximateBasePrice": "INR9170",
                                "Taxes": "INR984",
                                "ApproximateTaxes": "INR984",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAnoofWAAAAA==",
                                    "TotalPrice": "INR10154",
                                    "BasePrice": "INR9170",
                                    "ApproximateTotalPrice": "INR10154",
                                    "ApproximateBasePrice": "INR9170",
                                    "Taxes": "INR984",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKAzkofWAAAAA=="
                                    }
                                },
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAooofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR465",
                                            "Key": "Tnb4cHVqWDKApoofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAqoofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAroofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR130",
                                            "Key": "Tnb4cHVqWDKAsoofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK BOM 9170KL1PYF/YF INR9170END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAtoofWAAAAA==",
                                                    "TravelTime": "P0DT2H5M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA9gofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAvoofWAAAAA==",
                                                    "TravelTime": "P0DT2H5M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA/gofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAxoofWAAAAA==",
                                                    "TravelTime": "P0DT2H10M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKABhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAzoofWAAAAA==",
                                                    "TravelTime": "P0DT2H10M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKADhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA1oofWAAAAA==",
                                                    "TravelTime": "P0DT2H10M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAFhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA3oofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAHhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA5oofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAJhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA7oofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKALhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA9oofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "K",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKANhofWAAAAA=="
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA/oofWAAAAA==",
                                "TotalPrice": "INR10291",
                                "BasePrice": "INR9170",
                                "ApproximateTotalPrice": "INR10291",
                                "ApproximateBasePrice": "INR9170",
                                "Taxes": "INR1121",
                                "ApproximateTaxes": "INR1121",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA0kofWAAAAA==",
                                    "TotalPrice": "INR10291",
                                    "BasePrice": "INR9170",
                                    "ApproximateTotalPrice": "INR10291",
                                    "ApproximateBasePrice": "INR9170",
                                    "Taxes": "INR1121",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKAzkofWAAAAA=="
                                    }
                                },
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKA1kofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR472",
                                            "Key": "Tnb4cHVqWDKA2kofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKA3kofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKA4kofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR260",
                                            "Key": "Tnb4cHVqWDKA5kofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK X/AMD UK BOM 9170KL1PYF/YF INR9170END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA6kofWAAAAA==",
                                                    "TravelTime": "P0DT8H50M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "K",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                            "SegmentRef": "Tnb4cHVqWDKAPhofWAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "K",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                            "SegmentRef": "Tnb4cHVqWDKARhofWAAAAA=="
                                                        }
                                                    }
                                                ],
                                                "airConnection": {
                                                    "@attributes": {
                                                        "SegmentIndex": "0"
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKA9kofWAAAAA==",
                                                    "TravelTime": "P0DT12H15M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "K",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                            "SegmentRef": "Tnb4cHVqWDKAThofWAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "K",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                            "SegmentRef": "Tnb4cHVqWDKARhofWAAAAA=="
                                                        }
                                                    }
                                                ],
                                                "airConnection": {
                                                    "@attributes": {
                                                        "SegmentIndex": "0"
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAAlofWAAAAA==",
                                                    "TravelTime": "P0DT16H45M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "K",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                            "SegmentRef": "Tnb4cHVqWDKAVhofWAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "K",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "Tnb4cHVqWDKAzkofWAAAAA==",
                                                            "SegmentRef": "Tnb4cHVqWDKARhofWAAAAA=="
                                                        }
                                                    }
                                                ],
                                                "airConnection": {
                                                    "@attributes": {
                                                        "SegmentIndex": "0"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAApofWAAAAA==",
                                "TotalPrice": "INR11729",
                                "BasePrice": "INR10670",
                                "ApproximateTotalPrice": "INR11729",
                                "ApproximateBasePrice": "INR10670",
                                "Taxes": "INR1059",
                                "ApproximateTaxes": "INR1059",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKABpofWAAAAA==",
                                    "TotalPrice": "INR11729",
                                    "BasePrice": "INR10670",
                                    "ApproximateTotalPrice": "INR11729",
                                    "ApproximateBasePrice": "INR10670",
                                    "Taxes": "INR1059",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKADlofWAAAAA=="
                                    }
                                },
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKACpofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR540",
                                            "Key": "Tnb4cHVqWDKADpofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAEpofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAFpofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR130",
                                            "Key": "Tnb4cHVqWDKAGpofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK BOM 10670LL1PYF/YF INR10670END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAHpofWAAAAA==",
                                                    "TravelTime": "P0DT2H10M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKADlofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAXhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAJpofWAAAAA==",
                                                    "TravelTime": "P0DT2H10M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKADlofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAZhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKALpofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKADlofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAbhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKANpofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKADlofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAdhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKAPpofWAAAAA==",
                                                    "TravelTime": "P0DT2H15M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKADlofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAfhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKARpofWAAAAA==",
                                                    "TravelTime": "P0DT2H20M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKADlofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAhhofWAAAAA=="
                                                    }
                                                }
                                            },
                                            {
                                                "@attributes": {
                                                    "Key": "Tnb4cHVqWDKATpofWAAAAA==",
                                                    "TravelTime": "P0DT2H25M0S"
                                                },
                                                "airBookingInfo": {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKADlofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAjhofWAAAAA=="
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAVpofWAAAAA==",
                                "TotalPrice": "INR11866",
                                "BasePrice": "INR10670",
                                "ApproximateTotalPrice": "INR11866",
                                "ApproximateBasePrice": "INR10670",
                                "Taxes": "INR1196",
                                "ApproximateTaxes": "INR1196",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAElofWAAAAA==",
                                    "TotalPrice": "INR11866",
                                    "BasePrice": "INR10670",
                                    "ApproximateTotalPrice": "INR11866",
                                    "ApproximateBasePrice": "INR10670",
                                    "Taxes": "INR1196",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": {
                                    "@attributes": {
                                        "Key": "Tnb4cHVqWDKADlofWAAAAA=="
                                    }
                                },
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAFlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR547",
                                            "Key": "Tnb4cHVqWDKAGlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAHlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAIlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR260",
                                            "Key": "Tnb4cHVqWDKAJlofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK X/AMD UK BOM 10670LL1PYF/YF INR10670END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKAKlofWAAAAA==",
                                                "TravelTime": "P0DT5H30M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKADlofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAVhofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKADlofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAlhofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAWpofWAAAAA==",
                                "TotalPrice": "INR12438",
                                "BasePrice": "INR11215",
                                "ApproximateTotalPrice": "INR12438",
                                "ApproximateBasePrice": "INR11215",
                                "Taxes": "INR1223",
                                "ApproximateTaxes": "INR1223",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAOlofWAAAAA==",
                                    "TotalPrice": "INR12438",
                                    "BasePrice": "INR11215",
                                    "ApproximateTotalPrice": "INR12438",
                                    "ApproximateBasePrice": "INR11215",
                                    "Taxes": "INR1223",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKANlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAUlofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAPlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR574",
                                            "Key": "Tnb4cHVqWDKAQlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKARlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKASlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR260",
                                            "Key": "Tnb4cHVqWDKATlofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK HYD 6670VL1PYS/YS UK BOM 4545VL1PYS/YS INR11215END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKAVlofWAAAAA==",
                                                "TravelTime": "P0DT4H40M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "V",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKANlofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAnhofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "V",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAUlofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAphofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAXpofWAAAAA==",
                                "TotalPrice": "INR12238",
                                "BasePrice": "INR10945",
                                "ApproximateTotalPrice": "INR12238",
                                "ApproximateBasePrice": "INR10945",
                                "Taxes": "INR1293",
                                "ApproximateTaxes": "INR1293",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAZlofWAAAAA==",
                                    "TotalPrice": "INR12238",
                                    "BasePrice": "INR10945",
                                    "ApproximateTotalPrice": "INR12238",
                                    "ApproximateBasePrice": "INR10945",
                                    "Taxes": "INR1293",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAYlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAflofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAalofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR564",
                                            "Key": "Tnb4cHVqWDKAblofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAclofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAdlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "Tnb4cHVqWDKAelofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI UDR 5295UU1YWSII AI BOM 5650UU1YWSII INR10945END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3500.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKAglofWAAAAA==",
                                                "TravelTime": "P0DT5H5M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAYlofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKArhofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAflofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAthofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAYpofWAAAAA==",
                                "TotalPrice": "INR12884",
                                "BasePrice": "INR11560",
                                "ApproximateTotalPrice": "INR12884",
                                "ApproximateBasePrice": "INR11560",
                                "Taxes": "INR1324",
                                "ApproximateTaxes": "INR1324",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAklofWAAAAA==",
                                    "TotalPrice": "INR12884",
                                    "BasePrice": "INR11560",
                                    "ApproximateTotalPrice": "INR12884",
                                    "ApproximateBasePrice": "INR11560",
                                    "Taxes": "INR1324",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAjlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAqlofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAllofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR595",
                                            "Key": "Tnb4cHVqWDKAmlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAnlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAolofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "Tnb4cHVqWDKAplofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI GOI 7670UU1YWSII AI BOM 3890UU1YWSII INR11560END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3500.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKArlofWAAAAA==",
                                                "TravelTime": "P0DT5H55M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAjlofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAvhofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAqlofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAxhofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAZpofWAAAAA==",
                                "TotalPrice": "INR14748",
                                "BasePrice": "INR13335",
                                "ApproximateTotalPrice": "INR14748",
                                "ApproximateBasePrice": "INR13335",
                                "Taxes": "INR1413",
                                "ApproximateTaxes": "INR1413",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAvlofWAAAAA==",
                                    "TotalPrice": "INR14748",
                                    "BasePrice": "INR13335",
                                    "ApproximateTotalPrice": "INR14748",
                                    "ApproximateBasePrice": "INR13335",
                                    "Taxes": "INR1413",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAulofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKA1lofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAwlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR684",
                                            "Key": "Tnb4cHVqWDKAxlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAylofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAzlofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "Tnb4cHVqWDKA0lofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI VNS 6200UU1YWSII AI BOM 7135UU1YWSII INR13335END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3500.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKA2lofWAAAAA==",
                                                "TravelTime": "P0DT5H10M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAulofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAzhofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKA1lofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA1hofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAapofWAAAAA==",
                                "TotalPrice": "INR17037",
                                "BasePrice": "INR15515",
                                "ApproximateTotalPrice": "INR17037",
                                "ApproximateBasePrice": "INR15515",
                                "Taxes": "INR1522",
                                "ApproximateTaxes": "INR1522",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKA6lofWAAAAA==",
                                    "TotalPrice": "INR17037",
                                    "BasePrice": "INR15515",
                                    "ApproximateTotalPrice": "INR17037",
                                    "ApproximateBasePrice": "INR15515",
                                    "Taxes": "INR1522",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKA5lofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAAmofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKA7lofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR793",
                                            "Key": "Tnb4cHVqWDKA8lofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKA9lofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKA+lofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "Tnb4cHVqWDKA/lofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI CCU Q200 6580UU1YWSII AI BOM 8735UU1YWSII INR15515END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3500.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKABmofWAAAAA==",
                                                "TravelTime": "P0DT5H45M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKA5lofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA3hofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "U",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAAmofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA5hofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAbpofWAAAAA==",
                                "TotalPrice": "INR19909",
                                "BasePrice": "INR17015",
                                "ApproximateTotalPrice": "INR19909",
                                "ApproximateBasePrice": "INR17015",
                                "Taxes": "INR2894",
                                "ApproximateTaxes": "INR2894",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAFmofWAAAAA==",
                                    "TotalPrice": "INR19909",
                                    "BasePrice": "INR17015",
                                    "ApproximateTotalPrice": "INR19909",
                                    "ApproximateBasePrice": "INR17015",
                                    "Taxes": "INR2894",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAEmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKALmofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR1443",
                                            "Key": "Tnb4cHVqWDKAGmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR864",
                                            "Key": "Tnb4cHVqWDKAHmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAImofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAJmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR260",
                                            "Key": "Tnb4cHVqWDKAKmofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK GOX Q500 10320LL1PYF/YF UK BOM 6195LL1PYF/YF INR17015END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKAMmofWAAAAA==",
                                                "TravelTime": "P0DT4H45M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "8",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAEmofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA7hofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "8",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKALmofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA9hofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAcpofWAAAAA==",
                                "TotalPrice": "INR21032",
                                "BasePrice": "INR19400",
                                "ApproximateTotalPrice": "INR21032",
                                "ApproximateBasePrice": "INR19400",
                                "Taxes": "INR1632",
                                "ApproximateTaxes": "INR1632",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAQmofWAAAAA==",
                                    "TotalPrice": "INR21032",
                                    "BasePrice": "INR19400",
                                    "ApproximateTotalPrice": "INR21032",
                                    "ApproximateBasePrice": "INR19400",
                                    "Taxes": "INR1632",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAPmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAWmofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKARmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR983",
                                            "Key": "Tnb4cHVqWDKASmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKATmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAUmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR260",
                                            "Key": "Tnb4cHVqWDKAVmofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK VNS Q300 8650LL1PYF/YF UK BOM 10450LL1PYF/YF INR19400END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKAXmofWAAAAA==",
                                                "TravelTime": "P0DT5H10M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAPmofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKA/hofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "L",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAWmofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKABiofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAdpofWAAAAA==",
                                "TotalPrice": "INR23668",
                                "BasePrice": "INR21910",
                                "ApproximateTotalPrice": "INR23668",
                                "ApproximateBasePrice": "INR21910",
                                "Taxes": "INR1758",
                                "ApproximateTaxes": "INR1758",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAbmofWAAAAA==",
                                    "TotalPrice": "INR23668",
                                    "BasePrice": "INR21910",
                                    "ApproximateTotalPrice": "INR23668",
                                    "ApproximateBasePrice": "INR21910",
                                    "Taxes": "INR1758",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAamofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAhmofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAcmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR1109",
                                            "Key": "Tnb4cHVqWDKAdmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAemofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAfmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR260",
                                            "Key": "Tnb4cHVqWDKAgmofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK BLR 13510NL1PYF/YF UK BOM 8100NL1PYF/YF Q DELBOM300INR21910END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKAsmofWAAAAA==",
                                                "TravelTime": "P0DT5H50M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "N",
                                                        "BookingCount": "5",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAamofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAJiofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "N",
                                                        "BookingCount": "5",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAhmofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKALiofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAepofWAAAAA==",
                                "TotalPrice": "INR23825",
                                "BasePrice": "INR22060",
                                "ApproximateTotalPrice": "INR23825",
                                "ApproximateBasePrice": "INR22060",
                                "Taxes": "INR1765",
                                "ApproximateTaxes": "INR1765",
                                "CompleteItinerary": "true"
                            },
                            "airAirPricingInfo": {
                                "@attributes": {
                                    "Key": "Tnb4cHVqWDKAimofWAAAAA==",
                                    "TotalPrice": "INR23825",
                                    "BasePrice": "INR22060",
                                    "ApproximateTotalPrice": "INR23825",
                                    "ApproximateBasePrice": "INR22060",
                                    "Taxes": "INR1765",
                                    "LatestTicketingTime": "2024-09-22T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "UK",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAomofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "Tnb4cHVqWDKAhmofWAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "Tnb4cHVqWDKAjmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR1116",
                                            "Key": "Tnb4cHVqWDKAkmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "Tnb4cHVqWDKAlmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "Tnb4cHVqWDKAmmofWAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR260",
                                            "Key": "Tnb4cHVqWDKAnmofWAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK BLR 13510NL1PYF/YF UK BOM 8100NL1PYF/YF Q DELBOM150Q DELBOM300INR22060END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "ADT"
                                    }
                                },
                                "airChangePenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR2500.0"
                                },
                                "airCancelPenalty": {
                                    "@attributes": {
                                        "PenaltyApplies": "Anytime"
                                    },
                                    "airAmount": "INR3000.0"
                                },
                                "airFlightOptionsList": {
                                    "airFlightOption": {
                                        "@attributes": {
                                            "LegRef": "Tnb4cHVqWDKAaiofWAAAAA==",
                                            "Destination": "BOM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "Tnb4cHVqWDKApmofWAAAAA==",
                                                "TravelTime": "P0DT5H40M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "N",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAomofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKANiofWAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "N",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "Tnb4cHVqWDKAhmofWAAAAA==",
                                                        "SegmentRef": "Tnb4cHVqWDKAPiofWAAAAA=="
                                                    }
                                                }
                                            ],
                                            "airConnection": {
                                                "@attributes": {
                                                    "SegmentIndex": "0"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    ]
                },
                "airBrandList": {
                    "airBrand": [
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKAyqofWAAAAA==",
                                "BrandID": "1497073",
                                "Name": "ECO COMFORT PLUS",
                                "BrandedDetailsAvailable": "true",
                                "Carrier": "AI"
                            },
                            "airTitle": [
                                "Eco Comfort Plus",
                                "ECOPLUS"
                            ],
                            "airText": "Eco Comfort Plus"
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA0qofWAAAAA==",
                                "BrandID": "1088380",
                                "Name": "ECO LITE",
                                "BrandedDetailsAvailable": "true",
                                "Carrier": "UK"
                            },
                            "airTitle": [
                                "Economy Lite",
                                "ECOYL"
                            ],
                            "airText": [
                                "Economy Lite\n•\tComplimentary beverages on board\n•\tMeal on board (meal offered subject to availability, check ticketing information) \n•\t15kg checked-in baggage allowance\n•\t7kg hand baggage allowance\n•\tFree seat selection, except emergency exit seats\n•\tChange subject to additional fee (subject to fare rules)\n•\tCancellation not permitted \n• Please note that if the flight is operated by another airline then the on-board product or service maybe different to that described above.",
                                "The fare to suit those travelling light"
                            ],
                            "airImageLocation": [
                                "https://cdn.travelport.com/vistara/UK_general_medium_80633.jpg",
                                "https://cdn.travelport.com/vistara/UK_general_large_80634.jpg"
                            ]
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA2qofWAAAAA==",
                                "BrandID": "1497074",
                                "Name": "ECO COMFORT",
                                "BrandedDetailsAvailable": "true",
                                "Carrier": "AI"
                            },
                            "airTitle": [
                                "Eco Comfort",
                                "ECOCOMF"
                            ],
                            "airText": "Eco Comfort"
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA4qofWAAAAA==",
                                "BrandID": "1387032",
                                "Name": "Spicejet Economy Clsas",
                                "BrandedDetailsAvailable": "true",
                                "Carrier": "H1"
                            },
                            "airTitle": [
                                "Spicejet Economy Class",
                                "Economy"
                            ],
                            "airText": [
                                "SpiceJet is an Indian low-cost airline based at Indira Gandhi International Airport (DEL) in Delhi.\n\nSpiceJet serves over 50 destinations in 9 countries across Asia.   \n                                                                                                        \nEconomy includes:\n-Counter Check-in \n-Carry on baggage 1 piece per passenger free of charge\n Boeing aircraft: max 35x55x25cm\n Bombardier aircraft: max 35x50x23cm\n-Checked baggage for Domestic Flights: 25kg                                          \n-Checked baggage for International Flights\n to/from CMB/DXB/KBL/MCT: 30kg\n to/from BKK/MLE: 20kg\n-Additional/special baggage for an additional fee, refer to fare rules for further information\n                                                                                                                                                                                           \nPlease note that if the flight is operated by another airline then the onboard product or service may be different to that described above. The content on this screen is for information purposes only. Please validate brands and ancillaries at Fare Quote (FQ).",
                                "Fly Spicejet Economy Class service"
                            ],
                            "airImageLocation": [
                                "https://cdn.travelport.com/hahnairsystems/H1_general_large_38859.jpg",
                                "https://cdn.travelport.com/hahnairsystems/H1_general_medium_3706.jpg"
                            ]
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA6qofWAAAAA==",
                                "BrandID": "1088378",
                                "Name": "ECO FLEXI",
                                "BrandedDetailsAvailable": "true",
                                "Carrier": "UK"
                            },
                            "airTitle": [
                                "Economy Flexi",
                                "ECOYF"
                            ],
                            "airText": [
                                "Economy Flexi\n•\tComplimentary beverages on board\n•\tComplimentary meal on board\n•\t20kg checked-in baggage allowance\n•\t7kg hand baggage allowance\n•\tFree seat selection, except emergency exit seats\n•\tOne free change up to 7 days of departure, charges apply thereafter\n•\tFree cancellation up to 7 days before departure, charges apply thereafter\n• Please note that if the flight is operated by another airline then the on-board product or service maybe different to that described above.",
                                "The flexible Economy Class fare"
                            ],
                            "airImageLocation": [
                                "https://cdn.travelport.com/vistara/UK_general_medium_80633.jpg",
                                "https://cdn.travelport.com/vistara/UK_general_large_80634.jpg"
                            ]
                        },
                        {
                            "@attributes": {
                                "Key": "Tnb4cHVqWDKA8qofWAAAAA==",
                                "BrandID": "1088379",
                                "Name": "ECO STANDARD",
                                "BrandedDetailsAvailable": "true",
                                "Carrier": "UK"
                            },
                            "airTitle": [
                                "Economy Standard",
                                "ECOYS"
                            ],
                            "airText": [
                                "Economy Standard\n•\tComplimentary beverages on board\n•\tComplimentary meal on board\n•\t15kg checked-in baggage allowance\n•\t7kg hand baggage allowance\n•\tFree seat selection, except emergency exit seats\n•\tChanges permitted at a charge\n•\tCancellation subject to a charge\n• Please note that if the flight is operated by another airline then the on-board product or service maybe different to that described above.",
                                "Regular fares in Economy Class"
                            ],
                            "airImageLocation": [
                                "https://cdn.travelport.com/vistara/UK_general_medium_80633.jpg",
                                "https://cdn.travelport.com/vistara/UK_general_large_80634.jpg"
                            ]
                        }
                    ]
                }
            }
   
  )
  

const [flightData, setFlightData] = useState([]);

useEffect(() => {
  const airPricePoints = data.airAirPricePointList.airAirPricePoint;
  const airSegments = data.airAirSegmentList.airAirSegment;
  const flightDetails=data.airFlightDetailsList.airFlightDetails;
  const airFareinforeList=data.airFlightDetailsList.airFlightDetails;
  console.log("flight data ",airFareinforeList);
//   airFareInfoList.airFareInfo[0]
  // Create an array to hold all flight options
  const allFlights = [];

  // Iterate over each price point
  airPricePoints.forEach((pricePoint) => {
    // console.log(pricePoint);
    const flightOptions = pricePoint.airAirPricingInfo.airFlightOptionsList.airFlightOption;

    // Ensure airOption is always an array
    const airOptions = Array.isArray(flightOptions.airOption) 
      ? flightOptions.airOption 
      : [flightOptions.airOption];

    airOptions.forEach((option) => {
      const bookingInfo = option.airBookingInfo;
      const segments = Array.isArray(bookingInfo) 
        ? bookingInfo.map(info => info['@attributes'].SegmentRef) 
        : [bookingInfo['@attributes'].SegmentRef];

        // this is fareInfo key here find out 
      const fareInfoRefs = Array.isArray(bookingInfo) 
        ? bookingInfo.map(info => info['@attributes'].FareInfoRef) 
        : [bookingInfo['@attributes'].FareInfoRef];
        // console.log(fareInfo);


    const flightDetail = {
        PricingInfos: pricePoint['@attributes'],
        airpriceInfo: {
          FareBreakDowns: {
            priceStatus: pricePoint['airAirPricingInfo']["@attributes"],
            cancelPanality: pricePoint['airAirPricingInfo']["@airCancelPenalty"],
            changePanality: pricePoint['airAirPricingInfo']["@airChangePenalty"],
            fareinfoRef: pricePoint['airAirPricingInfo']["@airFareInfoRef"],
            passangerType: pricePoint['airAirPricingInfo']["@airPassengerType"],
            taxInfo: pricePoint['airAirPricingInfo']["@airTaxInfo"],
          },
        },
        segments: segments.map(segKey => {
          // Find the corresponding segment
          const segment = airSegments.find(s => s['@attributes'].Key === segKey);

          if (segment) {
            // Check if airFlightDetailsRef and its attributes exist
            const flightDetailsRefKey = segment.airFlightDetailsRef?.['@attributes']?.Key;

            if (flightDetailsRefKey) {
              // Find the corresponding flight details using the flight details ref key
              const flightDetail = flightDetails.find(fd => fd['@attributes'].Key === flightDetailsRefKey);
              
              return {
                ...segment,
                flightDetails: flightDetail || null // Add flight details to each segment or null if not found
              };
            }
            return segment;
          }
          return null; // Return null if no segment is found
        }).filter(Boolean), // Filter out any null segments


        // required data here to airFareInfoList here based on key 
    //     airFareInfolist: fareInfo.map(segKey => {
    //     console.log("status of segment : ",segKey)

    //     // Find the corresponding segment
    //     const airfairein = airFareinforeList.find(s => s['@attributes'].Key === segKey);
    //     console.log("status of segment : ",airfairein)

    //     if (airfairein) {
    //     //   // Find the corresponding flight details using the flight details ref key
    //     //   const flightDetailsRefKey = segment.airFlightDetailsRef['@attributes'].Key;
    //     //   const flightDetail = flightDetails.find(fd => fd['@attributes'].Key === flightDetailsRefKey);

    //     //   return {
    //     //     ...segment,
    //     //     flightDetails: flightDetail // Add flight details to each segment
    //     //   };
    //     console.log("Raushan");
    //     }

    //     return airfairein;
    //   })
    airFareInfolist: fareInfoRefs.map(fareInfoRef => {
        // console.log(fareInfoRef,airFareinforeList[0]['@attributes'].Key)
        const airFareInfo = airFareinforeList.find(fare => fare['@attributes'].Key === fareInfoRef);
        
        return airFareInfo || null; 
      }).filter(Boolean) 
    



      };

      // Push the flight detail into allFlights array
      allFlights.push(flightDetail);
    });
  });

  // Update the state with the combined flight data
  setFlightData(allFlights);
  console.log("All Flights:", allFlights);

}, [data]); 


  console.log("without merge data : ",data);
  console.log("merge data : ",flightData)
  return <div className="px-20">
   
   {
    data.airAirPricePointList.airAirPricePoint.map((item, index) => (
      <div className="w-full bg-pink-300 flex" key={index}>
        <div className="up-arrow">

        </div>
      <div className="py-10 w-full border border-black  my-2">
        <p>flight card</p>
        <p>desc</p>
         {item["@attributes"].TotalPrice}
      </div>
        </div>
    )
)
   }
    
  </div>;
};

export default Test;
