module.exports = function (req, res, next) {
    try {
        let obj = JSON.parse(JSON.stringify(req.body));
        console.log(obj);
        if (req.method === 'POST' && obj && typeof obj === 'object' && obj.id && obj.name && obj.course && obj.picture && obj.grade) {
            next();
        } else {
            sendError(req, res, next);
        }
    } catch (err) {
        console.log(err);
        sendError(req, res, next);
    }
};

function sendError(req, res, next) {
    let err = new Error("Invalid JSON");
    err.status = 500;
    next(err);
}