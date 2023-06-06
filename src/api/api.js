let limit = 50
let url = `https://eldenring.fanapis.com/api/bosses?limit=${limit}`


export async function getData() {
    let data

    await fetch (url)
    .then((response) => response.json())
    .then((json) => data = json.data)

    return data
}

export async function getDataById(id) {
    let data
    let BossUrl = `https://eldenring.fanapis.com/api/bosses/${id}`

    data = await fetch (BossUrl)
    .then((response) => response.json())
    .then((json) => (json.data))
    .then((data) => (data))

    return data
}