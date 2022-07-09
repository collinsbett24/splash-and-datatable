export interface User {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    },
    location: {
        state: string
    },
    email: string,
    dob: {
        age: number
    },
    registered: {
        age: number
    },
    phone: string,
    picture: {
        thumbnail: string,
        medium: string
    }
}



