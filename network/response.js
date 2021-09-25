exports.success = function (req, res, message, status){
    res.status(status || 200).send(
        {'error':"",
        'body':message,
    });
}

exports.error = function (req, res, message, status, details){

    console.error("[Error a revisar]" + details)
    res.status(status || 500).send(
        {
            'error':message,
            'body':"",
        });
}