const initialState = {
    designs: [
        { id: 1, name: 'Project One', tshirtColor: 'black' },
        { id: 2, name: 'Project Tow', tshirtColor: 'blue' },
        { id: 3, name: 'Project Three', tshirtColor: 'red' },
        { id: 4, name: 'Project Four', tshirtColor: 'white' },
        { id: 5, name: 'Project Five', tshirtColor: 'grey' }
    ]
}

const designReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_DESIGN':
            console.log('design is saved in database', action.design)

    }
    return state
}

export default designReducer