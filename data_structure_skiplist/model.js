{ // This is the represent of Skitlist
    head: {
        level: 2 // It represent the point to L1
    }
    nodes: [
        { // This maybe is the represent of L0
            value: 1,
            foward: {
                value: 2,
                foward: {
                    value: 3,
                    foward: null
                }
            }
        },
        { // This maybe is the represent of L1
            value: 1,
            foward: {
                value: 2,
                foward: null
            }
        },
    ]   
}