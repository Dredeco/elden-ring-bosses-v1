let limit = 200
let url = `https://eldenring.fanapis.com/api/bosses?limit=${limit}`


export async function getData() {
    let bossData = await fetch (url)
    .then((response) => response.json())
    .then((json) => json.data)

    return bossData
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