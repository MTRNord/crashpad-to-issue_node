var GitHubApi = require("github");
var CLIENT_ID = process.env.CLIENT_ID
var CLIENT_SECRET = process.env.CLIENT_SECRET
var USERNAME = process.env.USERNAME
var PASSWORD = process.env.PASSWORD
var github = new GitHubApi({
    // optional
    debug: true,
    headers: {
        "user-agent": "crashpad-to-issue_node" // GitHub is happy with a unique user agent
    }
});
var heroku_url = "http://localhost"
// basic
github.authenticate({
    type: "basic",
    username: USERNAME,
    password: PASSWORD
});
github.authorization.getOrCreateAuthorizationForApp({
    scopes: ["public_repo"],
    client_secret: CLIENT_SECRET,
    client_id: CLIENT_ID,
    note: "An Heroku compatible crashpad server that makes a new issue on error.",
    note_url: heroku_url
});
github.issues.create({
  user: "MTRNord",
  repo: "ls-vertretungsplan-crashlogs",
  title: "CrashTest",
  body: "Test",
  labels: [
    "bug"
  ]
});
