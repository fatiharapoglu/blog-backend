const notFound = (req, res) => res.status(404).json({ msg: "Page not found. 404" });

module.exports = notFound;
