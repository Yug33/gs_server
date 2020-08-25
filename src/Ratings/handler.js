import { saveRatings } from './repo'
async function storeRatings(req, res) {
    const { userRatingData } = req.body
    await saveRatings(userRatingData)
    res.json({ code: 'success' })
}
export { storeRatings }
