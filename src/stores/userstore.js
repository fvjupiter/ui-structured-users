import { writable } from 'svelte/store'

export const selectedOrderStore = writable('custom')
export const users = writable([])

const fetchUsers = async (page, limit) => {
    const url = `https://dummyapi.io/data/v1/user?page=${page}&limit=${limit}`
    const options = {
        method: 'GET',
        headers: {
            'app-id': '6331b5ca617229037740ba65'
        }
    }
    const res = await fetch(url, options)
    const { data } = await res.json()
    const expandedData = data.map(user => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        picture: user.picture,
        isOnline: Math.random() >= 0.8,
        isFavorite: false,
        wasViewed: false,
    }))
    users.update(u => [...u, ...expandedData])
}

fetchUsers(0, 50)
// to get all available users
setTimeout(() => fetchUsers(1, 50), 20)
