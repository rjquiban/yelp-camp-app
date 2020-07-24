const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

/***** ROUTES *****/
app.get("/", (req, res) => {
    res.render("landing");
});

let campgrounds = [
    {name: "Ocean Shores", image: "https://pixabay.com/get/53e2dc4b4d54a514f1dc84609620367d1c3ed9e04e507440702b72d59045c7_340.jpg"},
    {name: "Lake Chelan", image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e507440702b72d59045c7_340.jpg"},
    {name: "Fort Flagler", image: "https://pixabay.com/get/57e1dd4a4350a514f1dc84609620367d1c3ed9e04e507440702b72d59045c7_340.jpg"},
    {name: "Ocean Shores", image: "https://pixabay.com/get/53e2dc4b4d54a514f1dc84609620367d1c3ed9e04e507440702b72d59045c7_340.jpg"},
    {name: "Lake Chelan", image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e507440702b72d59045c7_340.jpg"},
    {name: "Fort Flagler", image: "https://pixabay.com/get/57e1dd4a4350a514f1dc84609620367d1c3ed9e04e507440702b72d59045c7_340.jpg"},
    {name: "Ocean Shores", image: "https://pixabay.com/get/53e2dc4b4d54a514f1dc84609620367d1c3ed9e04e507440702b72d59045c7_340.jpg"},
    {name: "Lake Chelan", image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e507440702b72d59045c7_340.jpg"},
    {name: "Fort Flagler", image: "https://pixabay.com/get/57e1dd4a4350a514f1dc84609620367d1c3ed9e04e507440702b72d59045c7_340.jpg"}
];

app.get("/campgrounds", (req, res) => {
    res.render("campgrounds", {campgrounds: campgrounds});
})

app.post("/campgrounds", (req, res) => {    //naming convention where new ____ has same, but make it POST
    let name = req.body.name;   //this uses body parser
    let image = req.body.image; //this uses body parser
    let newCampground = {
        name: name,
        image: image
    };

    campgrounds.push(newCampground);

    res.redirect("/campgrounds");   //this redirect defaults to app.get
});

app.get("/campgrounds/new", (req, res) => {     //RESTful naming convention
    res.render("new.ejs");
});

app.listen(3000, () => {
    console.log("Starting the YelpCamp server on port 3000");
});