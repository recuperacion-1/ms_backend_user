const success = (req, res, status = 200, message = "") => {
    res.status(status).json({
        err: false,
        status: status,
        body: message,
    });
};

const error = (req, res, status = 500, message = "") => {
    res.status(status).json({
        err: true,
        status: status,
        body: message,
    });
};

export default { success, error };
