import React, { useEffect, useState } from "react";

const Test = () => {
    const [data,setData]=useState(
        {
            "@attributes": {
                "TraceId": "6e866ea3-c38f-4c78-816b-ec75c114677d",
                "TransactionId": "2DA291760A0D6A932E66E28784C92BA6",
                "ResponseTime": "834",
                "DistanceUnits": "MI",
                "CurrencyType": "INR"
            },
            "airFlightDetailsList": {
                "airFlightDetails": [
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAPWSzCAAAAA==",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "DepartureTime": "2024-10-07T22:30:00.000+05:30",
                            "ArrivalTime": "2024-10-08T00:45:00.000+05:30",
                            "FlightTime": "135",
                            "TravelTime": "865",
                            "Equipment": "32N",
                            "OriginTerminal": "3",
                            "DestinationTerminal": "2"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKARWSzCAAAAA==",
                            "Origin": "BOM",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-08T09:00:00.000+05:30",
                            "ArrivalTime": "2024-10-08T11:05:00.000+05:30",
                            "FlightTime": "125",
                            "TravelTime": "865",
                            "GroundTime": "40",
                            "Distance": "643",
                            "Equipment": "321",
                            "OnTimePerformance": "-1",
                            "OriginTerminal": "2",
                            "DestinationTerminal": "4"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKASWSzCAAAAA==",
                            "Origin": "MAA",
                            "Destination": "IXM",
                            "DepartureTime": "2024-10-08T11:45:00.000+05:30",
                            "ArrivalTime": "2024-10-08T12:55:00.000+05:30",
                            "FlightTime": "70",
                            "TravelTime": "865",
                            "Distance": "260",
                            "Equipment": "321",
                            "OnTimePerformance": "-1",
                            "OriginTerminal": "4"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAVWSzCAAAAA==",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "DepartureTime": "2024-10-07T15:00:00.000+05:30",
                            "ArrivalTime": "2024-10-07T17:30:00.000+05:30",
                            "FlightTime": "150",
                            "TravelTime": "1315",
                            "Equipment": "320",
                            "OriginTerminal": "3",
                            "DestinationTerminal": "2"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAXWSzCAAAAA==",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T06:00:00.000+05:30",
                            "ArrivalTime": "2024-10-07T08:45:00.000+05:30",
                            "FlightTime": "165",
                            "TravelTime": "415",
                            "Equipment": "321",
                            "OriginTerminal": "3",
                            "DestinationTerminal": "4"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAZWSzCAAAAA==",
                            "Origin": "MAA",
                            "Destination": "IXM",
                            "DepartureTime": "2024-10-07T11:45:00.000+05:30",
                            "ArrivalTime": "2024-10-07T12:55:00.000+05:30",
                            "FlightTime": "70",
                            "TravelTime": "415",
                            "Equipment": "321",
                            "OriginTerminal": "4"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAdWSzCAAAAA==",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T20:45:00.000+05:30",
                            "ArrivalTime": "2024-10-07T23:35:00.000+05:30",
                            "FlightTime": "170",
                            "TravelTime": "970",
                            "Equipment": "32N",
                            "OriginTerminal": "3",
                            "DestinationTerminal": "4"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAfWSzCAAAAA==",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T16:15:00.000+05:30",
                            "ArrivalTime": "2024-10-07T19:10:00.000+05:30",
                            "FlightTime": "175",
                            "TravelTime": "1240",
                            "Equipment": "77W",
                            "OriginTerminal": "3",
                            "DestinationTerminal": "4"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAhWSzCAAAAA==",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T09:55:00.000+05:30",
                            "ArrivalTime": "2024-10-07T12:45:00.000+05:30",
                            "FlightTime": "170",
                            "TravelTime": "1620",
                            "Equipment": "32N",
                            "OriginTerminal": "3",
                            "DestinationTerminal": "4"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAjWSzCAAAAA==",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T13:30:00.000+05:30",
                            "ArrivalTime": "2024-10-07T16:20:00.000+05:30",
                            "FlightTime": "170",
                            "TravelTime": "1405",
                            "Equipment": "320",
                            "OriginTerminal": "3",
                            "DestinationTerminal": "4"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAlWSzCAAAAA==",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T20:00:00.000+05:30",
                            "ArrivalTime": "2024-10-07T22:55:00.000+05:30",
                            "FlightTime": "175",
                            "TravelTime": "1015",
                            "Equipment": "320",
                            "OriginTerminal": "3",
                            "DestinationTerminal": "4"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAnWSzCAAAAA==",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T17:35:00.000+05:30",
                            "ArrivalTime": "2024-10-07T20:20:00.000+05:30",
                            "FlightTime": "165",
                            "TravelTime": "1160",
                            "Equipment": "320",
                            "OriginTerminal": "3",
                            "DestinationTerminal": "4"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKApWSzCAAAAA==",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "DepartureTime": "2024-10-07T05:50:00.000+05:30",
                            "ArrivalTime": "2024-10-07T08:00:00.000+05:30",
                            "FlightTime": "130",
                            "TravelTime": "425",
                            "Equipment": "320",
                            "OriginTerminal": "3",
                            "DestinationTerminal": "2"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAbWSzCAAAAA==",
                            "Origin": "BOM",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T09:00:00.000+05:30",
                            "ArrivalTime": "2024-10-07T11:05:00.000+05:30",
                            "FlightTime": "125",
                            "TravelTime": "425",
                            "GroundTime": "40",
                            "Distance": "643",
                            "Equipment": "321",
                            "OnTimePerformance": "-1",
                            "OriginTerminal": "2",
                            "DestinationTerminal": "4"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKArWSzCAAAAA==",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "DepartureTime": "2024-10-07T02:30:00.000+05:30",
                            "ArrivalTime": "2024-10-07T04:45:00.000+05:30",
                            "FlightTime": "135",
                            "TravelTime": "625",
                            "Equipment": "320",
                            "OriginTerminal": "3",
                            "DestinationTerminal": "2"
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAtWSzCAAAAA==",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "DepartureTime": "2024-10-07T21:55:00.000+05:30",
                            "ArrivalTime": "2024-10-08T00:15:00.000+05:30",
                            "FlightTime": "140",
                            "TravelTime": "900",
                            "Equipment": "321",
                            "OriginTerminal": "3",
                            "DestinationTerminal": "2"
                        }
                    }
                ]
            },
            "airAirSegmentList": {
                "airAirSegment": [
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAOWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "AI",
                            "FlightNumber": "814",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "DepartureTime": "2024-10-07T22:30:00.000+05:30",
                            "ArrivalTime": "2024-10-08T00:45:00.000+05:30",
                            "FlightTime": "135",
                            "Distance": "708",
                            "ETicketability": "Yes",
                            "Equipment": "32N",
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
                                "Key": "+tDlkITqWDKAPWSzCAAAAA=="
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAQWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "AI",
                            "FlightNumber": "671",
                            "Origin": "BOM",
                            "Destination": "IXM",
                            "DepartureTime": "2024-10-08T09:00:00.000+05:30",
                            "ArrivalTime": "2024-10-08T12:55:00.000+05:30",
                            "FlightTime": "235",
                            "Distance": "729",
                            "ETicketability": "Yes",
                            "Equipment": "321",
                            "ChangeOfPlane": "false",
                            "ParticipantLevel": "Secure Sell",
                            "LinkAvailability": "true",
                            "PolledAvailabilityOption": "Cached status used. Polled avail exists",
                            "OptionalServicesIndicator": "false",
                            "NumberOfStops": "1",
                            "AvailabilitySource": "P",
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
                                    "Key": "+tDlkITqWDKARWSzCAAAAA=="
                                }
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKASWSzCAAAAA=="
                                }
                            }
                        ]
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAUWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "AI",
                            "FlightNumber": "856",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "DepartureTime": "2024-10-07T15:00:00.000+05:30",
                            "ArrivalTime": "2024-10-07T17:30:00.000+05:30",
                            "FlightTime": "150",
                            "Distance": "708",
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
                                "Key": "+tDlkITqWDKAVWSzCAAAAA=="
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAWWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "AI",
                            "FlightNumber": "439",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T06:00:00.000+05:30",
                            "ArrivalTime": "2024-10-07T08:45:00.000+05:30",
                            "FlightTime": "165",
                            "Distance": "1095",
                            "ETicketability": "Yes",
                            "Equipment": "321",
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
                                "Key": "+tDlkITqWDKAXWSzCAAAAA=="
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAYWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "AI",
                            "FlightNumber": "671",
                            "Origin": "MAA",
                            "Destination": "IXM",
                            "DepartureTime": "2024-10-07T11:45:00.000+05:30",
                            "ArrivalTime": "2024-10-07T12:55:00.000+05:30",
                            "FlightTime": "70",
                            "Distance": "261",
                            "ETicketability": "Yes",
                            "Equipment": "321",
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
                                "Key": "+tDlkITqWDKAZWSzCAAAAA=="
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAcWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "AI",
                            "FlightNumber": "540",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T20:45:00.000+05:30",
                            "ArrivalTime": "2024-10-07T23:35:00.000+05:30",
                            "FlightTime": "170",
                            "Distance": "1095",
                            "ETicketability": "Yes",
                            "Equipment": "32N",
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
                                "Key": "+tDlkITqWDKAdWSzCAAAAA=="
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKATWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "AI",
                            "FlightNumber": "671",
                            "Origin": "MAA",
                            "Destination": "IXM",
                            "DepartureTime": "2024-10-08T11:45:00.000+05:30",
                            "ArrivalTime": "2024-10-08T12:55:00.000+05:30",
                            "FlightTime": "70",
                            "Distance": "261",
                            "ETicketability": "Yes",
                            "Equipment": "321",
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
                                "Key": "+tDlkITqWDKASWSzCAAAAA=="
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAeWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "AI",
                            "FlightNumber": "537",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T16:15:00.000+05:30",
                            "ArrivalTime": "2024-10-07T19:10:00.000+05:30",
                            "FlightTime": "175",
                            "Distance": "1095",
                            "ETicketability": "Yes",
                            "Equipment": "77W",
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
                                "Key": "+tDlkITqWDKAfWSzCAAAAA=="
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAgWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "AI",
                            "FlightNumber": "429",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T09:55:00.000+05:30",
                            "ArrivalTime": "2024-10-07T12:45:00.000+05:30",
                            "FlightTime": "170",
                            "Distance": "1095",
                            "ETicketability": "Yes",
                            "Equipment": "32N",
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
                                "Key": "+tDlkITqWDKAhWSzCAAAAA=="
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAiWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "UK",
                            "FlightNumber": "839",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T13:30:00.000+05:30",
                            "ArrivalTime": "2024-10-07T16:20:00.000+05:30",
                            "FlightTime": "170",
                            "Distance": "1095",
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
                                "Key": "+tDlkITqWDKAjWSzCAAAAA=="
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAkWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "UK",
                            "FlightNumber": "835",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T20:00:00.000+05:30",
                            "ArrivalTime": "2024-10-07T22:55:00.000+05:30",
                            "FlightTime": "175",
                            "Distance": "1095",
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
                                "Key": "+tDlkITqWDKAlWSzCAAAAA=="
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAmWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "UK",
                            "FlightNumber": "837",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "DepartureTime": "2024-10-07T17:35:00.000+05:30",
                            "ArrivalTime": "2024-10-07T20:20:00.000+05:30",
                            "FlightTime": "165",
                            "Distance": "1095",
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
                                "Key": "+tDlkITqWDKAnWSzCAAAAA=="
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAoWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "UK",
                            "FlightNumber": "975",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "DepartureTime": "2024-10-07T05:50:00.000+05:30",
                            "ArrivalTime": "2024-10-07T08:00:00.000+05:30",
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
                                "Key": "+tDlkITqWDKApWSzCAAAAA=="
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAaWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "AI",
                            "FlightNumber": "671",
                            "Origin": "BOM",
                            "Destination": "IXM",
                            "DepartureTime": "2024-10-07T09:00:00.000+05:30",
                            "ArrivalTime": "2024-10-07T12:55:00.000+05:30",
                            "FlightTime": "235",
                            "Distance": "729",
                            "ETicketability": "Yes",
                            "Equipment": "321",
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
                                    "Key": "+tDlkITqWDKAbWSzCAAAAA=="
                                }
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKAZWSzCAAAAA=="
                                }
                            }
                        ]
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAqWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "UK",
                            "FlightNumber": "983",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "DepartureTime": "2024-10-07T02:30:00.000+05:30",
                            "ArrivalTime": "2024-10-07T04:45:00.000+05:30",
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
                                "Key": "+tDlkITqWDKArWSzCAAAAA=="
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAsWSzCAAAAA==",
                            "Group": "0",
                            "Carrier": "UK",
                            "FlightNumber": "999",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "DepartureTime": "2024-10-07T21:55:00.000+05:30",
                            "ArrivalTime": "2024-10-08T00:15:00.000+05:30",
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
                                "Key": "+tDlkITqWDKAtWSzCAAAAA=="
                            }
                        }
                    }
                ]
            },
            "airFareInfoList": {
                "airFareInfo": [
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAuWSzCAAAAA==",
                            "FareBasis": "UU1YXSII",
                            "PassengerTypeCode": "ADT",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR5100",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "15",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjsEOwiAQRD+mmfsuwbbcqECUqDRRm8jF//8MB6qJmywz8DY7eO+NGCvOjP6/BryHJSOXO1Ag7ON6w0FFoLxUiJqEbdP6euSMtoNsIiod76ptUIKNIwVhCnZHrVD7GdOVTPpmqqIlo1k+4GfSmbYs8RnXUxSZnXPzxXwhY/nVD9qYLBk=",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKArbSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandID": "1497073",
                                "BrandTier": "0001"
                            },
                            "airUpsellBrand": {
                                "@attributes": {
                                    "FareBasis": "UU1YWSII",
                                    "FareInfoRef": "+tDlkITqWDKA8ZSzCAAAAA=="
                                }
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKA1WSzCAAAAA==",
                            "FareBasis": "UU1YXSII",
                            "PassengerTypeCode": "ADT",
                            "Origin": "BOM",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-08",
                            "Amount": "INR5380",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-08",
                            "NotValidAfter": "2024-10-08"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "15",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjtEKwyAMRT+m3PeYuVbf7LR0YdTCtkJ92f9/xqJdYYHk3nA0SQiBiS157sN/dPh0o0DyE8ggTdkXXC+OwNoUkOEJ22bK/hJBnWGInKLc8KGmPqRoU6+COER7oBoord7WRRm1yaoGdTOq1R84zXRXm8f0TuucdI/33j34B2mAnvoF8K8sSA==",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAtbSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandID": "1497073",
                                "BrandTier": "0001"
                            },
                            "airUpsellBrand": {
                                "@attributes": {
                                    "FareBasis": "UU1YWSII",
                                    "FareInfoRef": "+tDlkITqWDKADaSzCAAAAA=="
                                }
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKA9WSzCAAAAA==",
                            "FareBasis": "UU1YXSII",
                            "PassengerTypeCode": "CNN",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR4590",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airTicketingCode": {
                            "@attributes": {
                                "Value": "UU1YXSIICH"
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
                        "airFareRuleKey": "gws-eJxNjtEKwjAMRT9m3PfbULf1rdoWLWoGysC9+P+fYdopGEjuDadNEmMUimeQMf7HgPdwrKj6ABS0PC13+EMgnDUb6KRgXd32etaKNsORkyHteFdpD5l8Hk2QpuR31AJbr7ncjLFPNhW0zWjWfuBnysWsJtW8nDM5hxDmq3yhrbVTP+YqLDk=",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAvbSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandID": "1497073",
                                "BrandTier": "0001"
                            },
                            "airUpsellBrand": {
                                "@attributes": {
                                    "FareBasis": "UU1YWSII",
                                    "FareInfoRef": "+tDlkITqWDKAKaSzCAAAAA=="
                                }
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAEXSzCAAAAA==",
                            "FareBasis": "UU1YXSII",
                            "PassengerTypeCode": "CNN",
                            "Origin": "BOM",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-08",
                            "Amount": "INR4842",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-08",
                            "NotValidAfter": "2024-10-08"
                        },
                        "airTicketingCode": {
                            "@attributes": {
                                "Value": "UU1YXSIICH"
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
                        "airFareRuleKey": "gws-eJxNjtEKwzAIRT+m3Hcj0iZv2ZKyhlILG4XmZf//GTPpBhP0XjmJGmNkYqHAY/yPAe/hVlD0CSjIspwbxAuDrakgxzOOw9XzVQraDEfkDWnHl3J7SEnyaII0JblQC9Re7/tmjPpkU0bbjGbtB35mXsxqUs37I9ueEIJf+Qtpgp36AfO7LFQ=",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAxbSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandID": "1497073",
                                "BrandTier": "0001"
                            },
                            "airUpsellBrand": {
                                "@attributes": {
                                    "FareBasis": "UU1YWSII",
                                    "FareInfoRef": "+tDlkITqWDKARaSzCAAAAA=="
                                }
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKALXSzCAAAAA==",
                            "FareBasis": "UU1YXSII",
                            "PassengerTypeCode": "INF",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR1500",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airTicketingCode": {
                            "@attributes": {
                                "Value": "UU1YXSIIIN"
                            }
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "10",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjsEOwiAQRD+mmftAsS03FLASlSaaJnLp/3+GC9Wkmywz8DY7OOc0taHVgztWh607J6T8AjIofVmeUCcSSi4FVDpiXVX5vFNC3aHIUVBueNe+DtKbMIjAj97sqBZKO0N8CGPbLNqjJqNaecDfxJvYnPI1LHMgJ2vtdNc/KLHy1S/cYiwh",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAzbSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandID": "1497073",
                                "BrandTier": "0001"
                            },
                            "airUpsellBrand": {
                                "@attributes": {
                                    "FareBasis": "UU1YWSII",
                                    "FareInfoRef": "+tDlkITqWDKAYaSzCAAAAA=="
                                }
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAPXSzCAAAAA==",
                            "FareBasis": "UU1YXSII",
                            "PassengerTypeCode": "INF",
                            "Origin": "BOM",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-08",
                            "Amount": "INR1500",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-08",
                            "NotValidAfter": "2024-10-08"
                        },
                        "airTicketingCode": {
                            "@attributes": {
                                "Value": "UU1YXSIIIN"
                            }
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "10",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjtEOwiAMRT9mue+lw228oTC1MesSzZLx4v9/hoVpYpNyL5ymlxgjE3sKPMT/6vDuzgLRJ6Aga9kXuBMR2C4F5HjGtrmyv0RQdziiyZA2fGhfByn5PJggjckfqBZKOy/rYozaZtMeNRnV2gN+Zr6bVdFrXm/ZckII04O/kEbYVz/p8Sw8",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKA1bSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandID": "1497073",
                                "BrandTier": "0001"
                            },
                            "airUpsellBrand": {
                                "@attributes": {
                                    "FareBasis": "UU1YWSII",
                                    "FareInfoRef": "+tDlkITqWDKAcaSzCAAAAA=="
                                }
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAWXSzCAAAAA==",
                            "FareBasis": "UU1YXSII",
                            "PassengerTypeCode": "ADT",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR8320",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "15",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjk0KAjEMhQ8zvH0Sy8x019IWLWoFdcBuvP8xTDoKBpr3wpefhhCExJGXOfzHhPcUK2q7Aw2k7xoj1oMQWIsOYinYNu6vR62wHUy0KGoD78rWSMnlWQVpSW5HFugj53JRRmOzKsMuw6xO4GfKSW2L+Zlvx6zd3vv1LF+oZ/WrH9dkLBg=",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKA3bSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandID": "1497073",
                                "BrandTier": "0001"
                            },
                            "airUpsellBrand": {
                                "@attributes": {
                                    "FareBasis": "UU1YWSII",
                                    "FareInfoRef": "+tDlkITqWDKAjaSzCAAAAA=="
                                }
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAdXSzCAAAAA==",
                            "FareBasis": "UU1YXSII",
                            "PassengerTypeCode": "ADT",
                            "Origin": "MAA",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR3540",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "15",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjtEKwjAMRT9m3PfbWLf1raUdWmQV1MH64v9/hmmnYCC5N5w2ifdeKJZORv8fA95DyMjlARRQM+8rTmdLiDYVNLJg20zdnzmjzTDkpKh0fKhpDxltGlUQp2gP1AK11zUEZeyTVQ3aZjSrP/Azy1VtCemV7pdEzs65+SZfqGv11A/opiww",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKA5bSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandID": "1497073",
                                "BrandTier": "0001"
                            },
                            "airUpsellBrand": {
                                "@attributes": {
                                    "FareBasis": "UU1YWSII",
                                    "FareInfoRef": "+tDlkITqWDKAqaSzCAAAAA=="
                                }
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAqXSzCAAAAA==",
                            "FareBasis": "UU1YXSII",
                            "PassengerTypeCode": "CNN",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR7488",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airTicketingCode": {
                            "@attributes": {
                                "Value": "UU1YXSIICH"
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
                        "airFareRuleKey": "gws-eJxNjkEKAyEMRQ8z/H0MMupOUWll2hRaBuqm9z9Go9PCBJL/w9MkMUYmthR4jedY8FlSQ5MnICDNe0pw1nsYbTrIcMW+m/5+tYYxwxA5RTLxoTweUrZlVUF22R5oBPqspd6U0ZysyhibMaz+wN/Uq1rJIuVxKUQ+hOA3/kFdq6d+AeSULDw=",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKA7bSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandID": "1497073",
                                "BrandTier": "0001"
                            },
                            "airUpsellBrand": {
                                "@attributes": {
                                    "FareBasis": "UU1YWSII",
                                    "FareInfoRef": "+tDlkITqWDKA3aSzCAAAAA=="
                                }
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAxXSzCAAAAA==",
                            "FareBasis": "UU1YXSII",
                            "PassengerTypeCode": "CNN",
                            "Origin": "MAA",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR3186",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airTicketingCode": {
                            "@attributes": {
                                "Value": "UU1YXSIICH"
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
                        "airFareRuleKey": "gws-eJxNjtEKwyAMRT+m3PeYidU3RcsqpRlsFOrL/v8zFu0GCyT3hqNJYoxMbCmwi/8x4T2liipPQECa9dxxM96BtWkgwwuOw7TzVSv6DEM0K5KBL+X+kLItTgV5zvZCPdBG3VNSRmOyKqNvRrf6Az+zrGoli5THvRD5EILf+At1rZ76Ae8ELEQ=",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKA9bSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandID": "1497073",
                                "BrandTier": "0001"
                            },
                            "airUpsellBrand": {
                                "@attributes": {
                                    "FareBasis": "UU1YWSII",
                                    "FareInfoRef": "+tDlkITqWDKA+aSzCAAAAA=="
                                }
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKA+XSzCAAAAA==",
                            "FareBasis": "UU1YXSII",
                            "PassengerTypeCode": "INF",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR1500",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airTicketingCode": {
                            "@attributes": {
                                "Value": "UU1YXSIIIN"
                            }
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "10",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjsEOwiAQRD+mmftAsS03CKASFRNNE7n4/5/hQtvETZYZeJsdnHOa2tDqyf3XgO/gM3J5AQWUfngPdSKh5FJBpRPWVdXPO2e0HYqcBZWONx3bIIOJkwjCHMyGWqH2M6a7MPbNoiNaMpqVBxwmXcWWXM7xeYnkYq1dbnqHEitf/QHTKCwS",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKA/bSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandID": "1497073",
                                "BrandTier": "0001"
                            },
                            "airUpsellBrand": {
                                "@attributes": {
                                    "FareBasis": "UU1YWSII",
                                    "FareInfoRef": "+tDlkITqWDKALbSzCAAAAA=="
                                }
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKACYSzCAAAAA==",
                            "FareBasis": "UU1YXSII",
                            "PassengerTypeCode": "INF",
                            "Origin": "MAA",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR1500",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airTicketingCode": {
                            "@attributes": {
                                "Value": "UU1YXSIIIN"
                            }
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "10",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjsEKwyAQRD8mzH00aRJviqbtUmKhJRAv/f/PyGpa6MI6o2/Z0XtvaQc6O/r/6vDpgkDyC8igtuwrzIWE1UsBjV2wbabsbxHUHYacFOWGT+3rIOOQRhXEKQ4nqoXSzjUEZWybVXvUZFSrD/iZ5a42S76m5y2Rs3Nuftgv1Fj96gHlVCws",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKABcSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandID": "1497073",
                                "BrandTier": "0001"
                            },
                            "airUpsellBrand": {
                                "@attributes": {
                                    "FareBasis": "UU1YWSII",
                                    "FareInfoRef": "+tDlkITqWDKAPbSzCAAAAA=="
                                }
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAPYSzCAAAAA==",
                            "FareBasis": "YOIATAYF",
                            "PassengerTypeCode": "ADT",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR40040",
                            "NegotiatedFare": "false"
                        },
                        "airFareTicketDesignator": {
                            "@attributes": {
                                "Value": "YF"
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
                        "airFareRuleKey": "gws-eJxNTkEKAjEMfMwy90npqntrsS0WNYKsh178/zNMdhUMJJkwyUxSSoEhcgmH9B8T3tPriq5PQEHLe86IZCTEpgFKqBiPntc8GlxEyKNRutF7F1/keSmzNTRp3CkPjK2WeoPLujJJgVvDoV3gB+rFoOaydjUbnqzMX8pM7dMPpeQrnw==",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKADcSzCAAAAA==",
                                "BrandID": "1088378",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0003"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAWYSzCAAAAA==",
                            "FareBasis": "YU1YX8AI",
                            "PassengerTypeCode": "ADT",
                            "Origin": "MAA",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-08",
                            "Amount": "INR19500",
                            "NegotiatedFare": "false"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "15",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjk0KAzEIhQ8zvP0z05+4i6QDDWWyKFOYbHr/Y9RMWqigPv1ETSkFhhM1XNK/TXhPVlDqE6ige9lXiJ5JBK8aKGFBe0nbow/2JUJGR/XAI0sfZNYsnrDMWQbqhnbE1czZ2EwX6KfRpTfwE8vdZbXbVmwzv6OqcX58Ia/wFz4BjSxE",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAFcSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0001"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAoYSzCAAAAA==",
                            "FareBasis": "YOIATAYF",
                            "PassengerTypeCode": "CNN",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR40040",
                            "NegotiatedFare": "false"
                        },
                        "airFareTicketDesignator": {
                            "@attributes": {
                                "Value": "YF"
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
                        "airFareRuleKey": "gws-eJxNTkEOwjAMe8zkuxt1jN1aba2oBkFCcOiF/z+DZAOJSEkcObGTUhJK5Cyn9B8D3sNrQ9MHoKDlLWdEMhLBpg4GKej3lp+5V7hIICejdKePLr7IZV5Ha6ih8qA80Pe6litc1pVJCtwaDu0CP1AuBnVRbWo2PFsZv5SZ2qcfpyorpw==",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAHcSzCAAAAA==",
                                "BrandID": "1088378",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0003"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAvYSzCAAAAA==",
                            "FareBasis": "YU1YX8AI",
                            "PassengerTypeCode": "CNN",
                            "Origin": "MAA",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-08",
                            "Amount": "INR17550",
                            "NegotiatedFare": "false"
                        },
                        "airTicketingCode": {
                            "@attributes": {
                                "Value": "YU1YX8AICH"
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
                        "airFareRuleKey": "gws-eJxNjs0KwyAQhB8mzH3cNIneFBEqJXsILcRL3/8xupoWuuDOLN/+GGMUyo1B1vgfE95Tqqh6AAraq+cOty0LIVY10ElBe7l2emvsSxzpDenAl0pvZA7ZmaDMpgP1QBt5T8nYtZmkoJ9GtzaBnyl3s5pVa3omuxNC8PPjC7nBvvABBWksUg==",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAJcSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0001"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKABZSzCAAAAA==",
                            "FareBasis": "YOIATAYF",
                            "PassengerTypeCode": "INF",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR1300",
                            "NegotiatedFare": "false"
                        },
                        "airFareTicketDesignator": {
                            "@attributes": {
                                "Value": "YF"
                            }
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "7",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjsEOAiEQQz9m03sBV90bxIVI1DExeuDi/3+GhdXESZgW3mRKjNHT77j4ffyvCe/pdUG1B2Cgzi0luEDC6dJA5zPavaZnagV9hyMPQjbwpqEP8rSsswTFFW6oF9roa76KcWyWBvRkdKsH/Ew+y1q1Uk0xPKrNX6RQffQDfKYrbw==",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKALcSzCAAAAA==",
                                "BrandID": "1088378",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0003"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAFZSzCAAAAA==",
                            "FareBasis": "YU1YX8AI",
                            "PassengerTypeCode": "INF",
                            "Origin": "MAA",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-08",
                            "Amount": "INR1500",
                            "NegotiatedFare": "false"
                        },
                        "airTicketingCode": {
                            "@attributes": {
                                "Value": "YU1YX8AIIN"
                            }
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "7",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjs0KAyEMhB9mmfuo/TE3ZbFUynooLayXvv9jdLQtNJDM6BeSpJQ8/YHmT+k/FryWXFHbHWigsu4b3JGE16ODzhf0p+t7VN+Y4cgo1Cb+aBiNXG11EpQgnWgE+qxbzmKck6UBYzOG1Qd+plxlW22Xmh9Ze8wshtsX8gyd8AbTfSwK",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKANcSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0001"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAdYSzCAAAAA==",
                            "FareBasis": "YOIATAYF",
                            "PassengerTypeCode": "ADT",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR40340",
                            "NegotiatedFare": "false"
                        },
                        "airFareTicketDesignator": {
                            "@attributes": {
                                "Value": "YF"
                            }
                        },
                        "airFareSurcharge": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAeYSzCAAAAA==",
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
                        "airFareRuleKey": "gws-eJxNTkEOwjAMe8zku1M6xm6taCsqRpHQOPTC/59BsjGJSEkcObETQnB0nrM7h/8Y8Bned9T2Ahqo+YgRnvSE6NRBcRn9WeMae4GJCDkp1TZ672KLvM5p1IYihTtlgb7VlBeY7EmVSQrMGgb1AgfIN4UtprU2teFFy/ij1FQ//QKmoSui",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAPcSzCAAAAA==",
                                "BrandID": "1088378",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0003"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKA2YSzCAAAAA==",
                            "FareBasis": "YOIATAYF",
                            "PassengerTypeCode": "CNN",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR40340",
                            "NegotiatedFare": "false"
                        },
                        "airFareTicketDesignator": {
                            "@attributes": {
                                "Value": "YF"
                            }
                        },
                        "airFareSurcharge": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKA3YSzCAAAAA==",
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
                        "airFareRuleKey": "gws-eJxNTkEOwjAMe8zkuxs6YLdWWysqIEgIDr3w/2eQbEwiUhJHTuyklIQSOckx/ceAz/C+oukTUNDynjMiGYlgUweDFPRHy6/cK1wkkCejdKW3Lr7IeVpGa6ihcqM80Ne6lBtc9mDKJAVuDYd2gR2Ui0GdVZuaDc9Wxh9lpvbpF6fnK6o=",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKARcSzCAAAAA==",
                                "BrandID": "1088378",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0003"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAMZSzCAAAAA==",
                            "FareBasis": "YOIATAYF",
                            "PassengerTypeCode": "ADT",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR33957",
                            "NegotiatedFare": "false"
                        },
                        "airFareTicketDesignator": {
                            "@attributes": {
                                "Value": "YF"
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
                        "airFareRuleKey": "gws-eJxNjtEOwiAMRT9mue+3zDl5AwUiUVli5gMv/v9nWMaW2KT0ktP21jlnaE605uz+Y8B3+DyQyxsooOZ1eWEc7TRD9FdBMRF1yX71NaEtEXJWVDbcq7RG3myYtCBJYkctULc3xKeyvpmkoFmjSZ3AIeJdZfFhzUVteDE6siM11Ut/vvAr0w==",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKATcSzCAAAAA==",
                                "BrandID": "1088378",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0003"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKATZSzCAAAAA==",
                            "FareBasis": "YU1YX8AI",
                            "PassengerTypeCode": "ADT",
                            "Origin": "BOM",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR33150",
                            "NegotiatedFare": "false"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "15",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjt0KwjAMhR9mnPuTVmd711oLK7IKMmG98f0fw3RVMJDkhC9/IQRDc6I3c/i3Ce8pFpT6BCqoXvYV1sqZMFo1UExGe0nbnTb2JUJeFNUDjyy9kckn0YRskwzUDe2I18eqbGwmKein0aVO4CfyorLG21biFknnvXf2/oV6Vl/4AAKQLEw=",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAVcSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0001"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAdZSzCAAAAA==",
                            "FareBasis": "YOIATAYF",
                            "PassengerTypeCode": "CNN",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR33957",
                            "NegotiatedFare": "false"
                        },
                        "airFareTicketDesignator": {
                            "@attributes": {
                                "Value": "YF"
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
                        "airFareRuleKey": "gws-eJxNjkEOwjAMBB9T7X3jUkpuKW0iohZXQnDIhf8/A6cBCUuONxrb6xCCUE70cg7/0eHdvVZkfQAKWl73O/reDyOc/QroJKLseXpOJaEuceRoSA/cqtRGzn4ZrCC5xIZqoBzvEjdjbTNJQbVGlTaBn4g3kzqrZjUbXsRGvshM7dIPwDYr2w==",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAXcSzCAAAAA==",
                                "BrandID": "1088378",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0003"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAkZSzCAAAAA==",
                            "FareBasis": "YU1YX8AI",
                            "PassengerTypeCode": "CNN",
                            "Origin": "BOM",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR29835",
                            "NegotiatedFare": "false"
                        },
                        "airTicketingCode": {
                            "@attributes": {
                                "Value": "YU1YX8AICH"
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
                        "airFareRuleKey": "gws-eJxNjs0KAjEMhB9mmXua1bW9tZaCZdkIorC9+P6P4bSrYKCZCV9+GmNU0ZMEXeJ/THhPqaLaAzAIX903aPDzGcqqQZwWtJdru2djX+JELkQ28KHaGyWH7CgoM3WgHmgjX+8b2bFZaNBPo1tO4GfKjdayWU3PJOJD4MD6hTzLL3wAEMIscg==",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAZcSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0001"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAuZSzCAAAAA==",
                            "FareBasis": "YOIATAYF",
                            "PassengerTypeCode": "INF",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR1300",
                            "NegotiatedFare": "false"
                        },
                        "airFareTicketDesignator": {
                            "@attributes": {
                                "Value": "YF"
                            }
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "7",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjs0OAiEMhB9mM/eh+Lc3VhciUbuJ0QMX3/8xbCEmNikz8DUdUkpC2XGWQ/qvCZ/pfUPVJ6Cg9Xl7IEQSwS4NDJLRtrq8llbgOwJ5NKQdD40+yMu87k1QQuFAXmj9XPPdGPtm0whPhlt7wM/kq1mtWqpaDE/ikwNZqH30C4W3K30=",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAbcSzCAAAAA==",
                                "BrandID": "1088378",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0003"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAyZSzCAAAAA==",
                            "FareBasis": "YU1YX8AI",
                            "PassengerTypeCode": "INF",
                            "Origin": "BOM",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR1500",
                            "NegotiatedFare": "false"
                        },
                        "airTicketingCode": {
                            "@attributes": {
                                "Value": "YU1YX8AIIN"
                            }
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "7",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjlELAiEQhH/MMe+j1qVv2mGcxBlEwfnS//8ZjVbQwu6Mfsvuxhgt7YHBzvE/JrymVFDqHaigsuwbzJGE1aOBxma0p2m7V1+fYciTUB34o643cgmLkSA76UA90EY93zYxjslSh74Z3eoDP5NX2VrqpaRHIn0IwbvrF2qtTngD1yIsGA==",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAdcSzCAAAAA==",
                                "BrandID": "1497074",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0001"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKA8ZSzCAAAAA==",
                            "FareBasis": "UU1YWSII",
                            "PassengerTypeCode": "ADT",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR5600",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "15",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjsEOwiAQRD+mmfssQVpuVCBKVJqojenF//8MF6qJmywz8DY7hBAMjaU3LvzXgPcwF5R6ByqofVxuODgSopcNFJOxrrK9HqWg7RByVFQ73lXaIKNNTgVxjHZHrbD1M+WrMvbNqoKWjGb1AT+Tz2rrnJ5pOSVy8t5PF/OFGqtf/QDeXCwi",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAfcSzCAAAAA==",
                                "BrandID": "1497073",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0002"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKADaSzCAAAAA==",
                            "FareBasis": "UU1YWSII",
                            "PassengerTypeCode": "ADT",
                            "Origin": "BOM",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-08",
                            "Amount": "INR5880",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-08",
                            "NotValidAfter": "2024-10-08"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "15",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjtEKwyAMRT+m3PckuFbf7LRsMmphW9l86f9/xqJtYYHk3nA0ifdeSAw56f1/dNi6MSHlJ5BBmuk742ItQbQpIJYJ68rl80oJdQYTWUW54V25PqRgYq+CMASzoxoorV6XWRm1yaqMuhnV6g+cZrqrzWN8x+UWdY9zzj7kgDRAT/0B9HMsUQ==",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAhcSzCAAAAA==",
                                "BrandID": "1497073",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0002"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAKaSzCAAAAA==",
                            "FareBasis": "UU1YWSII",
                            "PassengerTypeCode": "CNN",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR5040",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "15",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjtEKwjAMRT9m3PfbULf1rdoWLWoGypC9+P+fYdopGEjuDadNEmMUimeQMf7HgPdwrKj6ABS0PC13HOgJZ80GOilYV7e9nrWizXDkZEg73lXaQyafRxOkKfkdtcDWay43Y+yTTQVtM5q1H/iZcjGrSTUv50zOIYT5Kl9oa+3UD93yLCY=",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAjcSzCAAAAA==",
                                "BrandID": "1497073",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0002"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKARaSzCAAAAA==",
                            "FareBasis": "UU1YWSII",
                            "PassengerTypeCode": "CNN",
                            "Origin": "BOM",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-08",
                            "Amount": "INR5292",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-08",
                            "NotValidAfter": "2024-10-08"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "15",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjtEKgzAMRT9G7nsaOrVv3VqZZRhhQ7a+7P8/w6RuYCC5N5w2SYyRiT0F7uM5Ony7a0GRJyAgzfJZcOHAYG0qyPGEbXP1/SoFNsMRjYqk4UPZHlLyuVdBGpI/kAVqq7d1UUZtsirDNsOs/sDfTLNaSSJ5vWfdE0IYH/yDNEBP3QHzKyxT",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAlcSzCAAAAA==",
                                "BrandID": "1497073",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0002"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAYaSzCAAAAA==",
                            "FareBasis": "UU1YWSII",
                            "PassengerTypeCode": "INF",
                            "Origin": "DEL",
                            "Destination": "BOM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR1500",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "10",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjsEOwiAQRD+mmftAsS03FLASlSaaxnDp/3+GC9Wkmywz8DY7OOc0taHVgztWh607J6T8AjIofVmeUCcSSi4FVDpiXVX5vFNC3aHIUVBueNe+DtKbMIjAj97sqBZKO0N8CGPbLNqjJqNaecDfxJvYnPI1LHMgJ2vtdNc/KLHy1S/b2iwg",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAncSzCAAAAA==",
                                "BrandID": "1497073",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0002"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAcaSzCAAAAA==",
                            "FareBasis": "UU1YWSII",
                            "PassengerTypeCode": "INF",
                            "Origin": "BOM",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-08",
                            "Amount": "INR1500",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-08",
                            "NotValidAfter": "2024-10-08"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "10",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjtEOwiAMRT9mue+lw228oTC1MesSzaK8+P+fYWGa2KTcC6fpJcbIxJ4CD/G/Ory7o0D0DijIWl4L3IEIbJcCcjxj21x5PkRQdziiyZA2vGtfByn5PJggjcnvqBZKO0/rYozaZtMeNRnV2gN+Zr6aVdFzXi/ZckII042/kEbYVz/paSw7",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKApcSzCAAAAA==",
                                "BrandID": "1497073",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0002"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAjaSzCAAAAA==",
                            "FareBasis": "UU1YWSII",
                            "PassengerTypeCode": "ADT",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR8820",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "15",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjt0KwyAMhR+mnPskSKt3ikon3RxsK8Obvf9jLNoNGjDnhC8/eu+FxJCT2Z9jwmcKBaU+gArSdwsB1gqBtWgglox95/Z+loK+g4kWRXXgQ7k3UjRpVkFcojlQD7SRU74qo7FZldEvo1udwN/ki9oa0ivd16Tdzjm7yQ/qWf3qF9soLCE=",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKArcSzCAAAAA==",
                                "BrandID": "1497073",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0002"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAqaSzCAAAAA==",
                            "FareBasis": "UU1YWSII",
                            "PassengerTypeCode": "ADT",
                            "Origin": "MAA",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR4040",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "15",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjtEKwyAMRT+m3PdrkLa+KVo2KbWwrWy+7P8/Y9FusEBybziaxHsvFEsno/+PAe8hZORyAwqomV8bLC0h2lTQyILjMPV5zxlthiEnRaXjU017yGjTqII4RXuiFqi9biEoY5+satA2o1n9gZ9ZrmpLSI+0XxI5O+fmVb5Q1+qpH+SwLCc=",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAtcSzCAAAAA==",
                                "BrandID": "1497073",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0002"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKA3aSzCAAAAA==",
                            "FareBasis": "UU1YWSII",
                            "PassengerTypeCode": "CNN",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR7938",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "15",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjkEKAyEMRQ8z/H1MZdSdojKVtim0DMVN73+MRqeFBpL/w9MkMUYmthR4jf+x4L2khiYPQECat5TgwsnDaNNBhiv23fTXszWMGYbIKZKJD+XxkLItqwqyy/ZAI9BnLfWqjOZkVcbYjGH1B36mntVKFin3rRD5EIK/8BfqWj31A+QWLDs=",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAvcSzCAAAAA==",
                                "BrandID": "1497073",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0002"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKA+aSzCAAAAA==",
                            "FareBasis": "UU1YWSII",
                            "PassengerTypeCode": "CNN",
                            "Origin": "MAA",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR3636",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "15",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjtEKwyAMRT+m3PeYiq1vipZOSjPYKJsv+//PWLQbNJDcG44mCSEwsSXPLlxjwGeIBUUegIA0y3vH6EYH1qaCDC84DlNfz1LQZhiiSZF0fCq3h5RsdipIU7InaoHa6x6jMuqTVRltM5rVH/ib5aZWkki+r5lo9t7PG/+grtVTv+6GLEM=",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAxcSzCAAAAA==",
                                "BrandID": "1497073",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0002"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKALbSzCAAAAA==",
                            "FareBasis": "UU1YWSII",
                            "PassengerTypeCode": "INF",
                            "Origin": "DEL",
                            "Destination": "MAA",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR1500",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "10",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjsEOwiAQRD+mmftAsS03CKASFRNNY7j4/5/hQtvETZYZeJsdnHOa2tDqyf3XgO/gM3J5AQWUfngPdSKh5FJBpRPWVdXPO2e0HYqcBZWONx3bIIOJkwjCHMyGWqH2M6a7MPbNoiNaMpqVBxwmXcWWXM7xeYnkYq1dbnqHEitf/QHSoCwR",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKAzcSzCAAAAA==",
                                "BrandID": "1497073",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0002"
                            }
                        }
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAPbSzCAAAAA==",
                            "FareBasis": "UU1YWSII",
                            "PassengerTypeCode": "INF",
                            "Origin": "MAA",
                            "Destination": "IXM",
                            "EffectiveDate": "2024-09-26T14:51:00.000+05:30",
                            "DepartureDate": "2024-10-07",
                            "Amount": "INR1500",
                            "NegotiatedFare": "false",
                            "NotValidBefore": "2024-10-07",
                            "NotValidAfter": "2024-10-07"
                        },
                        "airBaggageAllowance": {
                            "airMaxWeight": {
                                "@attributes": {
                                    "Value": "10",
                                    "Unit": "Kilograms"
                                }
                            }
                        },
                        "airFareRuleKey": "gws-eJxNjsEOwiAQRD+mmfuwrW25QaAqMcVE0yiX/v9nuFBN3GSZgbfZwTknlIFWRvdfHfbOJ6T8ADKond4rzImE6KWARhZsmymvZ0qoOww5KcoNH9rXQYYhjioIUxgOVAulnav3ytg2q/aoyahWH/Azy1VtTvkc75dIztba+SZfqLH61Q/kzCwr",
                        "airBrand": {
                            "@attributes": {
                                "Key": "+tDlkITqWDKA1cSzCAAAAA==",
                                "BrandID": "1497073",
                                "UpSellBrandFound": "false",
                                "BrandTier": "0002"
                            }
                        }
                    }
                ]
            },
            "airRouteList": {
                "airRoute": {
                    "@attributes": {
                        "Key": "+tDlkITqWDKAcbSzCAAAAA=="
                    },
                    "airLeg": {
                        "@attributes": {
                            "Key": "+tDlkITqWDKA8WSzCAAAAA==",
                            "Group": "0",
                            "Origin": "DEL",
                            "Destination": "IXM"
                        }
                    }
                }
            },
            "airAirPricePointList": {
                "airAirPricePoint": [
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAdbSzCAAAAA==",
                            "TotalPrice": "INR25907",
                            "BasePrice": "INR22912",
                            "ApproximateTotalPrice": "INR25907",
                            "ApproximateBasePrice": "INR22912",
                            "Taxes": "INR2995",
                            "ApproximateTaxes": "INR2995",
                            "CompleteItinerary": "true"
                        },
                        "airAirPricingInfo": [
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKAvWSzCAAAAA==",
                                    "TotalPrice": "INR11750",
                                    "BasePrice": "INR10480",
                                    "ApproximateTotalPrice": "INR11750",
                                    "ApproximateBasePrice": "INR10480",
                                    "Taxes": "INR1270",
                                    "LatestTicketingTime": "2024-09-26T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKAuWSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKA1WSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "+tDlkITqWDKAwWSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR541",
                                            "Key": "+tDlkITqWDKAxWSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "+tDlkITqWDKAyWSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "+tDlkITqWDKAzWSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "+tDlkITqWDKA0WSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI BOM 5100UU1YXSII AI IXM 5380UU1YXSII INR10480END",
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKA2WSzCAAAAA==",
                                                    "TravelTime": "P0DT14H25M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAuWSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAOWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA1WSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKA5WSzCAAAAA==",
                                                    "TravelTime": "P0DT21H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAuWSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAUWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA1WSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKA+WSzCAAAAA==",
                                    "TotalPrice": "INR10650",
                                    "BasePrice": "INR9432",
                                    "ApproximateTotalPrice": "INR10650",
                                    "ApproximateBasePrice": "INR9432",
                                    "Taxes": "INR1218",
                                    "LatestTicketingTime": "2024-09-26T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKA9WSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAEXSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "+tDlkITqWDKA/WSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR489",
                                            "Key": "+tDlkITqWDKAAXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "+tDlkITqWDKABXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "+tDlkITqWDKACXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "+tDlkITqWDKADXSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI BOM 4590UU1YXSIICH AI IXM 4842UU1YXSIICH INR9432END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "CNN",
                                        "Age": "10"
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKAFXSzCAAAAA==",
                                                    "TravelTime": "P0DT14H25M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA9WSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAOWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAEXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAIXSzCAAAAA==",
                                                    "TravelTime": "P0DT21H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA9WSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAUWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAEXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKAMXSzCAAAAA==",
                                    "TotalPrice": "INR3507",
                                    "BasePrice": "INR3000",
                                    "ApproximateTotalPrice": "INR3507",
                                    "ApproximateBasePrice": "INR3000",
                                    "Taxes": "INR507",
                                    "LatestTicketingTime": "2024-09-26T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKALXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAPXSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR167",
                                            "Key": "+tDlkITqWDKANXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "+tDlkITqWDKAOXSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI BOM 1500UU1YXSIIIN AI IXM 1500UU1YXSIIIN INR3000END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "INF",
                                        "Age": "1"
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKAQXSzCAAAAA==",
                                                    "TravelTime": "P0DT14H25M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKALXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAOWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAPXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKATXSzCAAAAA==",
                                                    "TravelTime": "P0DT21H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKALXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAUWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAPXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                        ]
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAebSzCAAAAA==",
                            "TotalPrice": "INR28660",
                            "BasePrice": "INR25534",
                            "ApproximateTotalPrice": "INR28660",
                            "ApproximateBasePrice": "INR25534",
                            "Taxes": "INR3126",
                            "ApproximateTaxes": "INR3126",
                            "CompleteItinerary": "true"
                        },
                        "airAirPricingInfo": [
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKAXXSzCAAAAA==",
                                    "TotalPrice": "INR13199",
                                    "BasePrice": "INR11860",
                                    "ApproximateTotalPrice": "INR13199",
                                    "ApproximateBasePrice": "INR11860",
                                    "Taxes": "INR1339",
                                    "LatestTicketingTime": "2024-09-26T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKAWXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAdXSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "+tDlkITqWDKAYXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR610",
                                            "Key": "+tDlkITqWDKAZXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "+tDlkITqWDKAaXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "+tDlkITqWDKAbXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "+tDlkITqWDKAcXSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI MAA 8320UU1YXSII AI IXM 3540UU1YXSII INR11860END",
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKAeXSzCAAAAA==",
                                                    "TravelTime": "P0DT6H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAWXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAWWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAdXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAYWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAhXSzCAAAAA==",
                                                    "TravelTime": "P0DT16H10M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAWXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAcWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAdXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAkXSzCAAAAA==",
                                                    "TravelTime": "P0DT20H40M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAWXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAeWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAdXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAnXSzCAAAAA==",
                                                    "TravelTime": "P1DT3H0M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAWXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAgWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAdXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKArXSzCAAAAA==",
                                    "TotalPrice": "INR11954",
                                    "BasePrice": "INR10674",
                                    "ApproximateTotalPrice": "INR11954",
                                    "ApproximateBasePrice": "INR10674",
                                    "Taxes": "INR1280",
                                    "LatestTicketingTime": "2024-09-26T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKAqXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAxXSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "+tDlkITqWDKAsXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR551",
                                            "Key": "+tDlkITqWDKAtXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "+tDlkITqWDKAuXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "+tDlkITqWDKAvXSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "+tDlkITqWDKAwXSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI MAA 7488UU1YXSIICH AI IXM 3186UU1YXSIICH INR10674END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "CNN",
                                        "Age": "10"
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKAyXSzCAAAAA==",
                                                    "TravelTime": "P0DT6H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAqXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAWWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAxXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAYWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKA1XSzCAAAAA==",
                                                    "TravelTime": "P0DT16H10M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAqXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAcWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAxXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKA4XSzCAAAAA==",
                                                    "TravelTime": "P0DT20H40M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAqXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAeWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAxXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKA7XSzCAAAAA==",
                                                    "TravelTime": "P1DT3H0M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAqXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAgWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAxXSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKA/XSzCAAAAA==",
                                    "TotalPrice": "INR3507",
                                    "BasePrice": "INR3000",
                                    "ApproximateTotalPrice": "INR3507",
                                    "ApproximateBasePrice": "INR3000",
                                    "Taxes": "INR507",
                                    "LatestTicketingTime": "2024-09-26T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKA+XSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKACYSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR167",
                                            "Key": "+tDlkITqWDKAAYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "+tDlkITqWDKABYSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI MAA 1500UU1YXSIIIN AI IXM 1500UU1YXSIIIN INR3000END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "INF",
                                        "Age": "1"
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKADYSzCAAAAA==",
                                                    "TravelTime": "P0DT6H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA+XSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAWWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKACYSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAYWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAGYSzCAAAAA==",
                                                    "TravelTime": "P0DT16H10M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA+XSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAcWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKACYSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAJYSzCAAAAA==",
                                                    "TravelTime": "P0DT20H40M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA+XSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAeWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKACYSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAMYSzCAAAAA==",
                                                    "TravelTime": "P1DT3H0M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA+XSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAgWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKACYSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                        ]
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAfbSzCAAAAA==",
                            "TotalPrice": "INR127650",
                            "BasePrice": "INR119930",
                            "ApproximateTotalPrice": "INR127650",
                            "ApproximateBasePrice": "INR119930",
                            "Taxes": "INR7720",
                            "ApproximateTaxes": "INR7720",
                            "CompleteItinerary": "true"
                        },
                        "airAirPricingInfo": [
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKAQYSzCAAAAA==",
                                    "TotalPrice": "INR63221",
                                    "BasePrice": "INR59540",
                                    "ApproximateTotalPrice": "INR63221",
                                    "ApproximateBasePrice": "INR59540",
                                    "Taxes": "INR3681",
                                    "LatestTicketingTime": "2024-10-07T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKAPYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAWYSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "+tDlkITqWDKARYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR2992",
                                            "Key": "+tDlkITqWDKASYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "+tDlkITqWDKATYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "+tDlkITqWDKAUYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR300",
                                            "Key": "+tDlkITqWDKAVYSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK MAA 40040YOIATAYF/YF AI IXM 19500YU1YX8AI INR59540END",
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "+tDlkITqWDKAlYSzCAAAAA==",
                                                "TravelTime": "P0DT23H25M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "Y",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "+tDlkITqWDKAPYSzCAAAAA==",
                                                        "SegmentRef": "+tDlkITqWDKAiWSzCAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "Y",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "+tDlkITqWDKAWYSzCAAAAA==",
                                                        "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKApYSzCAAAAA==",
                                    "TotalPrice": "INR61174",
                                    "BasePrice": "INR57590",
                                    "ApproximateTotalPrice": "INR61174",
                                    "ApproximateBasePrice": "INR57590",
                                    "Taxes": "INR3584",
                                    "LatestTicketingTime": "2024-10-07T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKAoYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAvYSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "+tDlkITqWDKAqYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR2895",
                                            "Key": "+tDlkITqWDKArYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "+tDlkITqWDKAsYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "+tDlkITqWDKAtYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR300",
                                            "Key": "+tDlkITqWDKAuYSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK MAA 40040YOIATAYF/YF AI IXM 17550YU1YX8AICH INR57590END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "CNN",
                                        "Age": "10"
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "+tDlkITqWDKA+YSzCAAAAA==",
                                                "TravelTime": "P0DT23H25M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "Y",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "+tDlkITqWDKAoYSzCAAAAA==",
                                                        "SegmentRef": "+tDlkITqWDKAiWSzCAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "Y",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "+tDlkITqWDKAvYSzCAAAAA==",
                                                        "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKAgbSzCAAAAA==",
                                    "TotalPrice": "INR3255",
                                    "BasePrice": "INR2800",
                                    "ApproximateTotalPrice": "INR3255",
                                    "ApproximateBasePrice": "INR2800",
                                    "Taxes": "INR455",
                                    "LatestTicketingTime": "2024-10-07T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKABZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAFZSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR155",
                                            "Key": "+tDlkITqWDKAhbSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR300",
                                            "Key": "+tDlkITqWDKAibSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK MAA 1300YOIATAYF/YF AI IXM 1500YU1YX8AIIN INR2800END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "INF",
                                        "Age": "1"
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": {
                                            "@attributes": {
                                                "Key": "+tDlkITqWDKAjbSzCAAAAA==",
                                                "TravelTime": "P0DT23H25M0S"
                                            },
                                            "airBookingInfo": [
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "Y",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "+tDlkITqWDKABZSzCAAAAA==",
                                                        "SegmentRef": "+tDlkITqWDKAiWSzCAAAAA=="
                                                    }
                                                },
                                                {
                                                    "@attributes": {
                                                        "BookingCode": "Y",
                                                        "BookingCount": "9",
                                                        "CabinClass": "Economy",
                                                        "FareInfoRef": "+tDlkITqWDKAFZSzCAAAAA==",
                                                        "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                        ]
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAmbSzCAAAAA==",
                            "TotalPrice": "INR128280",
                            "BasePrice": "INR120530",
                            "ApproximateTotalPrice": "INR128280",
                            "ApproximateBasePrice": "INR120530",
                            "Taxes": "INR7750",
                            "ApproximateTaxes": "INR7750",
                            "CompleteItinerary": "true"
                        },
                        "airAirPricingInfo": [
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKAXYSzCAAAAA==",
                                    "TotalPrice": "INR63536",
                                    "BasePrice": "INR59840",
                                    "ApproximateTotalPrice": "INR63536",
                                    "ApproximateBasePrice": "INR59840",
                                    "Taxes": "INR3696",
                                    "LatestTicketingTime": "2024-10-07T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKAdYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAWYSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "+tDlkITqWDKAYYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR3007",
                                            "Key": "+tDlkITqWDKAZYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "+tDlkITqWDKAaYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "+tDlkITqWDKAbYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR300",
                                            "Key": "+tDlkITqWDKAcYSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK MAA Q300 40040YOIATAYF/YF AI IXM 19500YU1YX8AI INR59840END",
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKAfYSzCAAAAA==",
                                                    "TravelTime": "P0DT16H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAdYSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAkWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAWYSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAiYSzCAAAAA==",
                                                    "TravelTime": "P0DT19H20M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAdYSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAmWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAWYSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKAwYSzCAAAAA==",
                                    "TotalPrice": "INR61489",
                                    "BasePrice": "INR57890",
                                    "ApproximateTotalPrice": "INR61489",
                                    "ApproximateBasePrice": "INR57890",
                                    "Taxes": "INR3599",
                                    "LatestTicketingTime": "2024-10-07T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKA2YSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAvYSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "+tDlkITqWDKAxYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR2910",
                                            "Key": "+tDlkITqWDKAyYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "+tDlkITqWDKAzYSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "+tDlkITqWDKA0YSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR300",
                                            "Key": "+tDlkITqWDKA1YSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK MAA Q300 40040YOIATAYF/YF AI IXM 17550YU1YX8AICH INR57890END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "CNN",
                                        "Age": "10"
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKA4YSzCAAAAA==",
                                                    "TravelTime": "P0DT16H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA2YSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAkWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAvYSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKA7YSzCAAAAA==",
                                                    "TravelTime": "P0DT19H20M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA2YSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAmWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAvYSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKACZSzCAAAAA==",
                                    "TotalPrice": "INR3255",
                                    "BasePrice": "INR2800",
                                    "ApproximateTotalPrice": "INR3255",
                                    "ApproximateBasePrice": "INR2800",
                                    "Taxes": "INR455",
                                    "LatestTicketingTime": "2024-10-07T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKABZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAFZSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR155",
                                            "Key": "+tDlkITqWDKADZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR300",
                                            "Key": "+tDlkITqWDKAEZSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK MAA 1300YOIATAYF/YF AI IXM 1500YU1YX8AIIN INR2800END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "INF",
                                        "Age": "1"
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKAGZSzCAAAAA==",
                                                    "TravelTime": "P0DT16H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKABZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAkWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAFZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAJZSzCAAAAA==",
                                                    "TravelTime": "P0DT19H20M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKABZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAmWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAFZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                        ]
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAnbSzCAAAAA==",
                            "TotalPrice": "INR142107",
                            "BasePrice": "INR133699",
                            "ApproximateTotalPrice": "INR142107",
                            "ApproximateBasePrice": "INR133699",
                            "Taxes": "INR8408",
                            "ApproximateTaxes": "INR8408",
                            "CompleteItinerary": "true"
                        },
                        "airAirPricingInfo": [
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKANZSzCAAAAA==",
                                    "TotalPrice": "INR71166",
                                    "BasePrice": "INR67107",
                                    "ApproximateTotalPrice": "INR71166",
                                    "ApproximateBasePrice": "INR67107",
                                    "Taxes": "INR4059",
                                    "LatestTicketingTime": "2024-10-07T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKAMZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKATZSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "+tDlkITqWDKAOZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR3370",
                                            "Key": "+tDlkITqWDKAPZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "+tDlkITqWDKAQZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "+tDlkITqWDKARZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR300",
                                            "Key": "+tDlkITqWDKASZSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK BOM 33957YOIATAYF/YF AI IXM 33150YU1YX8AI INR67107END",
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKAUZSzCAAAAA==",
                                                    "TravelTime": "P0DT7H5M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAMZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAoWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKATZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAaWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAXZSzCAAAAA==",
                                                    "TravelTime": "P0DT10H25M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAMZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAqWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKATZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAaWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAaZSzCAAAAA==",
                                                    "TravelTime": "P0DT15H0M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAMZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAsWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKATZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKAeZSzCAAAAA==",
                                    "TotalPrice": "INR67686",
                                    "BasePrice": "INR63792",
                                    "ApproximateTotalPrice": "INR67686",
                                    "ApproximateBasePrice": "INR63792",
                                    "Taxes": "INR3894",
                                    "LatestTicketingTime": "2024-10-07T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKAdZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAkZSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "+tDlkITqWDKAfZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR3205",
                                            "Key": "+tDlkITqWDKAgZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "+tDlkITqWDKAhZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "+tDlkITqWDKAiZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR300",
                                            "Key": "+tDlkITqWDKAjZSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK BOM 33957YOIATAYF/YF AI IXM 29835YU1YX8AICH INR63792END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "CNN",
                                        "Age": "10"
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKAlZSzCAAAAA==",
                                                    "TravelTime": "P0DT7H5M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAdZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAoWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAkZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAaWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAoZSzCAAAAA==",
                                                    "TravelTime": "P0DT10H25M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAdZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAqWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAkZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAaWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKArZSzCAAAAA==",
                                                    "TravelTime": "P0DT15H0M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAdZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAsWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAkZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKAvZSzCAAAAA==",
                                    "TotalPrice": "INR3255",
                                    "BasePrice": "INR2800",
                                    "ApproximateTotalPrice": "INR3255",
                                    "ApproximateBasePrice": "INR2800",
                                    "Taxes": "INR455",
                                    "LatestTicketingTime": "2024-10-07T23:59:00.000+05:30",
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
                                            "Key": "+tDlkITqWDKAuZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAyZSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR155",
                                            "Key": "+tDlkITqWDKAwZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR300",
                                            "Key": "+tDlkITqWDKAxZSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL UK BOM 1300YOIATAYF/YF AI IXM 1500YU1YX8AIIN INR2800END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "INF",
                                        "Age": "1"
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKAzZSzCAAAAA==",
                                                    "TravelTime": "P0DT7H5M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAuZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAoWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAyZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAaWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKA2ZSzCAAAAA==",
                                                    "TravelTime": "P0DT10H25M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAuZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAqWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAyZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAaWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKA5ZSzCAAAAA==",
                                                    "TravelTime": "P0DT15H0M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAuZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAsWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "Y",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAyZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                        ]
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKAobSzCAAAAA==",
                            "TotalPrice": "INR27902",
                            "BasePrice": "INR24812",
                            "ApproximateTotalPrice": "INR27902",
                            "ApproximateBasePrice": "INR24812",
                            "Taxes": "INR3090",
                            "ApproximateTaxes": "INR3090",
                            "CompleteItinerary": "true"
                        },
                        "airAirPricingInfo": [
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKA9ZSzCAAAAA==",
                                    "TotalPrice": "INR12800",
                                    "BasePrice": "INR11480",
                                    "ApproximateTotalPrice": "INR12800",
                                    "ApproximateBasePrice": "INR11480",
                                    "Taxes": "INR1320",
                                    "LatestTicketingTime": "2024-09-26T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKA8ZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKADaSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "+tDlkITqWDKA+ZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR591",
                                            "Key": "+tDlkITqWDKA/ZSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "+tDlkITqWDKAAaSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "+tDlkITqWDKABaSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "+tDlkITqWDKACaSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI BOM 5600UU1YWSII AI IXM 5880UU1YWSII INR11480END",
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKAEaSzCAAAAA==",
                                                    "TravelTime": "P0DT14H25M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA8ZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAOWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKADaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAHaSzCAAAAA==",
                                                    "TravelTime": "P0DT21H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA8ZSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAUWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKADaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKALaSzCAAAAA==",
                                    "TotalPrice": "INR11595",
                                    "BasePrice": "INR10332",
                                    "ApproximateTotalPrice": "INR11595",
                                    "ApproximateBasePrice": "INR10332",
                                    "Taxes": "INR1263",
                                    "LatestTicketingTime": "2024-09-26T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAKaSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKARaSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "+tDlkITqWDKAMaSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR534",
                                            "Key": "+tDlkITqWDKANaSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "+tDlkITqWDKAOaSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "+tDlkITqWDKAPaSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "+tDlkITqWDKAQaSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI BOM 5040UU1YWSIICH AI IXM 5292UU1YWSIICH INR10332END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "CNN",
                                        "Age": "10"
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKASaSzCAAAAA==",
                                                    "TravelTime": "P0DT14H25M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAKaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAOWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKARaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAVaSzCAAAAA==",
                                                    "TravelTime": "P0DT21H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAKaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAUWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKARaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKAZaSzCAAAAA==",
                                    "TotalPrice": "INR3507",
                                    "BasePrice": "INR3000",
                                    "ApproximateTotalPrice": "INR3507",
                                    "ApproximateBasePrice": "INR3000",
                                    "Taxes": "INR507",
                                    "LatestTicketingTime": "2024-09-26T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAYaSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAcaSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR167",
                                            "Key": "+tDlkITqWDKAaaSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "+tDlkITqWDKAbaSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI BOM 1500UU1YWSIIIN AI IXM 1500UU1YWSIIIN INR3000END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "INF",
                                        "Age": "1"
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKAdaSzCAAAAA==",
                                                    "TravelTime": "P0DT14H25M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAYaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAOWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAcaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAgaSzCAAAAA==",
                                                    "TravelTime": "P0DT21H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAYaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAUWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAcaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAQWSzCAAAAA=="
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
                        ]
                    },
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKApbSzCAAAAA==",
                            "TotalPrice": "INR30655",
                            "BasePrice": "INR27434",
                            "ApproximateTotalPrice": "INR30655",
                            "ApproximateBasePrice": "INR27434",
                            "Taxes": "INR3221",
                            "ApproximateTaxes": "INR3221",
                            "CompleteItinerary": "true"
                        },
                        "airAirPricingInfo": [
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKAkaSzCAAAAA==",
                                    "TotalPrice": "INR14249",
                                    "BasePrice": "INR12860",
                                    "ApproximateTotalPrice": "INR14249",
                                    "ApproximateBasePrice": "INR12860",
                                    "Taxes": "INR1389",
                                    "LatestTicketingTime": "2024-09-26T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAjaSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAqaSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "+tDlkITqWDKAlaSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR660",
                                            "Key": "+tDlkITqWDKAmaSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "+tDlkITqWDKAnaSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "+tDlkITqWDKAoaSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "+tDlkITqWDKApaSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI MAA 8820UU1YWSII AI IXM 4040UU1YWSII INR12860END",
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKAraSzCAAAAA==",
                                                    "TravelTime": "P0DT6H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAjaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAWWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAqaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAYWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAuaSzCAAAAA==",
                                                    "TravelTime": "P0DT16H10M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAjaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAcWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAqaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAxaSzCAAAAA==",
                                                    "TravelTime": "P0DT20H40M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAjaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAeWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAqaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKA0aSzCAAAAA==",
                                                    "TravelTime": "P1DT3H0M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAjaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAgWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAqaSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKA4aSzCAAAAA==",
                                    "TotalPrice": "INR12899",
                                    "BasePrice": "INR11574",
                                    "ApproximateTotalPrice": "INR12899",
                                    "ApproximateBasePrice": "INR11574",
                                    "Taxes": "INR1325",
                                    "LatestTicketingTime": "2024-09-26T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKA3aSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKA+aSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "IN",
                                            "Amount": "INR62",
                                            "Key": "+tDlkITqWDKA5aSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR596",
                                            "Key": "+tDlkITqWDKA6aSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "P2",
                                            "Amount": "INR236",
                                            "Key": "+tDlkITqWDKA7aSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "WO",
                                            "Amount": "INR91",
                                            "Key": "+tDlkITqWDKA8aSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "+tDlkITqWDKA9aSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI MAA 7938UU1YWSIICH AI IXM 3636UU1YWSIICH INR11574END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "CNN",
                                        "Age": "10"
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKA/aSzCAAAAA==",
                                                    "TravelTime": "P0DT6H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA3aSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAWWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA+aSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAYWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKACbSzCAAAAA==",
                                                    "TravelTime": "P0DT16H10M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA3aSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAcWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA+aSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAFbSzCAAAAA==",
                                                    "TravelTime": "P0DT20H40M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA3aSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAeWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA+aSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAIbSzCAAAAA==",
                                                    "TravelTime": "P1DT3H0M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA3aSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAgWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKA+aSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                            },
                            {
                                "@attributes": {
                                    "Key": "+tDlkITqWDKAMbSzCAAAAA==",
                                    "TotalPrice": "INR3507",
                                    "BasePrice": "INR3000",
                                    "ApproximateTotalPrice": "INR3507",
                                    "ApproximateBasePrice": "INR3000",
                                    "Taxes": "INR507",
                                    "LatestTicketingTime": "2024-09-26T23:59:00.000+05:30",
                                    "PricingMethod": "Guaranteed",
                                    "Refundable": "true",
                                    "PlatingCarrier": "AI",
                                    "ProviderCode": "1G"
                                },
                                "airFareInfoRef": [
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKALbSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Key": "+tDlkITqWDKAPbSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airTaxInfo": [
                                    {
                                        "@attributes": {
                                            "Category": "K3",
                                            "Amount": "INR167",
                                            "Key": "+tDlkITqWDKANbSzCAAAAA=="
                                        }
                                    },
                                    {
                                        "@attributes": {
                                            "Category": "YR",
                                            "Amount": "INR340",
                                            "Key": "+tDlkITqWDKAObSzCAAAAA=="
                                        }
                                    }
                                ],
                                "airFareCalc": "DEL AI MAA 1500UU1YWSIIIN AI IXM 1500UU1YWSIIIN INR3000END",
                                "airPassengerType": {
                                    "@attributes": {
                                        "Code": "INF",
                                        "Age": "1"
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
                                            "LegRef": "+tDlkITqWDKA8WSzCAAAAA==",
                                            "Destination": "IXM",
                                            "Origin": "DEL"
                                        },
                                        "airOption": [
                                            {
                                                "@attributes": {
                                                    "Key": "+tDlkITqWDKAQbSzCAAAAA==",
                                                    "TravelTime": "P0DT6H55M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKALbSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAWWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAPbSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAYWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKATbSzCAAAAA==",
                                                    "TravelTime": "P0DT16H10M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKALbSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAcWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAPbSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAWbSzCAAAAA==",
                                                    "TravelTime": "P0DT20H40M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKALbSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAeWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAPbSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                                                    "Key": "+tDlkITqWDKAZbSzCAAAAA==",
                                                    "TravelTime": "P1DT3H0M0S"
                                                },
                                                "airBookingInfo": [
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKALbSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKAgWSzCAAAAA=="
                                                        }
                                                    },
                                                    {
                                                        "@attributes": {
                                                            "BookingCode": "U",
                                                            "BookingCount": "9",
                                                            "CabinClass": "Economy",
                                                            "FareInfoRef": "+tDlkITqWDKAPbSzCAAAAA==",
                                                            "SegmentRef": "+tDlkITqWDKATWSzCAAAAA=="
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
                        ]
                    }
                ]
            },
            "airBrandList": {
                "airBrand": [
                    {
                        "@attributes": {
                            "Key": "+tDlkITqWDKA3cSzCAAAAA==",
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
                            "Key": "+tDlkITqWDKA5cSzCAAAAA==",
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
                            "Key": "+tDlkITqWDKA7cSzCAAAAA==",
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
                    }
                ]
            }
        }
      
     )
    
    const [flightData, setFlightData] = useState([]);

    useEffect(() => {
        const airPricePoints = data.airAirPricePointList.airAirPricePoint;
        const airSegments = data.airAirSegmentList.airAirSegment;
        const flightDetails = data.airFlightDetailsList.airFlightDetails;
        const airFareinforeList = data.airFareInfoList.airFareInfo;
        
        const allFlights = [];
    
        // Iterate over each price point
        airPricePoints.forEach((pricePoint) => {
            // Handle both array and object for airAirPricingInfo (can be single or multiple)
            const airPricingInfos = Array.isArray(pricePoint.airAirPricingInfo)
                ? pricePoint.airAirPricingInfo
                : [pricePoint.airAirPricingInfo];
    
            airPricingInfos.forEach((pricingInfo) => {
                console.log("check here array: ", pricingInfo)
                const flightOptions = pricingInfo.airFlightOptionsList.airFlightOption;
    
                // Ensure airOption is always an array
                const airOptions = Array.isArray(flightOptions.airOption)
                    ? flightOptions.airOption
                    : [flightOptions.airOption];
    
                airOptions.forEach((option) => {
                    const bookingInfo = option.airBookingInfo;
                    const segments = Array.isArray(bookingInfo)
                        ? bookingInfo.map(info => info['@attributes'].SegmentRef)
                        : [bookingInfo['@attributes'].SegmentRef];
    
                    // Extract fareInfo references
                    const fareInfoRefs = Array.isArray(bookingInfo)
                        ? bookingInfo.map(info => info['@attributes'].FareInfoRef)
                        : [bookingInfo['@attributes'].FareInfoRef];
    
                    // Construct the flight detail object
                    const flightDetail = {
                        // PricingInfos: pricingInfo['@attributes'],
                        PricingInfos: pricePoint,
                        // airpriceInfo: {
                        //     FareBreakDowns: {
                        //         priceStatus: pricingInfo, // Full pricing info object for each passenger type
                        //     },
                        // },
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
    
                        airFareInfolist: fareInfoRefs.map(fareRefKey => {
                            const fareInfo = airFareinforeList.find(f => f['@attributes'].Key === fareRefKey);
                            if (fareInfo) {
                                return fareInfo;
                            }
                            return null; // Return null if no fareInfo is found
                        }).filter(Boolean), // Filter out any null fareInfos
                    };
    
                    allFlights.push(flightDetail);
                });
            });
        });
    
        // Update the state with the combined flight data
        setFlightData(allFlights);
    
    }, [data]);
    

    console.log("without merge data : ", data);
    console.log("merge data : ", flightData)
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
