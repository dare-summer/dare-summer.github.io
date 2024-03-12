$(document).ready(function () {
    moment.locale('en');
    var now = moment("20230911", "YYYYMMDD");

    /**
     * Many events
     */
    var events = [

        //monday 11
        {
            start: now.startOf('week').add(1, 'days').add(9, 'h').format('X'),
            end: now.startOf('week').add(1, 'days').add(10, 'h').add(30, 'm').format('X'),
            title: 'Registration & welcome coffee with the lecturers',
            content: 'Welcome coffee with the teachers',
            category: 'social'
        },

        // {
        //     start: now.startOf('week').add(1, 'days').add(10, 'h').add(15, 'm').format('X'),
        //     end: now.startOf('week').add(1, 'days').add(10, 'h').add(30, 'm').format('X'),
        //     title: 'Welcome to the School',
        //     content: 'TODO:',
        //     category: 'social'
        // },
        {
            start: now.startOf('week').add(1, 'days').add(10, 'h').add(30, 'm').format('X'),
            end: now.startOf('week').add(1, 'days').add(12, 'h').add(30, 'm').format('X'),
            title: 'Introductory Lecture by Nuno Preguiça',
            content: 'TODO:',
            category: 'lecture'
        },
        //Lunch
        {
            start: now.startOf('week').add(1, 'days').add(12, 'h').add(30, 'm').format('X'),
            end: now.startOf('week').add(1, 'days').add(13, 'h').add(45, 'm').format('X'),
            title: 'Lunch',
            content: 'Lunch at the VUB resto.',
            category: 'lunch or coffee'
        },

        {
            start: now.startOf('week').add(1, 'days').add(13, 'h').add(45, 'm').format('X'),
            end: now.startOf('week').add(1, 'days').add(15, 'h').add(45, 'm').format('X'),
            title: 'Annette Bieniusa: Lecture',
            content: 'TODO:',
            category: 'lecture'
        },
        {
            start: now.startOf('week').add(1, 'days').add(15, 'h').add(45, 'm').format('X'),
            end: now.startOf('week').add(1, 'days').add(16, 'h').format('X'),
            title: 'Coffee break',
            content: '',
            category: 'lunch or coffee'
        },
        {
            start: now.startOf('week').add(1, 'days').add(16, 'h').format('X'),
            end: now.startOf('week').add(1, 'days').add(18, 'h').format('X'),
            title: 'Burcu Kulahcioglu Ozkan: Lecture (Join with the CIF consortium)',
            content: 'TODO: Join talk with the Security Testing and Verification Summer School',
            category: 'lecture'
        },
        {
            start: now.startOf('week').add(1, 'days').add(18, 'h').format('X'),
            end: now.startOf('week').add(1, 'days').add(20, 'h').format('X'),
            title: 'Welcome reception',
            content: 'TODO:',
            category: 'social'
        },

        //tuesday 12
        {
            start: now.startOf('week').add(2, 'days').add(8, 'h').add(30, 'm').format('X'),
            end: now.startOf('week').add(2, 'days').add(10, 'h').add(30, 'm').format('X'),
            title: 'Carlos Baquero: Lecture',
            content: 'TODO:',
            category: 'lecture'
        },
        {
            start: now.startOf('week').add(2, 'days').add(10, 'h').add(30, 'm').format('X'),
            end: now.startOf('week').add(2, 'days').add(10, 'h').add(45, 'm').format('X'),
            title: 'Coffee break',
            content: '',
            category: 'lunch or coffee'
        },
        {
            start: now.startOf('week').add(2, 'days').add(10, 'h').add(45, 'm').format('X'),
            end: now.startOf('week').add(2, 'days').add(12, 'h').add(45, 'm').format('X'),
            title: 'Annette Bieniusa: Hands-on',
            content: 'TODO:',
            category: 'hands-on'
        },
        //Lunch
        {
            start: now.startOf('week').add(2, 'days').add(12, 'h').add(45, 'm').format('X'),
            end: now.startOf('week').add(2, 'days').add(13, 'h').add(45, 'm').format('X'),
            title: 'Lunch',
            content: 'Lunch at the VUB resto.',
            category: 'lunch or coffee'
        },
        {
            start: now.startOf('week').add(2, 'days').add(13, 'h').add(45, 'm').format('X'),
            end: now.startOf('week').add(2, 'days').add(15, 'h').format('X'),
            title: 'Carlos Baquero: Hands-on',
            content: 'TODO:',
            category: 'hands-on'
        },
        {
            start: now.startOf('week').add(2, 'days').add(15, 'h').format('X'),
            end: now.startOf('week').add(2, 'days').add(17, 'h').format('X'),
            title: 'Guided tour at the Natural Sciences Museum',
            content: 'Guided tour at the Natural Sciences Museum',
            category: 'social'
        },
        {
            start: now.startOf('week').add(2, 'days').add(17, 'h').format('X'),
            end: now.startOf('week').add(2, 'days').add(20, 'h').format('X'),
            title: 'Frites at Place Jourdan',
            content: 'TODO:',
            category: 'lunch or coffee'
        },

        //wednesday
        {
            start: now.startOf('week').add(3, 'days').add(8, 'h').add(30, 'm').format('X'),
            end: now.startOf('week').add(3, 'days').add(10, 'h').add(30, 'm').format('X'),
            title: 'Carla Ferreira: Lecture',
            content: 'TODO:',
            category: 'lecture'
        },
        {
            start: now.startOf('week').add(3, 'days').add(10, 'h').add(30, 'm').format('X'),
            end: now.startOf('week').add(3, 'days').add(10, 'h').add(45, 'm').format('X'),
            title: 'Coffee break',
            content: '',
            category: 'lunch or coffee'
        },
        {
            start: now.startOf('week').add(3, 'days').add(10, 'h').add(45, 'm').format('X'),
            end: now.startOf('week').add(3, 'days').add(12, 'h').add(45, 'm').format('X'),
            title: 'Carla Ferreira: Hands-on',
            content: 'TODO:',
            category: 'hands-on'
        },
        {
            start: now.startOf('week').add(3, 'days').add(12, 'h').add(45, 'm').format('X'),
            end: now.startOf('week').add(3, 'days').add(14, 'h').format('X'),
            title: 'Lunch',
            content: 'Lunch at the VUB resto.',
            category: 'lunch or coffee'
        },
        {
            start: now.startOf('week').add(3, 'days').add(14, 'h').format('X'),
            end: now.startOf('week').add(3, 'days').add(16, 'h').format('X'),
            title: 'Martin Kleppmann: Lecture',
            content: 'TODO:',
            category: 'lecture'
        },
        {
            start: now.startOf('week').add(3, 'days').add(16, 'h').format('X'),
            end: now.startOf('week').add(3, 'days').add(18, 'h').format('X'),
            title: 'Poster reception',
            content: 'TODO:',
            category: 'hands-on'
        },

        //thursday
        {
            start: now.startOf('week').add(4, 'days').add(8, 'h').add(30, 'm').format('X'),
            end: now.startOf('week').add(4, 'days').add(10, 'h').add(30, 'm').format('X'),
            title: 'Kevin De Porre: Lecture',
            content: 'TODO:',
            category: 'lecture'
        },
        {
            start: now.startOf('week').add(4, 'days').add(10, 'h').add(30, 'm').format('X'),
            end: now.startOf('week').add(4, 'days').add(11, 'h').format('X'),
            title: 'Coffee break',
            content: '',
            category: 'lunch or coffee'
        },
        {
            start: now.startOf('week').add(4, 'days').add(11, 'h').format('X'),
            end: now.startOf('week').add(4, 'days').add(13, 'h').format('X'),
            title: 'Kevin De Porre: Hands-on',
            content: 'TODO:',
            category: 'hands-on'
        },
        {
            start: now.startOf('week').add(4, 'days').add(13, 'h').format('X'),
            end: now.startOf('week').add(4, 'days').add(14, 'h').add(15, 'm').format('X'),
            title: 'Lunch',
            content: 'Lunch at the VUB resto.',
            category: 'lunch or coffee'
        },
        {
            start: now.startOf('week').add(4, 'days').add(14, 'h').add(15, 'm').format('X'),
            end: now.startOf('week').add(4, 'days').add(15, 'h').format('X'),
            title: 'Marc Shapiro: Lecture part 1',
            content: 'TODO:',
            category: 'lecture'
        },
        {
            start: now.startOf('week').add(4, 'days').add(15, 'h').format('X'),
            end: now.startOf('week').add(4, 'days').add(17, 'h').format('X'),
            title: 'Guided tour at the Comic Museum',
            content: 'TODO:',
            category: 'social'
        },
        {
            start: now.startOf('week').add(4, 'days').add(19, 'h').add(30, 'm').format('X'),
            end: now.startOf('week').add(4, 'days').add(21, 'h').add(30, 'm').format('X'),
            title: 'Dinner at the City Center',
            content: 'TODO:',
            category: 'lunch or coffee'
        },

        //friday
        {
            start: now.startOf('week').add(5, 'days').add(9, 'h').add(15, 'm').format('X'),
            end: now.startOf('week').add(5, 'days').add(10, 'h').format('X'),
            title: 'Marc Shapiro: Lecture part 2',
            content: 'TODO:',
            category: 'hands-on'
        },
        {
            start: now.startOf('week').add(5, 'days').add(10, 'h').format('X'),
            end: now.startOf('week').add(5, 'days').add(10, 'h').add(30, 'm').format('X'),
            title: 'Coffee break',
            content: '',
            category: 'lunch or coffee'
        },
        {
            start: now.startOf('week').add(5, 'days').add(10, 'h').add(30, 'm').format('X'),
            end: now.startOf('week').add(5, 'days').add(12, 'h').add(30, 'm').format('X'),
            title: 'Martin Kleppmann: lecture',
            content: 'TODO:',
            category: 'lecture'
        },
        {
            start: now.startOf('week').add(5, 'days').add(12, 'h').add(30, 'm').format('X'),
            end: now.startOf('week').add(5, 'days').add(14, 'h').format('X'),
            title: 'Lunch',
            content: 'Lunch at the VUB resto.',
            category: 'lunch or coffee'
        },
        {
            start: now.startOf('week').add(5, 'days').add(14, 'h').format('X'),
            end: now.startOf('week').add(5, 'days').add(16, 'h').format('X'),
            title: 'Research Projects & Closing',
            content: 'TODO:',
            category: 'hands-on'
        }
    ];

    /**
     * Init the calendar
     */
    var calendar = $('#calendar').Calendar({
        locale: 'en',
       
        weekday: {
            dayline: {
                weekdays: [1, 2, 3, 4, 5],
                format: "dddd DD",
                month:{
                    format: '11 - 15 MMMM YYYY'
                }
            },
            timeline: {
                //TODO: If the interval is set a higher value the schedule will reduce its height.
                intervalMinutes: 30,
                fromHour: 8,
                toHour: 20
            }
        },
        events: events,
        unixTimestamp: 1694420863
    })

    //TODO:colors for the categories.
    calendar.setEventCategoriesColors([
        { category: "social", color: "#FFCC80" },
        { category: "lecture", color: "#FFF59D" },
        { category: "hands-on", color: "#C5E1A5" },
        { category: "lunch or coffee", color: "#80DEEA" }
    ])

    calendar.init();

});