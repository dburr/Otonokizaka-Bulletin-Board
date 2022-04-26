var releaseDate = "April 15 2013, 0:00";
var possibleNextAnnouncementDate = "May 4 2022, 15:00";
var nextAnniversary = "April 15 2023, 0:00";
var alertMessages = [];
var alertTypes = [];
var timerData = [
    {
        "type": "Event",
        "title": [
			"Round 31 MEDLEY FESTIVAL"
        ],
        "image": [
            "imgs/event/mf31.png"
        ],
        "column": 0,
        "priority": 2000,
        "timers": [
			{
				name: "Main Event",
				start: "Apr 20 2022, 16:00",
				end: "Apr 30 2022, 15:00"
			}
        ]
    },
    {
        "type": "Event",
        "title": [
			"Rhythmic Carnival"
        ],
        "image": [
            "imgs/static/rcfixed.png"
        ],
        "column": 0,
        "priority": 500,
        "timers": [
			{
				name: "Main Event",
				start: "Apr 29 2022, 16:00",
				end: "May 2 2022, 14:59",
				extraPriority: 100,
				markers: [
				{
					title: "5x EXP (for 2 hours)",
					time: "Apr 30 2022, 12:00",
					type: "star"
				},
				{
					title: "5x EXP (for 2 hours)",
					time: "Apr 30 2022, 17:00",
					type: "star"
				},
				{
					title: "5x EXP (for 2 hours)",
					time: "Apr 30 2022, 21:00",
					type: "star"
				},
				{
					title: "5x EXP (for 2 hours)",
					time: "May 01 2022, 12:00",
					type: "star"
				},
				{
					title: "5x EXP (for 2 hours)",
					time: "May 01 2022, 17:00",
					type: "star"
				},
				{
					title: "5x EXP (for 2 hours)",
					time: "May 01 2022, 21:00",
					type: "star"
				}
				]
			}
        ]
    },

    {
        "type": "Event",
        "title": [
			"Live Arena"
        ],
        "image": [
            "imgs/static/live_arena.png"
        ],
        "column": 0,
        "priority": 100,
        "timers": [
			{
				name: "Main Event",
				start: "Apr 30 2022, 16:00",
				end: "May 25 2022, 14:59"
			}
        ]
    },

    {
        "type": "Event",
        "title": [
			"9th Anniversary Live Support"
        ],
        "image": [
            "imgs/static/live_arena.png"
        ],
        "column": 0,
        "priority": 1200,
        "timers": [
			{
				name: "10x EXP",
				start: "Apr 15 2022, 16:00",
				end: "Apr 28 2022, 23:59"
			},
			{
				name: "Goals",
				start: "Apr 15 2022, 16:00",
				end: "May 15 2022, 14:59"
			}
        ]
    },


    {
        "type": "Event",
        "title": [
			"9th Anniversary Big Lottery"
        ],
        "image": [
            "imgs/event/lottery.png"
        ],
        "column": 0,
        "priority": 1500,
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
	{
        "type": "Event",
        "title": [
			"9th Anniversary Music Festival"
        ],
        "image": [
            "imgs/event/music_festival.png"
        ],
        "column": 0,
        "priority": 1000,
        "timers": [
            {
                name: "Duration",
                start: "Apr 5 2022, 16:00",
				end: "Apr 30 2022, 23:59",
                extraPriority: 100
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
			"9th Anniversary μ's 3rd Years"
        ],
        "image": [
            "imgs/gacha/IMG_7939.png"
        ],
        "column": 1,
        "priority": 5000,
        "timers": [
            {
                name: "Limited Box",
                start: "Apr 25 2022, 16:00",
				end: "Apr 30 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "Apr 25 2022, 16:00",
				end: "Apr 30 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "Apr 25 2022, 16:00",
				end: "Apr 30 2022, 14:59",
                extraPriority: 100
            }
        ]
    },

    {
        "type": "Gacha",
        "title": [
			"SIF Pass Premium Only Pick-up Boost Scouting - μ's"
        ],
        "image": [
            "imgs/gacha/IMG_7947.png"
        ],
        "column": 1,
        "priority": 10,
        "timers": [
            {
                name: "Duration",
                start: "Apr 25 2022, 16:00",
				end: "Apr 30 2022, 23:59",
                extraPriority: 100
            }
        ]
    },

    {
        "type": "Gacha",
        "title": [
			"9th Anniversary Pre-Celebration SR+ Box Scouting - μ's"
        ],
        "image": [
            "imgs/gacha/IMG_7949.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Limited Box",
                start: "Apr 25 2022, 16:00",
				end: "May 2 2022, 23:59",
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "Apr 25 2022, 16:00",
				end: "May 2 2022, 23:59",
                extraPriority: 100
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "Apr 25 2022, 16:00",
				end: "May 2 2022, 23:59",
                extraPriority: 100
            }
        ]
    },

    {
        "type": "Gacha",
        "title": [
			"9th Anniversary Aqours 3rd Years"
        ],
        "image": [
            "imgs/gacha/IMG_7953.png"
        ],
        "column": 1,
        "priority": 4000,
        "timers": [
            {
                name: "Limited Box",
                start: "Apr 25 2022, 16:00",
				end: "Apr 30 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "Apr 25 2022, 16:00",
				end: "Apr 30 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "Apr 25 2022, 16:00",
				end: "Apr 30 2022, 14:59",
                extraPriority: 100
            }
        ]
    },

    {
        "type": "Gacha",
        "title": [
			"9th Anniversary Celebration Scouting - Aqours"
        ],
        "image": [
            "imgs/gacha/IMG_7956.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "Apr 25 2022, 16:00",
				end: "Apr 28 2022, 23:59",
                extraPriority: 1
            }
        ]
    },


    {
        "type": "Gacha",
        "title": [
			"9th Anniversary Medal Special 2nd Years Limited Scouting - μ's"
        ],
        "image": [
            "imgs/gacha/IMG_7943.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "Apr 25 2022, 16:00",
				end: "May 14 2022, 23:59",
                extraPriority: 1
            }
        ]
    },

    {
        "type": "Gacha",
        "title": [
			"9th Anniversary Celebration Box Scouting - Nijigasaki"
        ],
        "image": [
            "imgs/gacha/IMG_7962.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Limited Box",
                start: "Apr 25 2022, 16:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "Apr 25 2022, 16:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "Apr 25 2022, 16:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            }
        ]
    },

    {
        "type": "Gacha",
        "title": [
			"9th Anniversary Celebration Box Scouting - Liella"
        ],
        "image": [
            "imgs/gacha/IMG_7965.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Limited Box",
                start: "Apr 25 2022, 16:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "Apr 25 2022, 16:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "Apr 25 2022, 16:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            }
        ]
    },

    {
        "type": "Gacha",
        "title": [
			"9th Anniversary Pre-Celebration Extra Support Scouting"
        ],
        "image": [
            "imgs/gacha/IMG_7945.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "Apr 25 2022, 16:00",
				end: "May 14 2022, 23:59",
                extraPriority: 100
            }
        ]
    },

    {
        "type": "Gacha",
        "title": [
			"9th Anniversary Medal Special 2nd Years Limited Scouting - Aqours"
        ],
        "image": [
            "imgs/gacha/IMG_7957.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "Apr 25 2022, 16:00",
				end: "May 14 2022, 23:59",
                extraPriority: 1
            }
        ]
    },





];
