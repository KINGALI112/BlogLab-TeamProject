const router = require("express").Router();
// api required routes

const apiRoutes = require("./api");

const indexRoutes = require("./index-routes");
const loginRoutes = require("./login-routes");
const postRoutes = require("./post-routes");

const signupRoutes = require("./signup-routes");

const logoutRoutes = require("./logout-routes");

const dashboardRoutes = require("./dashboard-routes");

const editRoutes = require("./edit-routes");


/// useEach of the routes files in the controllers folder

