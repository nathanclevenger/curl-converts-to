import curlconverter from 'curlconverter'

export default function handler(req, res) {
    const { target, curl } = req.query;
    console.log(curl)
    const code = curlconverter[target](curl ?? "curl https://example.com")
    res.status(200).json({ code })
}