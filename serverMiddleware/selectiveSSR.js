export default function (req, res, next) {
  const query = (new URL(req.url, 'http://random.org/')).searchParams
  if (!query.get('ssr')) {
    res.spa = true
  }
  next()
}
