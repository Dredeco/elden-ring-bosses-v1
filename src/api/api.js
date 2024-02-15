let limit = 300
let url = `https://eldenring.fanapis.com/api/bosses?limit=${limit}`


export async function getBosses() {
    let bossData = await fetch (url)
    .then((response) => response.json())
    .then((json) => json.data)

    return bossData
}

export async function getBossById(id) {
    let data
    let BossUrl = `https://eldenring.fanapis.com/api/bosses/${id}`

    data = await fetch (BossUrl)
    .then((response) => response.json())
    .then((json) => (json.data))

    console.log(data)

    return data
}