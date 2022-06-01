var releaseDate = "April 15 2013, 0:00";
var possibleNextAnnouncementDate = "Jun 4 2022, 15:00";
var nextAnniversary = "Apr 15 2023, 0:00";
//var versionUpdate = [];
var versionUpdate = ["9.7.5", "May 31 2022, 16:00"];
var alertMessages = [];
var alertTypes = [];
var timerData = [
    // Items are sorted in descending priority level order (e.g. priority 2000 goes above priority 1000)
    // Items that have the same priority level appear in the order that they appear in the list
    //
    // Suggested priority levels:
    // main events - 2000
    // sub events (RC, LA, setlist) - 1500
    // lotteries, contests, blades, etc. - 1000
    // login bonuses, support campaigns, etc. - 500

    // *** Events ***

    // Round 34 CHALLENGE FESTIVAL
    {
        "type": "Event",
        "title": [
            "Round 34 CHALLENGE FESTIVAL"
        ],
        "image": [
            "imgs/event/cf34.png"
        ],
        "column": 0,
        "priority": 2000,
        "timers": [
            {
                name: "Main Event",
                start: "May 20 2022, 16:00",
                end: "May 31 2022, 14:59"
            }
        ]
    },

    // Weekly Rhythmic Carnival
    {
        "type": "Event",
        "title": [
            "Rhythmic Carnival"
        ],
        "image": [
            "imgs/static/rcfixed.png"
        ],
        "column": 0,
        "priority": 1400,
        "timers": [
            {
                name: "Main Event",
                start: "May 27 2022, 16:00",
                end: "May 30 2022, 14:59",
                markers: [
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "May 28 2022, 12:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "May 28 2022, 17:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "May 28 2022, 21:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "May 29 2022, 12:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "May 29 2022, 17:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "May 29 2022, 21:00",
                        type: "star"
                    }
                ]
            }
        ]
    },

    // Monthly Live Arena
    // For the generic image, use imgs/static/live_arena.png
    {
        "type": "Event",
        "title": [
            "Live Arena Season 4 Round 20 - Access the Future"
        ],
        "image": [
            "imgs/event/IMG_8640.PNG"
        ],
        "column": 0,
        "priority": 1500,
        "timers": [
            {
                name: "Main Event",
                start: "May 31 2022, 16:00",
                end: "Jun 25 2022, 23:59"
            }
        ]
    },

    // Setlist
    // For the generic image, use imgs/static/live_arena.png
    {
        "type": "Event",
        "title": [
            "9th Anniversary 5th Live: μ's & Aqours Set List"
        ],
        "image": [
            "imgs/static/live_arena.png"
        ],
        "column": 0,
        "priority": 1500,
        "timers": [
            {
                name: "Main Event",
                start: "May 31 2022, 16:00",
                end: "Jun 5 2022, 14:59"
            }
        ]
    },

    // 9th Anniversary Post Event Login Bonus
    {
        "type": "Event",
        "title": [
            "9th Anniversary Post Event Login Bonus"
        ],
        "image": [
            "imgs/lbonus/IMG_8300.PNG"
        ],
        "column": 0,
        "priority": 500,
        "timers": [
            {
                name: "Duration",
                start: "Jun 1 2022, 00:00",
                end: "Jun 9 2022, 23:59"
            }
        ]
    },

    // Kagayake! Aqours Numazu Festival in Yomiuriland Event Opening Login Bonus
    {
        "type": "Event",
        "title": [
            "Kagayake! Aqours Numazu Festival in Yomiuriland Event Opening Login Bonus"
        ],
        "image": [
            "imgs/lbonus/IMG_8299.PNG"
        ],
        "column": 0,
        "priority": 500,
        "timers": [
            {
                name: "Duration",
                start: "May 15 2022, 16:00",
                end: "June 5 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Big Lottery
    {
        "type": "Event",
        "title": [
            "9th Anniversary Big Lottery"
        ],
        "image": [
            "imgs/event/lottery.png"
        ],
        "column": 0,
        "priority": 1000,
        "timers": [
            {
                name: "Main Event",
                start: "Apr 5 2022, 00:00",
                end: "Jun 10 2022, 23:59",
                markers: [
                    {
                        title: "Period 1",
                        time: "Apr 5 2022, 00:00",
                        type: "mission"
                    },
                    {
                        title: "Period 2",
                        time: "Apr 30 2022, 16:00",
                        type: "mission"
                    },
                    {
                        title: "Period 3",
                        time: "May 15 2022, 16:00",
                        type: "mission"
                    },
                    {
                        title: "Period 4",
                        time: "May 31 2022, 16:00",
                        type: "mission"
                    }
                ]
            }
        ]
    },

    // Nozomi Birthday Goals
    {
        "type": "Event",
        "title": [
            "Nozomi Birthday Goals"
        ],
        "image": [
            "imgs/static/live_arena.png"
        ],
        "column": 0,
        "priority": 500,
        "timers": [
            {
                name: "Super/Ultra Succ Rates x5",
                start: "Jun 3 2022, 00:00",
                end: "Jun 9 2022, 23:59",
            }
        ],
    },

    // Live Show Support Campaign
    {
        "type": "Event",
        "title": [
            "Live Show Support Campaign"
        ],
        "image": [
            "imgs/static/live_arena.png"
        ],
        "column": 0,
        "priority": 500,
        "timers": [
            {
                name: "Super/Ultra Succ Rates x5",
                start: "May 15 2022, 16:00",
                end: "May 31 2022, 15:59",
            }
        ],
    },

    // *** Gacha ***

    // Nozomi Birthday Box - Brilliant Jewelry (Paid Only)
    {
        "type": "Gacha",
        "title": [
            "Nozomi Birthday Box - Brilliant Jewelry (Paid Only)"
        ],
        "image": [
            "imgs/gacha/secretbox_2206_03_2M8b86awUD.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "Jun 3 2022, 00:00",
                end: "Jun 9 2022, 23:59"
            }
        ]
    },

    // Nozomi Happy Birthday Box Scouting
    {
        "type": "Gacha",
        "title": [
            "Nozomi Happy Birthday Box Scouting"
        ],
        "image": [
            "imgs/gacha/secretbox_2206_03_DiQEeGwj5W.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "Jun 3 2022, 00:00",
                end: "Jun 9 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Post Event μ's 2nd Years Limited Box Scouting
    {
        "type": "Gacha",
        "title": [
            "9th Anniversary Post Event μ's 2nd Years Limited Box Scouting"
        ],
        "image": [
            "imgs/gacha/secretbox_2205_31_ALWG0fhLvi.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Limited Box",
                start: "May 31 2022, 16:00",
                end: "Jun 7 2022, 23:59"
            },
            {
                name: "Paid-Only Limited Box",
                start: "May 31 2022, 16:00",
                end: "Jun 7 2022, 23:59"
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "May 31 2022, 16:00",
                end: "Jun 7 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Post Event Aqours 2nd Years Limited Box Scouting
    {
        "type": "Gacha",
        "title": [
            "9th Anniversary Post Event Aqours 2nd Years Limited Box Scouting"
        ],
        "image": [
            "imgs/gacha/secretbox_2205_31_5WrdvAiSP9.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Limited Box",
                start: "May 31 2022, 16:00",
                end: "Jun 7 2022, 23:59"
            },
            {
                name: "Paid-Only Limited Box",
                start: "May 31 2022, 16:00",
                end: "Jun 7 2022, 23:59"
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "May 31 2022, 16:00",
                end: "Jun 7 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Post Event Aqours 1st Years Limited Box Scouting
    {
        "type": "Gacha",
        "title": [
            "9th Anniversary Post Event Aqours 1st Years Limited Box Scouting"
        ],
        "image": [
            "imgs/gacha/IMG_8448.PNG"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Limited Box",
                start: "May 5 2022, 16:00",
                end: "May 27 2022, 23:59"
            },
            {
                name: "Paid-Only Limited Box",
                start: "May 5 2022, 16:00",
                end: "May 27 2022, 23:59"
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "May 5 2022, 16:00",
                end: "May 27 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Post Event Aqours 3rd Years Limited Box Scouting
    {
        "type": "Gacha",
        "title": [
            "9th Anniversary Post Event Aqours 3rd Years Limited Box Scouting"
        ],
        "image": [
            "imgs/gacha/IMG_8544.PNG"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Limited Box",
                start: "May 25 2022, 16:00",
                end: "Jun 1 2022, 23:59"
            },
            {
                name: "Paid-Only Limited Box",
                start: "May 25 2022, 16:00",
                end: "Jun 1 2022, 23:59"
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "May 25 2022, 16:00",
                end: "Jun 1 2022, 23:59"
            }
        ]
    },

    // Golden Week Box Scouting - μ's
    {
        "type": "Gacha",
        "title": [
            "Golden Week Box Scouting - μ's"
        ],
        "image": [
            "imgs/gacha/IMG_8439.PNG"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Limited Box",
                start: "May 5 2022, 16:00",
                end: "May 25 2022, 23:59"
            },
            {
                name: "Paid-Only Limited Box",
                start: "May 5 2022, 16:00",
                end: "May 25 2022, 23:59"
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "May 5 2022, 16:00",
                end: "May 25 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Medal Special 1st Years Limited Scouting
    {
        "type": "Gacha",
        "title": [
            "9th Anniversary Medal Special 1st Years Limited Scouting"
        ],
        "image": [
            "imgs/gacha/IMG_8437.PNG"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "May 15 2022, 16:00",
                end: "Jun 9 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Medal Special 1st Years Limited Scouting - μ's
    {
        "type": "Gacha",
        "title": [
            "9th Anniversary Medal Special 1st Years Limited Scouting - μ's"
        ],
        "image": [
            "imgs/gacha/IMG_8437.PNG"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "May 15 2022, 16:00",
                end: "Jun 9 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Medal Special 1st Years Limited Scouting - Aqours
    {
        "type": "Gacha",
        "title": [
            "9th Anniversary Medal Special 1st Years Limited Scouting - Aqours"
        ],
        "image": [
            "imgs/gacha/IMG_8454.PNG"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "May 15 2022, 16:00",
                end: "Jun 9 2022, 23:59"
            }
        ]
    },

    // Dreamy Live Show μ's Festival Scouting
    {
        "type": "Gacha",
        "title": [
            "Dreamy Live Show μ's Festival Scouting"
        ],
        "image": [
            "imgs/gacha/IMG_8438.PNG"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "May 15 2022, 16:00",
                end: "May 31 2022, 14:59"
            }
        ]
    },

    // Dreamy Live Show Aqours Festival Scouting
    {
        "type": "Gacha",
        "title": [
            "Dreamy Live Show Aqours Festival Scouting"
        ],
        "image": [
            "imgs/gacha/IMG_8455.PNG"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "May 15 2022, 16:00",
                end: "May 31 2022, 14:59"
            }
        ]
    },

    // Dreamy Live Show Nijigasaki Festival Scouting
    {
        "type": "Gacha",
        "title": [
            "Dreamy Live Show Nijigasaki Festival Scouting"
        ],
        "image": [
            "imgs/gacha/IMG_8465.PNG"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "May 15 2022, 16:00",
                end: "May 31 2022, 14:59"
            }
        ]
    },

    // Dreamy Live Show Nijigasaki Festival Scouting
    {
        "type": "Gacha",
        "title": [
            "Dreamy Live Show Nijigasaki Festival Scouting"
        ],
        "image": [
            "imgs/gacha/IMG_8465.PNG"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "May 15 2022, 16:00",
                end: "May 31 2022, 14:59"
            }
        ]
    },

    // Dreamy Live Show Liella! Festival Scouting
    {
        "type": "Gacha",
        "title": [
            "Dreamy Live Show Liella! Festival Scouting"
        ],
        "image": [
            "imgs/gacha/IMG_8472.PNG"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "May 15 2022, 16:00",
                end: "May 31 2022, 14:59"
            }
        ]
    },

    // Liella! Honor Student Scouting - Childrens' Day
    {
        "type": "Gacha",
        "title": [
            "Liella! Honor Student Scouting - Childrens' Day"
        ],
        "image": [
            "imgs/gacha/liella_childrens_day.png"
        ],
        "column": 1,
        "priority": 10000,
        "timers": [
            {
                name: "Duration",
                start: "May 10 2022, 00:00",
                end: "Jun 9 2022, 23:59"
            }
        ]
    },

    // Golden Week Box Scouting: Aqours
    {
        "type": "Gacha",
        "title": [
            "Golden Week Box Scouting: Aqours"
        ],
        "image": [
            "imgs/gacha/IMG_8456.PNG"
        ],
        "column": 1,
        "priority": 5000,
        "timers": [
            {
                name: "Limited Box",
                start: "Apr 29 2022, 00:00",
                end: "May 25 2022, 23:59"
            },
            {
                name: "Paid-Only Limited Box",
                start: "Apr 29 2022, 00:00",
                end: "May 25 2022, 23:59"
            },
            {
                name: "SR+ Boost Box",
                start: "Apr 29 2022, 00:00",
                end: "May 25 2022, 23:59"
            }
        ]
    },

    // Golden Week Box Scouting: Nijigasaki
    {
        "type": "Gacha",
        "title": [
            "Golden Week Box Scouting: Nijigasaki"
        ],
        "image": [
            "imgs/gacha/secretbox_2204_29_OpX9G6N0xr.png"
        ],
        "column": 1,
        "priority": 5000,
        "timers": [
            {
                name: "Limited Box",
                start: "Apr 29 2022, 00:00",
                end: "May 25 2022, 23:59",
            },
            {
                name: "Paid-Only Limited Box",
                start: "Apr 29 2022, 00:00",
                end: "May 25 2022, 23:59"
            },
            {
                name: "SR+ Boost Box",
                start: "Apr 29 2022, 00:00",
                end: "May 25 2022, 23:59"
            }
        ]
    },

    // Golden Week Box Scouting: Liella!
    {
        "type": "Gacha",
        "title": [
            "Golden Week Box Scouting: Liella!"
        ],
        "image": [
            "imgs/gacha/secretbox_2204_29_Jqp2jsrwcU.png"
        ],
        "column": 1,
        "priority": 5000,
        "timers": [
            {
                name: "Limited Box",
                start: "Apr 29 2022, 00:00",
                end: "May 25 2022, 23:59"
            },
            {
                name: "Paid-Only Limited Box",
                start: "Apr 29 2022, 00:00",
                end: "May 25 2022, 23:59"
            },
            {
                name: "SR+ Boost Box",
                start: "Apr 29 2022, 00:00",
                end: "May 25 2022, 23:59"
            }
        ]
    },

    // Extra Support Scouting
    {
        "type": "Gacha",
        "title": [
            "Extra Support Scouting - μ's & Aqours"
        ],
        "image": [
            "imgs/gacha/IMG_8447.PNG"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "May 15 2022, 16:00",
                end: "Jun 9 2022, 23:59"
            }
        ]
    },

    // *** Packs ***

    // Nozomi Happy Birthday Pack
    {
        type: "Other",
        title: [
            "Nozomi Happy Birthday Pack"
        ],
        image: [
            "imgs/packs/news_2206_03_TQUNKDOUf2.png"
        ],
        column: 2,
        priority: 1,
        timers: [
            {
                name: "Sales period",
                start: "Jun 3 2022, 00:00",
                end: "Jun 9 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Post Event Love Gem Pack Part 3
    {
        type: "Other",
        title: [
            "9th Anniversary Post Event Love Gem Pack Part 3"
        ],
        image: [
            "imgs/packs/news_2205_31_StPsUVI9te.png"
        ],
        column: 2,
        priority: 1,
        timers: [
            {
                name: "Sales period",
                start: "May 31 2022, 16:00",
                end: "Jun 5 2022, 14:59"
            }
        ]
    },

    // 9th Anniversary Post Event Premium Pack μ's
    {
        type: "Other",
        title: [
            "9th Anniversary Post Event Premium Pack μ's"
        ],
        image: [
            "imgs/packs/news_2205_31_rJ2xPqlSk4.png"
        ],
        column: 2,
        priority: 1,
        timers: [
            {
                name: "Sales period",
                start: "May 31 2022, 16:00",
                end: "Jun 15 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Post Event Special Pack μ's
    {
        type: "Other",
        title: [
            "9th Anniversary Post Event Special Pack μ's"
        ],
        image: [
            "imgs/packs/news_2205_31_D1XUcuegW7.png"
        ],
        column: 2,
        priority: 1,
        timers: [
            {
                name: "Sales period",
                start: "May 31 2022, 16:00",
                end: "Jun 15 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Post Event Mini Pack μ's
    {
        type: "Other",
        title: [
            "9th Anniversary Post Event Mini Pack μ's"
        ],
        image: [
            "imgs/packs/news_2205_31_D1XUcuegW7.png"
        ],
        column: 2,
        priority: 1,
        timers: [
            {
                name: "Sales period",
                start: "May 31 2022, 16:00",
                end: "Jun 15 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Post Event Lite Love Gem Pack μ's
    {
        type: "Other",
        title: [
            "9th Anniversary Post Event Lite Love Gem Pack μ's"
        ],
        image: [
            "imgs/packs/news_2205_31_1d5dzLFOCj.png"
        ],
        column: 2,
        priority: 1,
        timers: [
            {
                name: "Sales period",
                start: "May 31 2022, 16:00",
                end: "Jun 15 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Post Event Love Gem Pack Part 2
    {
        type: "Other",
        title: [
            "9th Anniversary Post Event Love Gem Pack Part 2"
        ],
        image: [
            "imgs/packs/IMG_8541.PNG"
        ],
        column: 2,
        priority: 1,
        timers: [
            {
                name: "Sales period",
                start: "May 25 2022, 16:00",
                end: "May 31 2022, 14:59"
            }
        ]
    },

    // 9th Anniversary Post Event Premium Pack - Aqours
    {
        type: "Other",
        title: [
            "9th Anniversary Post Event Premium Pack - Aqours"
        ],
        image: [
            "imgs/packs/IMG_8430.PNG"
        ],
        column: 2,
        priority: 1,
        timers: [
            {
                name: "Sales period",
                start: "May 15 2022, 16:00",
                end: "May 31 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Post Event Special Pack - Aqours
    {
        type: "Other",
        title: [
            "9th Anniversary Post Event Special Pack - Aqours"
        ],
        image: [
            "imgs/packs/IMG_8431.PNG"
        ],
        column: 2,
        priority: 1,
        timers: [
            {
                name: "Sales period",
                start: "May 15 2022, 16:00",
                end: "May 31 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Post Event Mini Pack - Aqours
    {
        type: "Other",
        title: [
            "9th Anniversary Post Event Mini Pack - Aqours"
        ],
        image: [
            "imgs/packs/IMG_8432.PNG"
        ],
        column: 2,
        priority: 1,
        timers: [
            {
                name: "Sales period",
                start: "May 15 2022, 16:00",
                end: "May 31 2022, 23:59"
            }
        ]
    },

    // 9th Anniversary Post Event Lite Love Gem Pack - Aqours
    {
        type: "Other",
        title: [
            "9th Anniversary Post Event Lite Love Gem Pack - Aqours"
        ],
        image: [
            "imgs/packs/IMG_8433.PNG"
        ],
        column: 2,
        priority: 1,
        timers: [
            {
                name: "Sales period",
                start: "May 15 2022, 16:00",
                end: "May 31 2022, 23:59"
            }
        ]
    },

    // Monthly Liella Pack
    {
        type: "Other",
        title: [
            "SIF Honor Student Pack - Liella!"
        ],
        image: [
            "imgs/static/packs/monthly_liella.png"
        ],
        column: 2,
        priority: 1,
        timers: [
            {
                name: "Sales period",
                start: "May 10 2022, 00:00",
                end: "Jun 9 2022, 23:59"
            }
        ]
    }
];
