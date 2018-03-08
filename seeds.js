var mongoose = require("mongoose");
var Restaurant = require("./models/restaurant");
var Comment     = require("./models/comment");


var data = [
    {
        name: "DLUX",
        image:"https://modamadison.files.wordpress.com/2013/02/dlux_bar.jpg",
        description: "sick restaurant"
    },
    {
        name: "Roast",
        image: "https://static1.squarespace.com/static/55e74c4fe4b05853494365c3/55e8d129e4b0ffe0b526c2ef/55e8d40ee4b0c3152e229b23/1452543633120/Roast+image+3.jpg",
        description: "dope restaurant"
    },
    {
        name: "Glaze",
        image: "http://bloximages.chicago2.vip.townnews.com/host.madison.com/content/tncms/assets/v3/editorial/b/a2/ba25b5fa-b535-5803-8cc7-efc5857b758b/57a39a5d70cb9.image.jpg?resize=1200%2C888",
        description: "overrated restaurant"
    }
]

function seedDB() {
    // Remove all restaurants
    Restaurant.remove({}, function(err) {
        if(err) {
            console.log(err)
            
        }
        console.log("removed");
    });
    // Add some restaurants
    // data.forEach(function(seed) {
    //     Restaurant.create(seed, function(err, restaurant) {
    //         if(err) {
    //             console.log(err);
    //         } else {
    //             console.log("created one");
    //             Comment.create(
    //                 {
    //                     text: "This place is tighhhhhtttt",
    //                     author: "Nick"
                        
    //                 }, function(err, comment) {
    //                     if(err) {
    //                         console.log(err);
    //                     } else {
    //                         restaurant.comments.push(comment);
    //                         restaurant.save();
    //                         console.log("created comment");
    //                     }
    //                 });
    //         }
    //     });
    // });
}

module.exports = seedDB;
//Comment
