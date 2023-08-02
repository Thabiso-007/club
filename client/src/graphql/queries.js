import { url } from '../config/url'

// Get all the clubs
export const getClubs = async (state) => {
    state.isLoading = true
    const options = { 
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // Club query
            query: `{
                clubs {
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