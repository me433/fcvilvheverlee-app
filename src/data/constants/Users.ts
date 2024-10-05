type User = {username: string, password?: string, firstName: string, lastName: string, active: 0 | 1, isAdmin: 0 | 1}

export const users: User[] = [{username: 'MiloW', firstName: 'Milo', lastName: 'Wera', active: 1, isAdmin: 0},
    {username: 'MiloAdmin', firstName: 'Milo', lastName: 'Wera', active: 1, isAdmin: 1},
    {username: 'LaurentV', firstName: 'Lauren', lastName: 'Verheyden', active: 1, isAdmin: 1}
]