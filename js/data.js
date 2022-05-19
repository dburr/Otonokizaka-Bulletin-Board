var releaseDate = "April 15 2013, 0:00";
var possibleNextAnnouncementDate = "May 19 2022, 15:00";
var nextAnniversary = "Apr 15 2023, 0:00";
var versionUpdate = [];
//var versionUpdate = ["9.7 (iOS) / 9.7.1 (Android)", "May 20 2022, 16:00"];
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

    // 9th Anniversary 3rd Live Setlist - μ's & Aqours
    {
        "type": "Event",
        "title": [
			"9th Anniversary 4th Live Setlist - μ's & Aqours"
        ],
        "image": [
            "imgs/event/IMG_8304.PNG"
        ],
        "column": 0,
        "priority": 1500,
        "timers": [
			{
				name: "Main Event",
				start: "May 15 2022, 16:00",
				end: "May 20 2022, 14:59"
			}
        ]
    },

    // Rhythmic Carnival
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
                start: "May 20 2022, 16:00",
                end: "May 23 2022, 14:59",
                markers: [
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "May 21 2022, 12:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "May 21 2022, 17:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "May 21 2022, 21:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "May 22 2022, 12:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "May 22 2022, 17:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "May 22 2022, 21:00",
                        type: "star"
                    }
               ]
            }
        ]
    },
    
    // Live Arena
    {
        "type": "Event",
        "title": [
			"Round 19 Live Arena Season 4 - Shiny and Sparkly"
        ],
        "image": [
            "imgs/event/IMG_8298.PNG"
        ],
        "column": 0,
        "priority": 1500,
        "timers": [
			{
				name: "Main Event",
				start: "Apr 30 2022, 16:00",
				end: "May 25 2022, 23:59"
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
				start: "May 15 2022, 00:00",
				end: "May 19 2022, 23:59",
				markers: [
                    {
                        title: "Part 1",
                        time: "May 15 2022, 00:00",
                        type: "star"
                    }
                ]
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
                start: "May 10, 00:00",
				end: "Jun 9 2022, 23:59",
                extraPriority: 100
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
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "Apr 29 2022, 00:00",
				end: "May 25 2022, 23:59",
                extraPriority: 100
            },
            {
                name: "SR+ Boost Box",
                start: "Apr 29 2022, 00:00",
				end: "May 25 2022, 23:59",
                extraPriority: 100
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
				end: "May 25 2022, 23:59",
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "Apr 29 2022, 00:00",
				end: "May 25 2022, 23:59",
                extraPriority: 100
            },
            {
                name: "SR+ Boost Box",
                start: "Apr 29 2022, 00:00",
				end: "May 25 2022, 23:59",
                extraPriority: 100
            }
        ]
    },

    // *** Packs ***


];
