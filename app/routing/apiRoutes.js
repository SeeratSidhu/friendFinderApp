var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('api/friends', function (req, res) {
        var newFriend = req.body;

        for (var i = 0; i < newFriend.scores.length; i++) {
            if (newFriend.scores[i] === "1 (Strongly Disagree") {
                newFriend.scores[i] = 1;
            }
            else if (newFriend.scores[i] === "5 (Strongly Agree)") {
                newFriend.scores[i] = 5;

            }
            else {
                newFriend.scores[i] = parseInt(newFriend.scores[i]);
            }
        }

        // var difference = [];

        // for (var i = 0; i < friends.length; i++) {
        //     var totalDiff = 0;

        //     for (var j = 0; j < friends[i].scores.length; j++) {
        //         var tempDiff = Math.abs(compatibleFriend.scores[j] - newFriend.scores[j]);
        //         totalDiff += tempDiff;
        //     }
        //     difference.push(totalDiff);

        //     var num = difference[0];
        //     var index = 0;

        //     for (var x = 0; x < difference.length; x++) {
        //         if (difference[x] < num) {
        //             num = difference[x];
        //             index = x;
        //         }
        //     }

        //     friends.push(newFriend);

        //     response.json(friends[index]);
        // }
    });
}