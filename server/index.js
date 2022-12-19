let express = require(`express`)
let cors = require(`cors`)

let app = express()

app.use(express.json())
app.use(cors())

let database = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"]

app.get (`/api/users`, (req, res) => {
    res.status(200).send(database)
})

app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });

app.listen(4000, console.log(`The server is running at 4000`))