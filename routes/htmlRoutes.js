var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // HTML GET Requests
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, '../index.html'));
    });
};
