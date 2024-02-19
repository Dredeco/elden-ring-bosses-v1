export async function getAllBosses() {
    let bossData = await fetch (`https://eldenring.fanapis.com/api/bosses?`)
    .then((response) => response.json())
    .then((json) => json.data)

    return bossData
}

export async function getBosses(limit) {
    let bossData = await fetch (`https://eldenring.fanapis.com/api/bosses?limit=${limit}`)
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

export async function getAllNPC() {
    let bossData = await fetch (`https://eldenring.fanapis.com/api/npcs`)
    .then((response) => response.json())
    .then((json) => json.data)

    return bossData
}

export async function getNPC(limit) {
    let bossData = await fetch (`https://eldenring.fanapis.com/api/npcs?limit=${limit}`)
    .then((response) => response.json())
    .then((json) => json.data)

    return bossData
}

export async function getNPCById(id) {
    let bossData = await fetch (`https://eldenring.fanapis.com/api/npcs/${id}`)
    .then((response) => response.json())
    .then((json) => json.data)

    return bossData
}