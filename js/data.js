var releaseDate = "April 15 2013, 0:00";
var possibleNextAnnouncementDate = "May 4 2022, 15:00";
var nextAnniversary = "April 15 2023, 0:00";
var alertMessages = [];
var alertTypes = [];
var timerData = [
    // *** Events ***

    // Round 31 MEDLEY FESTIVAL
    // 4/20 16:00 - 4/30 15:00
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

    // 9th Anniversary 3rd Live Setlist - μ's & Aqours
    {
        "type": "Event",
        "title": [
			"9th Anniversary 3rd Live Setlist - μ's & Aqours"
        ],
        "image": [
            "imgs/static/live_arena.png"
        ],
        "column": 0,
        "priority": 1500,
        "timers": [
			{
				name: "Main Event",
				start: "Apr 30 2022, 16:00",
				end: "May 5 2022, 14:59"
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

    // Live Arena
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

    // 9th Anniversary Live Support
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

    // 9th Anniversary Celebration Golden Week Login Bonus
    {
        "type": "Event",
        "title": [
			"9th Anniversary Celebration Golden Week Login Bonus"
        ],
        "image": [
            "imgs/static/live_arena.png"
        ],
        "column": 0,
        "priority": 1200,
        "timers": [
			{
				name: "Duration",
				start: "Apr 29 2022, 00:00",
				end: "May 8 2022, 23:59",
				markers: [
                    {
                        title: "Part 1",
                        time: "Apr 29 2022, 00:00",
                        type: "star"
                    },
                    {
                        title: "Part 2",
                        time: "May 4 2022, 00:00",
                        type: "star"
                    }
                ]
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

    // 9th Anniversary Music Festival
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
				end: "May 15 2022, 15:59",
                extraPriority: 100,
                markers: [
                    {
                        title: "Part 1",
                        time: "Apr 5 2022, 16:00",
                        type: "mission"
                    },
                    {
                        title: "Part 2",
                        time: "Apr 30 2022, 16:00",
                        type: "mission"
                    },
                ]
            }
        ],
    },

    // Twitter Post Campaign
	{
        "type": "Event",
        "title": [
			"Twitter Post Campaign"
        ],
        "image": [
            "imgs/event/music_festival.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                name: "Duration",
                start: "Apr 15 2022, 16:00",
				end: "May 14 2022, 23:59",
                extraPriority: 100,
                markers: [
                    {
                        title: "Part 1",
                        time: "Apr 15 2022, 16:00",
                        type: "mission"
                    },
                    {
                        title: "Part 2",
                        time: "Apr 29 2022, 00:00",
                        type: "mission"
                    },
                    {
                        title: "Part 3",
                        time: "May 6 2022, 00:00",
                        type: "mission"
                    },
                ]
            }
        ],
    },

    // *** Gacha ***

    // DONE
    // 9th Anniversary Celebration GW Scouting: μ's
    {
        "type": "Gacha",
        "title": [
			"9th Anniversary Celebration GW Scouting: μ's"
        ],
        "image": [
            "imgs/gacha/secretbox_2204_29_OpX9G6N0xr.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Limited Box",
                start: "Apr 29 2022, 00:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "Apr 29 2022, 00:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "SR+ Boost Box",
                start: "Apr 29 2022, 00:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            }
        ]
    },

    // DONE
    // 9th Anniversary Celebration GW Scouting: Aqours
    {
        "type": "Gacha",
        "title": [
            "9th Anniversary Celebration GW Scouting: Aqours"
        ],
        "image": [
            "imgs/gacha/secretbox_2204_29_LjALa64w0l.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Limited Box",
                start: "Apr 29 2022, 00:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "Apr 29 2022, 00:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "SR+ Boost Box",
                start: "Apr 29 2022, 00:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            }
        ]
    },

    // GW! 2nd Years Limited Box Scouting: μ's
    {
        "type": "Gacha",
        "title": [
			"GW! 2nd Years Limited Box Scouting: μ's"
        ],
        "image": [
            "imgs/gacha/secretbox_2204_29_20pUSca3bE.png"
        ],
        "column": 1,
        "priority": 5000,
        "timers": [
            {
                name: "Limited Box",
                start: "Apr 29 2022, 00:00",
				end: "May 9 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "Apr 29 2022, 00:00",
				end: "May 9 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "Apr 29 2022, 00:00",
				end: "May 9 2022, 14:59",
                extraPriority: 100
            }
        ]
    },

    // GW! 2nd Years Limited Box Scouting: Aqours
    {
        "type": "Gacha",
        "title": [
			"GW! 2nd Years Limited Box Scouting: Aqours"
        ],
        "image": [
            "imgs/gacha/secretbox_2204_29_EvWHd6CUVJ.png"
        ],
        "column": 1,
        "priority": 5000,
        "timers": [
            {
                name: "Limited Box",
                start: "Apr 29 2022, 00:00",
				end: "May 9 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "Apr 29 2022, 00:00",
				end: "May 9 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "Apr 29 2022, 00:00",
				end: "May 9 2022, 14:59",
                extraPriority: 100
            }
        ]
    },

    // GW! 1st Years Limited Box Scouting: μ's
    {
        "type": "Gacha",
        "title": [
			"GW! 1st Years Limited Box Scouting: μ's"
        ],
        "image": [
            "imgs/gacha/secretbox_2205_02_o1A7cN6rnp.png"
        ],
        "column": 1,
        "priority": 5000,
        "timers": [
            {
                name: "Limited Box",
                start: "May 2 2022, 00:00",
				end: "May 12 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "May 2 2022, 00:00",
				end: "May 12 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "May 2 2022, 00:00",
				end: "May 12 2022, 14:59",
                extraPriority: 100
            }
        ]
    },

    // GW! 1st Years Limited Box Scouting: Aqours
    {
        "type": "Gacha",
        "title": [
			"GW! 1st Years Limited Box Scouting: Aqours"
        ],
        "image": [
            "imgs/gacha/secretbox_2205_05_Rm582fccx2.png"
        ],
        "column": 1,
        "priority": 5000,
        "timers": [
            {
                name: "Limited Box",
                start: "May 2 2022, 00:00",
				end: "May 12 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "May 2 2022, 00:00",
				end: "May 12 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "May 2 2022, 00:00",
				end: "May 12 2022, 14:59",
                extraPriority: 100
            }
        ]
    },

    // GW! 3rd Years Limited Box Scouting: μ's
    {
        "type": "Gacha",
        "title": [
			"GW! 3rd Years Limited Box Scouting: μ's"
        ],
        "image": [
            "imgs/gacha/secretbox_2205_05_iwuQF6wqLN.png"
        ],
        "column": 1,
        "priority": 5000,
        "timers": [
            {
                name: "Limited Box",
                start: "May 5 2022, 00:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "May 5 2022, 00:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "May 5 2022, 00:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            }
        ]
    },

    // GW! 3rd Years Limited Box Scouting: Aqours
    {
        "type": "Gacha",
        "title": [
			"GW! 3rd Years Limited Box Scouting: Aqours"
        ],
        "image": [
            "imgs/gacha/secretbox_2205_05_UQRP5Tj562.png"
        ],
        "column": 1,
        "priority": 5000,
        "timers": [
            {
                name: "Limited Box",
                start: "May 5 2022, 00:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "Paid-Only Limited Box",
                start: "May 5 2022, 00:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            },
            {
                name: "SR+ Pick-up Boost Box",
                start: "May 5 2022, 00:00",
				end: "May 15 2022, 14:59",
                extraPriority: 100
            }
        ]
    },


    // DONE
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

    // DONE
    // Golden Week Box Scouting: Liella!
    // From 0:00 on 4/29 until 23:59 on 5/25 JST.
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

    // ***********

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
			"9th Anniversary Celebration Scouting - μ's"
        ],
        "image": [
            "imgs/gacha/IMG_7990.png"
        ],
        "column": 1,
        "priority": 105,
        "timers": [
            {
                name: "Duration",
                start: "Apr 25 2022, 16:00",
				end: "Apr 28 2022, 23:59",
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

    // news_2204_29_4D6VDD3qUz
    // 9th Anniversary! GW Special Pack
    // From 0:00 on 4/29 until 23:59 on 5/8 JST.
    // 9th Anniversary! GW Pack
    // From 0:00 on 4/29 until 23:59 on 5/8 JST.
    // 9th Anniversary! GW Mini Pack
    // From 0:00 on 4/29 until 23:59 on 5/8 JST.

    // news_2204_30_oilV4klCgD
    // 9th Anniversary! Deluxe Love Gem Pack Part 4
    // From 16:00 on 4/30 until 14:59 on 5/15 JST.
    // 9th Anniversary! Love Gem Pack Part 4
    // From 16:00 on 4/30 until 14:59 on 5/15 JST.
    // 9th Anniversary! Love Gem Mini Pack Part 4
    // From 16:00 on 4/30 until 14:59 on 5/15 JST.

    // news_2204_30_9iF5dfb9vz
    // 9th Anniversary! Premium Pack Aqours
    // From 16:00 on 4/30 until 14:59 on 5/15 JST.


    // news_2204_30_itJiFCu1zC
    // 9th Anniversary! Special Pack Aqours
    // From 16:00 on 4/30 until 14:59 on 5/15 JST.
    // 9th Anniversary! Mini Pack Aqours
    // From 16:00 on 4/30 until 14:59 on 5/15 JST.

	{
		type: "Other",
		title: [
    		"9th Anniversary Deluxe Love Gem Pack (Part 3)"
		],
		image: [
            "imgs/packs/img_8007.png"
        ],
		column: 2,
		priority: 1,
		timers: [ 
            {
                name: "Sales period",
                start: "Apr 25 2022, 16:00",
                end: "Apr 30 2022, 14:59",
                extraPriority: 100
            }
		]
	},
	{
		type: "Other",
		title: [
    		"9th Anniversary Love Gem Pack (Part 3)"
		],
		image: [
            "imgs/packs/img_7993.png"
        ],
		column: 2,
		priority: 1,
		timers: [ 
            {
                name: "Sales period",
                start: "Apr 25 2022, 16:00",
                end: "Apr 30 2022, 14:59",
                extraPriority: 100
            }
		]
	},
	{
		type: "Other",
		title: [
    		"9th Anniversary Love Gem Mini Pack (Part 3)"
		],
		image: [
            "imgs/packs/img_7996.png"
        ],
		column: 2,
		priority: 1,
		timers: [ 
            {
                name: "Sales period",
                start: "Apr 25 2022, 16:00",
                end: "Apr 30 2022, 14:59",
                extraPriority: 100
            }
		]
	},
	{
		type: "Other",
		title: [
    		"9th Anniversary Premium Pack - μ's"
		],
		image: [
            "imgs/packs/img_7998.png"
        ],
		column: 2,
		priority: 1,
		timers: [ 
            {
                name: "Sales period",
                start: "Apr 15 2022, 16:00",
                end: "Apr 30 2022, 14:59",
                extraPriority: 100
            }
		]
	},
	{
		type: "Other",
		title: [
    		"9th Anniversary Special Pack - μ's"
		],
		image: [
            "imgs/packs/img_8001.png"
        ],
		column: 2,
		priority: 1,
		timers: [ 
            {
                name: "Sales period",
                start: "Apr 15 2022, 16:00",
                end: "Apr 30 2022, 14:59",
                extraPriority: 100
            }
		]
	},
	{
		type: "Other",
		title: [
    		"9th Anniversary Mini Pack - μ's"
		],
		image: [
            "imgs/packs/img_8003.png"
        ],
		column: 2,
		priority: 1,
		timers: [ 
		{
			name: "Sales period",
			start: "Apr 15 2022, 16:00",
			end: "Apr 30 2022, 14:59",
			extraPriority: 100
		}
		]
	},
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
                start: "Apr 10 2022, 00:00",
                end: "May 9 2022, 23:59",
                extraPriority: 100
            }
		]
	},
];
