var alertMessages = [];
var alertTypes = [];
var timerData = [
    /*{
        type: "DailyQuest",
        title: "Daily Quests",
        priority: 50,
        days: {
            "sunday": { elements: ["Sun", "Priest", "Mage", "Alchemist"], short:"Sun" },
            "monday": { elements: ["Moon", "Gold", "Warrior"], short:"Mon" },
            "tuesday": { elements: ["Fire", "Knight", "Priest"], short:"Tue" },
            "wednesday": { elements: ["Water", "Gold", "Mage"], short:"Wed" },
            "thursday": { elements: ["Wind", "Warrior", "Alchemist"], short:"Thu" },
            "friday": { elements: ["Gold", "Priest", "Mage"], short:"Fri" },
            "saturday": { elements: ["Earth", "Warrior", "Knight"], short:"Sat" }
        }
    },
    
    {
        "type": "Event",
        "title": [
            "No Laughing in the Maid Manor!",
            "メイド館では笑えない！",
            "Maid 2021 Event"
        ],
        "image": [
            "https://i.imgur.com/NjKzQaN.png",
            "https://i.imgur.com/5UpNoBs.png",
            "https://i.imgur.com/XVjhDho.png",
            "https://i.imgur.com/pLSTVc3.png",
            "https://i.imgur.com/g8JoM7F.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "April 27 2021, 17:00",
                "end": "May 14 2021, 15:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "May 5 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "May 6 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "May 7 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "May 8 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "April 29 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "May 1 2021, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "April 27 2021, 17:00",
                "end": "May 14 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "April 27 2021, 17:00",
                "end": "May 21 2021, 13:59"
            }
        ]
    },*/
	{
        "type": "Event",
        "title": [
			"【Event】",
            "The Peaceful Daily Life of Nayuta's Family"
        ],
        "image": [
            "imgs/banner_0486_m.png"
        ],
        "column": 0,
        "priority": 36,
        "timers": [
			{
				name: "Maintenance",
				start: "June 11 2021, 15:00",
				end: "June 11 2021, 15:59",
				extraPriority: 10
			},
            {
                "name": "Main Event",
                "start": "June 11 2021, 16:00",
                "end": "June 21 2021, 14:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Story quests 11-20",
					time: "June 16 2021, 16:00",
					type: "story"
				}
				]
            }
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Event】",
            "Extermination Battle: Witches' Paradox",
			"Main Story Arc 2 Chapter 6 Release"
        ],
        "image": [
            "imgs/banner_0487_m.png",
			"imgs/banner_1030600_m.png"
        ],
        "column": 0,
        "priority": 35,
        "timers": [
			{
				name: "Maintenance",
				start: "June 21 2021, 15:00",
				end: "June 21 2021, 16:59",
				extraPriority: 10
			},
            {
                "name": "Main Event",
                "start": "June 21 2021, 17:00",
                "end": "June 28 2021, 14:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Challenge Stage",
					time: "June 23 2021, 16:00",
					type: "battle"
				},
				{
					title: "EX Challenge Stage",
					time: "June 25 2021, 16:00",
					type: "battle"
				}
				]
            }
        ]
    },
	/* {
        "type": "Event",
        "title": [
			"【Mirrors Ranking】",
            "Scheduled to be held in July 2021"
        ],
        "image": [
            "mirroran"
        ],
        "column": 0,
        "priority": 30,
		"keepAfterFinished": "60 days",
        "timers": [
			{
				name: "Test",
				start: "June 4 2021, 15:00",
				end: "June 4 2021, 16:00"
			}
        ]
    }, */
	{
        "type": "Other",
        "title": [
            "【Shops and Limited-time Missions】"
        ],
        "image": [
            "shop"
        ],
        "column": 2,
        "priority": 10,
        "timers": [
			{
				"name": "Adjuster Coins Shop: Yellow - Tart☆Magica Gachas",
				"start": "May 17 2021, 17:00",
				"end": "June 11 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "The Masked Student Council Strikes Back: Event Shop and Missions",
				"start": "May 24 2021, 16:00",
                "end": "June 11 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "Adjuster Coins Shop: Black - The Masked Student Council Strikes Back Pickup Gacha Parts 1 & 2",
				"start": "May 24 2021, 16:00",
				"end": "June 11 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "The mirror that reflects my true self - Event Shop and Missions",
				"start": "June 4 2021, 16:00",
				"end": "June 18 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "Adjuster Coins Shop: Red - Kirino Sae Pickup Gacha",
				"start": "June 4 2021, 16:00",
				"end": "June 18 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "The Peaceful Daily Life of Nayuta's Family - Event Shop and Missions",
				"start": "June 11 2021, 16:00",
				"end": "June 28 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "Adjuster Coins Shop: Purple - Satomi Nayuta Pickup Gacha",
				"start": "June 11 2021, 16:00",
				"end": "June 28 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				name: "1400 Days Since Release - Limited time Shop and Missions",
				start:  "June 11 2021, 16:00",
				end: "June 28 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				name: "New Chapter Campaign - Limited time missions",
				start: "June 21 2021, 17:00",
				end: "June 28 2021, 14:59",
				keepAfterFinished: "9 hours"
			}
        ]
    },
	{
		type: "Other",
		title: [
		"【Premium Bundle】",
		"1400 Days since Release Commemorative Bags"
		],
		image: [
            "imgs/banner_0489_m.png"
        ],
		column: 2,
		priority: 9,
		timers: [
		{
			name: "Sales period",
			start: "June 11 2021, 16:00",
			end: "June 28 2021, 14:59",
			keepAfterFinished: "9 hours"
		},
		{
			name: "4★ Magical Girl & Memoria Selection Tickets Exchange",
			start: "June 11 2021, 16:00",
			end: "July 5 2021, 14:59",
			keepAfterFinished: "9 hours"
		}
		]
	},
	{
		type: "Other",
		title: [
		"【Paid Shop】",
		"Mitama's Special Deal in occasion of the Extermination Battle"
		],
		image: [
            "imgs/banner_0491_m.png"
        ],
		column: 2,
		priority: 8,
		timers: [
		{
			name: "Sales period",
			start: "June 21 2021, 17:00",
			end: "June 28 2021, 14:59",
			keepAfterFinished: "9 hours"
		}
		]
	},
	/*{
        type: "Maintenance",
        title: [
            "Maintenance"
        ],
		"image": "maintenance",
        column: 0,
        priority: 39,
        timers: [
            {
                name: "Scheduled Time",
                start: "May 24 2021, 15:00",
                end: "May 24 2021, 16:00",
                keepAfterFinished: "60 minutes",
				extraPriority: 10
            }
        ]
    },*/
	{
        "type": "Gacha",
        "title": [
			"【Pickup Gacha】",
            "Satomi Nayuta Pickup Gacha"
        ],
        "image": [
            "imgs/gachabanner_0691_m.png"
        ],
        "column": 1,
        "priority": 75,
        "timers": [
            {
                "name": "Duration",
                "start": "June 11 2021, 16:00",
                "end": "June 21 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours"
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Gacha】",
            "Choose Your 4* Memoria Selection Gacha"
        ],
        "image": [
            "imgs/gachabanner_0696_m.png"
        ],
        "column": 1,
        "priority": 74,
        "timers": [
            {
                "name": "Duration",
                "start": "June 21 2021, 17:00",
                "end": "June 28 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours"
            }
        ]
    },
    {
        type: "Event",
        title: [
			"【Campaign】",
            "1400 Days Since Release"
        ],
        image: [
			"imgs/banner_0488_m.png",
			"imgs/banner_0490_m.png"
		],
        column: 0,
		priority: 35,
        timers: [
            {
                name: "Login Bonus",
                start: "June 11 2021, 16:00",
                end: "June 28 2021, 23:59",
				extraPriority: 10
            },
			{
				name: "1/2 AP, x2 Player EXP, 2x Support Points, 2x Great Success & Super Success",
				start: "June 11 2021, 16:00",
                end: "June 28 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				name: "Guaranteed 4★ Magical Girl Ticket Exchange",
				start: "June 17 2021, 00:00",
				end: "July 5 2021, 23:59",
				keepAfterFinished: "9 hours"
			}
        ]
    }
];