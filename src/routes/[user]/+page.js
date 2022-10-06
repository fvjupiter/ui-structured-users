import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
        const url = `https://dummyapi.io/data/v1/user/${params.user}`
        const options = {
            method: 'GET',
            headers: {
                'app-id': '6331b5ca617229037740ba65',
            }
        }
        const res = await fetch(url, options)
        const data = await res.json()

        if (data) return { data }
        return error(404, 'Not found')
}
