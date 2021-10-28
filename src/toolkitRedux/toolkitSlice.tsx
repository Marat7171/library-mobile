import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "booksManager",
    initialState: {
        auth: false,
        personTake: [],
        booksList: [
            {
                id: 1,
                Author: "Georgie",
                BookName: "Gookes",
                grade: 3,
                reviews: 3425,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliqorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliqorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliqorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliqorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliqorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliqorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliqorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliqorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliqorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet dui vel tortor viverra bibendum. Pellentesque bibendum velit at egestas placerat. Mauris viverra, felis vitae vehicula porta, massa sapien pharetra tellus, quis semper mi felis nec nisl. Ut non porttitor urna."
            },
            {
                id: 2,
                Author: "Gualterio",
                BookName: "Spaughton",
                grade: 5,
                reviews: 8311,
                description: "Nullam eget gravida neque. Ut vel lobortis libero. Vestibulum ultrices sollicitudin nisi, consectetur vestibulum mi eleifend et. Ut feugiat fermentum ullamcorper. Aliquam erat volutpat. Suspendisse odio nunc, pharetra sed ultrices ut, suscipit quis metus. Pellentesque vel hendrerit nisi, quis eleifend ex."
            },
            {
                id: 3,
                Author: "Milton",
                BookName: "Guerrieo",
                grade: 1,
                reviews: 3453,
                description: "Ut ornare est a lectus mattis feugiat. Nullam luctus viverra enim. Proin faucibus pulvinar purus, sed pharetra nulla sollicitudin ut. Nunc facilisis ipsum ut sapien varius hendrerit. Nunc elit leo, fringilla ac orci at, accumsan venenatis massa. Nullam suscipit, nunc et placerat pulvinar, sem risus rhoncus nisl, ut molestie ipsum diam ullamcorper risus. Cras elementum massa in sem ornare, sit amet aliquam eros laoreet. Ut scelerisque odio eu gravida luctus. Etiam luctus finibus tortor, sed elementum massa ornare quis. Donec a lectus lorem. Vivamus odio tellus, lobortis quis nibh sit amet, molestie consectetur lacus."
            },
            {
                id: 4,
                Author: "Waldon",
                BookName: "Lubman",
                grade: 4,
                reviews: 1453,
                description: "Suspendisse congue magna odio. Curabitur tincidunt nisi eget purus ultricies, eget pharetra diam cursus. Curabitur pulvinar tincidunt ipsum, sit amet scelerisque turpis cursus eu. Maecenas at risus nec tortor malesuada eleifend sed quis risus. Aenean ullamcorper venenatis tellus sed vestibulum. Phasellus ut diam sit amet lacus tincidunt efficitur. Phasellus lacus orci, porta eu sapien sed, viverra ornare justo. Nulla interdum, eros at tincidunt pretium, metus mi consequat enim, ut interdum tellus dui eget tortor. Maecenas tortor tortor, hendrerit vel ornare non, viverra quis magna. Duis in ipsum dignissim, imperdiet turpis sit amet, sollicitudin odio. Fusce tempor interdum odio, vel dapibus erat vulputate non. Nam tempor eget nunc quis congue. Nulla facilisi. Nulla sit amet ante rhoncus dui dictum molestie. Morbi non mauris non lacus pellentesque sollicitudin ac a lectus. Cras convallis est ligula, in euismod dui vehicula vitae."
            },
            {
                id: 5,
                Author: "Lesley",
                BookName: "Agg",
                grade: 4,
                reviews: 1346,
                description: "Suspendisse congue magna odio. Curabitur tincidunt nisi eget purus ultricies, eget pharetra diam cursus. Curabitur pulvinar tincidunt ipsum, sit amet scelerisque turpis cursus eu. Maecenas at risus nec tortor malesuada eleifend sed quis risus."
            },
            {
                id: 6,
                Author: "Bengt",
                BookName: "Bowerman",
                grade: 2,
                reviews: 3966,
                description: "Duis facilisis sapien non maximus posuere. Maecenas molestie odio a risus sollicitudin aliquet. Donec nec malesuada lectus. Praesent convallis pulvinar porta. Nam vehicula neque at bibendum pretium."
            },
            {
                id: 7,
                Author: "Alisander",
                BookName: "Totterdell",
                grade: 3,
                reviews: 9645,
                description: "Aenean placerat velit eu lectus venenatis, et interdum libero ornare. Nunc sit amet justo lacus. Phasellus egestas porta justo vehicula rutrum. Pellentesque a ante interdum, mollis urna vel, rhoncus nisi. "
            },
            {
                id: 8,
                Author: "Georgie",
                BookName: "Gookes",
                grade: 5,
                reviews: 3456,
                description: "Mauris aliquet hendrerit enim vel ultricies. Nulla facilisi. Suspendisse lacinia elementum quam, luctus pulvinar lectus pellentesque vel. Sed tempor lorem id nibh maximus semper. "
            },
            {
                id: 9,
                Author: "Gualterio",
                BookName: "Spaughton",
                grade: 2,
                reviews: 6364,
                description: "Aenean sapien justo, ornare vel gravida nec, bibendum a orci. Mauris suscipit, massa in hendrerit commodo, odio leo dictum tellus, eu interdum sem purus id tortor."
            },
            {
                id: 10,
                Author: "Milton",
                BookName: "Guerrieo",
                grade: 4,
                reviews: 6327,
                description: "Donec est ex, efficitur viverra ornare eu, sagittis sed diam. Aliquam erat volutpat. Vestibulum volutpat tincidunt enim bibendum bibendum. Pellentesque molestie vestibulum odio eu venenatis. Vivamus vitae orci ut tortor egestas accumsan. Aenean in sollicitudin leo, sed viverra quam."
            },
            {
                id: 11,
                Author: "Waldon",
                BookName: "Lubman",
                grade: 4,
                reviews: 9630,
                description: "Pellentesque ornare eu tellus non sodales. Integer ac ipsum porta, tincidunt est vel, imperdiet magna. Sed tincidunt imperdiet sem, nec sodales nibh maximus sit amet. "
            },
            {
                id: 12,
                Author: "Lesley",
                BookName: "Agg",
                grade: 3,
                reviews: 1954,
                description: "Etiam pulvinar mattis odio, quis porttitor diam cursus vel. Nam convallis ex in diam sollicitudin, ac pharetra erat aliquam. Sed cursus vitae nunc at auctor. Proin aliquet eros nec vulputate cursus. Aenean faucibus eget ipsum at dapibus."
            },
            {
                id: 13,
                Author: "Bengt",
                BookName: "Bowerman",
                grade: 2,
                reviews: 1064,
                description: "Morbi hendrerit, enim id feugiat vulputate, augue dolor commodo mauris, vitae scelerisque eros nulla vitae erat. Integer vitae tortor at velit venenatis blandit nec et magna. Donec a ante malesuada, fringilla tellus vel, sagittis turpis."
            },
            {
                id: 14,
                Author: "Alisander",
                BookName: "Totterdell",
                grade: 3,
                reviews: 1344,
                description: "Ut sed nisl consectetur, fermentum tellus sit amet, eleifend lacus. Maecenas eu sapien posuere, sodales nulla in, dapibus leo. Phasellus sed nunc nunc. Mauris ac tristique arcu. Vivamus condimentum est vel urna hendrerit dignissim."
            },
        ]
    },
    reducers: {
        personTakeAction(state, action) {
            state.personTake.push(action.payload)
        },
        personReturnAction(state, action) {
            state.personTake = state.personTake.filter(a => action.payload != a);
        },
        authSwitch(state) {
            state.auth = !state.auth;
        }

    }
})

export default toolkitSlice.reducer
export const {personTakeAction, personReturnAction, authSwitch} = toolkitSlice.actions