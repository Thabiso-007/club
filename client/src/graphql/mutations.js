import { url } from '../config/url' 

// Add club 
export const addClub = async (state) => {
    state.isLoading = true
    const options = { 
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // Add club 
            query: `mutation {
                addClub(name: "${state.clubs.name}", league: "${state.clubs.league}") {
                    name
                    league
                    id
                } 
            }`
        })
    } 
    
    const response = await fetch(url, options)
    const text = await response.text()
    const jsonRes = JSON.parse(text)
    state.isLoading = false
    return jsonRes.data.clubs
}