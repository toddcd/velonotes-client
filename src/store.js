const bikes = [
    {
        id: 1,
        active: true,
        makeModel: {
            id: 1,
            name: "Giant",
            model: {
                id: 1,
                name: "TCX Advanced",
                category: "cyclocross",
                size: {
                    id: 1,
                    code: "l",
                    name: "Large",
                    geo: {
                        seatTubeLength: 555,
                        seatTubeAngle: 73,
                        topTubeLength: 575,
                        headTubeLength: 175,
                        headTubeAngle: 72.5,
                        chainStayLength: 430,
                        wheelBase: 1040,
                        bottomBracketDrop: 60,
                        stack: 589,
                        reach: 395,
                        trail: 59,
                        forkRake: 50,
                        standOverHeight: 832
                    },
                }
            },
        },
        nickName: "Cross A-bike",
        serial: "1a345ju68000001234567",
        purchaseDate: "2018-06-01",
        positions: [{
            id: 1,
            bikeId: 1,
            name: "road",
            desc: "road setup",
            stem: 120,
            stemAngle: 17,
            handleBar: 42,
            crank: 175,
            seat: 143,
            seatHeight: 805,
            reach: 615,
            drop: 110,
            setback: 110
        }, {
            id: 2,
            bikeId: 1,
            name: "cross",
            desc: "cross setup",
            stem: 100,
            stemAngle: 6,
            handleBar: 42,
            crank: 175,
            seat: 143,
            seatHeight: 805,
            reach: 595,
            drop: 90,
            setback: 110
        },
            {
                id: 3,
                bikeId: 1,
                name: "road",
                desc: "road setup",
                stem: 120,
                stemAngle: 6,
                handleBar: 42,
                crank: 175,
                seat: 143,
                seatHeight: 805,
                reach: 615,
                drop: 110,
                setback: 110
            }],
        notes: [{
            id: 1,
            bikeId: 1,
            note: "tire pressure at 20psi front and 24psi rear"
        },
            {
                id: 2,
                bikeId: 1,
                note: "raised stem 5mm"
            }],
    },

    {
        id: 2,
        active: true,
        makeModel: {
            id: 2,
            name: "Specialized",
            model: {
                id: 1,
                name: "Crux",
                category: "cyclocross",
                size: {
                    id: 1,
                    code: "58",
                    name: "58",
                    geo: {
                        seatTubeLength: 570,
                        seatTubeAngle: 73,
                        topTubeLength: 578,
                        headTubeLength: 170,
                        headTubeAngle: 72.5,
                        chainStayLength: 425,
                        wheelBase: 1034,
                        bottomBracketDrop: 67,
                        stack: 597,
                        reach: 395,
                        trail: 59,
                        forkRake: 50,
                        standOverHeight: 840.5
                    },
                },
            },
        },
        nickName: "Cross B-bike",
        serial: "1a345ju68000001234567",
        purchaseDate: "2018-06-01",
        positions: [{
            id: 4,
            bikeId: 2,
            name: "road",
            desc: "road setup",
            stem: 120,
            stemAngle: 6,
            handleBar: 42,
            crank: 175,
            seat: 143,
            seatHeight: 805,
            reach: 615,
            drop: 110,
            setback: 110
        },
            {
                id: 5,
                bikeId: 2,
                name: "road",
                desc: "road setup",
                stem: 120,
                stemAngle: 6,
                handleBar: 42,
                crank: 175,
                seat: 143,
                seatHeight: 805,
                reach: 615,
                drop: 110,
                setback: 110
            }],
        notes: [{
            id: 3,
            bikeId: 2,
            note: "new bike setup"
        }],
    },

    {
        id: 3,
        active: true,
        makeModel: {
            id: 1,
            name: "Giant",
            model: {
                id: 1,
                name: "TCX Advanced",
                category: "cyclocross",
                size:
                    {
                        id: 2,
                        code: "m",
                        name: "Medium",
                        geo: {
                            seatTubeLength: 525,
                            seatTubeAngle: 73,
                            topTubeLength: 545,
                            headTubeLength: 145,
                            headTubeAngle: 71.5,
                            wheelBase: 1019,
                            chainStayLength: 430,
                            bottomBracketDrop: 60,
                            stack: 556,
                            reach: 375,
                            standOverHeight: 802,
                            trail: 65,
                            forkRake: 50
                        },
                    },
            },
        },
        nickName: "Road bike",
        serial: "1a345ju68000001234567",
        purchaseDate: "2018-06-01",
        positions: [{
            id: 6,
            bikeId: 3,
            name: "road",
            desc: "road setup",
            stem: 120,
            stemAngle: 6,
            handleBar: 42,
            crank: 175,
            seat: 143,
            seatHeight: 805,
            reach: 615,
            drop: 110,
            setback: 110
        }],
        notes: [{
            id: 4,
            bikeId: 3,
            note: "lowered saddle 5mm and adjusted the angle with nose down"
        }
        ],
    },
    {
        id: 4,
        active: true,
        makeModel: {
            id: 1,
            name: "Giant",
            model: {
                id: 1,
                name: "TCX Advanced",
                category: "cyclocross",
                size: {
                    id: 1,
                    code: "l",
                    name: "Large",
                    geo: {
                        seatTubeLength: 555,
                        seatTubeAngle: 73,
                        topTubeLength: 575,
                        headTubeLength: 175,
                        headTubeAngle: 72.5,
                        chainStayLength: 430,
                        wheelBase: 1040,
                        bottomBracketDrop: 60,
                        stack: 589,
                        reach: 395,
                        trail: 59,
                        forkRake: 50,
                        standOverHeight: 832
                    },
                }
            },
        },
        nickName: "Gravel Crusher",
        serial: "1a345ju68000001234567",
        purchaseDate: "2018-06-01",
        positions: [{
            id: 6,
            bikeId: 4,
            name: "road",
            desc: "road setup",
            stem: 120,
            stemAngle: 17,
            handleBar: 42,
            crank: 175,
            seat: 143,
            seatHeight: 805,
            reach: 615,
            drop: 110,
            setback: 110
        }, {
            id: 7,
            bikeId: 4,
            name: "cross",
            desc: "cross setup",
            stem: 100,
            stemAngle: 6,
            handleBar: 42,
            crank: 175,
            seat: 143,
            seatHeight: 805,
            reach: 595,
            drop: 90,
            setback: 110
        },
        {
            id: 8,
            bikeId: 4,
            name: "road",
            desc: "road setup",
            stem: 120,
            stemAngle: 6,
            handleBar: 42,
            crank: 175,
            seat: 143,
            seatHeight: 805,
            reach: 615,
            drop: 110,
            setback: 110
        }],
        notes: [{
            id: 5,
            bikeId: 4,
            note: "tire pressure at 20psi front and 24psi rear"
        },
        {
            id: 6,
            bikeId: 4,
            note: "raised stem 5mm"
        }],
    },
    {
        id: 5,
        active: false,
        makeModel: {
            id: 2,
            name: "Specialized",
            model: {
                id: 1,
                name: "Crux",
                category: "cyclocross",
                size: {
                    id: 1,
                    code: "58",
                    name: "58",
                    geo: {
                        seatTubeLength: 570,
                        seatTubeAngle: 73,
                        topTubeLength: 578,
                        headTubeLength: 170,
                        headTubeAngle: 72.5,
                        chainStayLength: 425,
                        wheelBase: 1034,
                        bottomBracketDrop: 67,
                        stack: 597,
                        reach: 395,
                        trail: 59,
                        forkRake: 50,
                        standOverHeight: 840.5
                    },
                },
            },
        },
        nickName: "Commuter",
        serial: "1a345ju68000001234567",
        purchaseDate: "2018-06-01",
        positions: [{
            id: 9,
            bikeId: 5,
            name: "road",
            desc: "road setup",
            stem: 120,
            stemAngle: 6,
            handleBar: 42,
            crank: 175,
            seat: 143,
            seatHeight: 805,
            reach: 615,
            drop: 110,
            setback: 110
        },
            {
                id: 10,
                bikeId: 5,
                name: "road",
                desc: "road setup",
                stem: 120,
                stemAngle: 6,
                handleBar: 42,
                crank: 175,
                seat: 143,
                seatHeight: 805,
                reach: 615,
                drop: 110,
                setback: 110
            }],
        notes: [{
            id: 5,
            bikeId: 7,
            note: "new bike setup"
        }],
    },
];


module.exports = {bikes};