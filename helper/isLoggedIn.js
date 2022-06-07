// Add middleware to check whether user is logged in
module.exports = (req, res, next) => {
    if(!req.user)
    {
        res.redirect("/auth/signin")
    }
    else {
        next();
    }
}