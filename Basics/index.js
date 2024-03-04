require('dotenv').config()
const express = require('express')
const app = express()
const Port = 4000

const githubData = {
    "login": "shudhanshu7324",
    "id": 83982549,
    "node_id": "MDQ6VXNlcjgzOTgyNTQ5",
    "avatar_url": "https://avatars.githubusercontent.com/u/83982549?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shudhanshu7324",
    "html_url": "https://github.com/shudhanshu7324",
    "followers_url": "https://api.github.com/users/shudhanshu7324/followers",
    "following_url": "https://api.github.com/users/shudhanshu7324/following{/other_user}",
    "gists_url": "https://api.github.com/users/shudhanshu7324/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shudhanshu7324/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shudhanshu7324/subscriptions",
    "organizations_url": "https://api.github.com/users/shudhanshu7324/orgs",
    "repos_url": "https://api.github.com/users/shudhanshu7324/repos",
    "events_url": "https://api.github.com/users/shudhanshu7324/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shudhanshu7324/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Shudhanshu Shree",
    "company": null,
    "blog": "https://www.linkedin.com/in/shudhanshu-shree-491b97204/",
    "location": "Chandigarh",
    "email": null,
    "hireable": null,
    "bio": "👋 Hi, I’m Shudhanshu\r\n- 👀 I’m interested in Programming, Web Development and Open Source Contribution.\r\n- 🌱 I’m currently learning Data Structures and Algo.",
    "twitter_username": null,
    "public_repos": 26,
    "public_gists": 0,
    "followers": 2,
    "following": 4,
    "created_at": "2021-05-10T19:34:43Z",
    "updated_at": "2024-02-11T12:44:21Z"
  }

app.get('/', (request,response) => {
    response.send("Hello World")
})

app.get('/login', (request,response) => {
    response.send("Login to Page")
})

app.get('/github',(request,response) => {
    response.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port ${process.env.PORT}`);
})