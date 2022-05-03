#!/usr/bin/env python3
# 12-2, 5-7, 9-11 PM JST, only on weekend.
# <t:1649473200:f> - <t:1649480400:f>
from datetime import datetime, timedelta
import pytz
tokyo = pytz.timezone('Asia/Tokyo')

d = datetime.today()
tfri = timedelta((11 - d.weekday()) % 7)
tsat = timedelta((12 - d.weekday()) % 7)
dt_fri = d + tfri
dt_sat = d + tsat
dt_sun = dt_sat + timedelta(days=1)
dt_mon = dt_sun + timedelta(days=1)
#dt_mon = d + timedelta(days=5)
fri = dt_fri.strftime("%b %d %Y")
sat = dt_sat.strftime("%b %d %Y")
sun = dt_sun.strftime("%b %d %Y")
mon = dt_mon.strftime("%b %d %Y")
x = dt_sat.strftime('%Y-%m-%d')
y = dt_sun.strftime('%Y-%m-%d')

# print(fri)
# print(x)
# print(y)

timearrays = []
timearrays.append([x + " 12:00:00", x + " 14:00:00"])
timearrays.append([x + " 17:00:00", x + " 19:00:00"])
timearrays.append([x + " 21:00:00", x + " 23:00:00"])
timearrays.append([y + " 12:00:00", y + " 14:00:00"])
timearrays.append([y + " 17:00:00", y + " 19:00:00"])
timearrays.append([y + " 21:00:00", y + " 23:00:00"])

print("""
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
                start: "%s, 16:00",
                end: "%s, 14:59",
                markers: [
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "%s, 12:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "%s, 17:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "%s, 21:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "%s, 12:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "%s, 17:00",
                        type: "star"
                    },
                    {
                        title: "5x EXP (for 2 hours)",
                        time: "%s, 21:00",
                        type: "star"
                    }
               ]
            }
        ]
    },
""" % (fri, mon, sat, sat, sat, sun, sun, sun))
