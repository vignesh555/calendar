import { handleClientLoad } from './calendar';
import Rx from 'rxjs';
import moment from 'moment';
import 'moment-weekday-calc';
import { extendMoment } from 'moment-range';

const momentRange = extendMoment(moment);

handleClientLoad();

const listHolidays = [{
        date: '01/26/2017',
        title: 'Republic Day'
    },
    {
        date: '04/14/2017',
        title: 'Tamil New Year'
    },
    {
        date: '05/01/2017',
        title: 'May Day'
    },
    {
        date: '06/26/2017',
        title: 'Ramzan'
    },
    {
        date: '08/15/2017',
        title: 'Independence Day'
    },
    {
        date: '08/25/2017',
        title: 'Ganesh Chaturthi'
    },
    {
        date: '09/29/2017',
        title: 'Ayudha Pooja'
    },
    {
        date: '10/02/2017',
        title: 'Gandhi Jayanthi'
    },
    {
        date: '10/18/2017',
        title: 'Diwali'
    },
    {
        date: '12/25/2017',
        title: 'Christmas'
    }
]

const calendarData = [{
        "kind": "calendar#event",
        "etag": "\"2992134756634000\"",
        "id": "n2nmi893u491ubhk155hn6ojb8",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=bjJubWk4OTN1NDkxdWJoazE1NWhuNm9qYjggcGVhcnNvbi5jb21fNDI4M2c3dDh1aDFrOW80Ymx0OGRkcGw4ZmNAZw",
        "created": "2017-05-29T14:15:41.000Z",
        "updated": "2017-05-29T14:16:18.317Z",
        "summary": "Sudipta-OOO",
        "creator": {
            "email": "sudipta.suchismita@pearson.com"
        },
        "organizer": {
            "email": "pearson.com_4283g7t8uh1k9o4blt8ddpl8fc@group.calendar.google.com",
            "displayName": "Customization Capabilities",
            "self": true
        },
        "start": {
            "dateTime": "2017-06-02T10:00:00+05:30"
        },
        "end": {
            "dateTime": "2017-06-02T11:00:00+05:30"
        },
        "iCalUID": "n2nmi893u491ubhk155hn6ojb8@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        }
    },
    {
        "kind": "calendar#event",
        "etag": "\"2991212774730000\"",
        "id": "v1j8etmb6cccuken3j3dc83uq8",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=djFqOGV0bWI2Y2NjdWtlbjNqM2RjODN1cTggcGVhcnNvbi5jb21fNDI4M2c3dDh1aDFrOW80Ymx0OGRkcGw4ZmNAZw",
        "created": "2017-05-24T06:13:07.000Z",
        "updated": "2017-05-24T06:13:07.365Z",
        "summary": "Vishnupriya(QA) Out Of Office",
        "creator": {
            "email": "vivekanandan.vishnupriya@pearson.com"
        },
        "organizer": {
            "email": "pearson.com_4283g7t8uh1k9o4blt8ddpl8fc@group.calendar.google.com",
            "displayName": "Customization Capabilities",
            "self": true
        },
        "start": {
            "date": "2017-06-09"
        },
        "end": {
            "date": "2017-06-10"
        },
        "transparency": "transparent",
        "iCalUID": "v1j8etmb6cccuken3j3dc83uq8@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        }
    },
    {
        "kind": "calendar#event",
        "etag": "\"2995707122998000\"",
        "id": "gjolvks9d6u6gnhvl4s6ltjt6s",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=Z2pvbHZrczlkNnU2Z25odmw0czZsdGp0NnMgcGVhcnNvbi5jb21fNDI4M2c3dDh1aDFrOW80Ymx0OGRkcGw4ZmNAZw",
        "created": "2017-06-19T06:26:01.000Z",
        "updated": "2017-06-19T06:26:01.499Z",
        "summary": "Prasaad OOO",
        "creator": {
            "email": "srinivasan.jayaraman@pearson.com"
        },
        "organizer": {
            "email": "pearson.com_4283g7t8uh1k9o4blt8ddpl8fc@group.calendar.google.com",
            "displayName": "Customization Capabilities",
            "self": true
        },
        "start": {
            "date": "2017-06-22"
        },
        "end": {
            "date": "2017-06-24"
        },
        "transparency": "transparent",
        "iCalUID": "gjolvks9d6u6gnhvl4s6ltjt6s@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        }
    },
    {
        "kind": "calendar#event",
        "etag": "\"2996075997012000\"",
        "id": "5koqdhgg7278526247badubcis",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NWtvcWRoZ2c3Mjc4NTI2MjQ3YmFkdWJjaXMgcGVhcnNvbi5jb21fNDI4M2c3dDh1aDFrOW80Ymx0OGRkcGw4ZmNAZw",
        "created": "2017-06-21T09:39:58.000Z",
        "updated": "2017-06-21T09:39:58.506Z",
        "summary": "Srini - OOO",
        "creator": {
            "email": "srinivasan.jayaraman@pearson.com"
        },
        "organizer": {
            "email": "pearson.com_4283g7t8uh1k9o4blt8ddpl8fc@group.calendar.google.com",
            "displayName": "Customization Capabilities",
            "self": true
        },
        "start": {
            "date": "2017-06-27"
        },
        "end": {
            "date": "2017-06-28"
        },
        "transparency": "transparent",
        "iCalUID": "5koqdhgg7278526247badubcis@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        }
    }
];


function getMonthDateRange(year, month) {
    const rangeStart = moment([year, month - 1]);
    const rangeEnd = moment(rangeStart).endOf('month');
    const totalNumber = moment().isoWeekdayCalc({ rangeStart, rangeEnd, weekdays: [1, 2, 3, 4, 5], exclusions: listHolidaysDate })
    console.log(totalNumber);

    return { start: rangeStart, end: rangeEnd };
}


const listHolidaysObservable = Rx.Observable.from(listHolidays).pluck('date');
const listHolidaysDate = [];
listHolidaysObservable.subscribe(date => listHolidaysDate.push(date));

const getDateUser = Rx.Observable.from(calendarData)
    .filter(x => x.creator.email === "srinivasan.jayaraman@pearson.com")
    .map(x => {
        const startDate = moment(x.start.date, 'YYYY-MM-DD');
        const endDate = moment(x.end.date, 'YYYY-MM-DD');
        debugger;
        console.log(moment.range(startDate, endDate));
        return startDate
    });
getDateUser.subscribe(user => console.log(user));

getMonthDateRange(2017, 6);