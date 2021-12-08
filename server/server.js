const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const argon2 = require("argon2");

require("dotenv").config();
const Mongodb_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3000;

let db;
MongoClient.connect(Mongodb_URL, (error, client) => {
    if (error) return console.log("MongoDB ERROR!!!");
    db = client.db("WebtoonMoa");
});

app.listen(PORT, () => {
    console.log("server on!");
});

app.use(express.static("build"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/../index.html");
});

// 회원가입
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    const hash = await argon2.hash(password);
    db.collection("User")
        .find({ email: email })
        .toArray((req, result) => {
            if (result.length !== 0) {
                res.status(403).send(
                    "<script>alert('이메일이 이미 존재합니다.');location.href='/';</script>"
                );
            } else {
                db.collection("User").insertOne(
                    { username, email, password: hash },
                    (error, client) => {
                        console.log("저장완료");
                    }
                );
                res.send(
                    "<script>alert('회원가입 완료!');location.href='/';</script>"
                );
            }
        });
});

// 로그인
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    db.collection("User")
        .find({ email: email })
        .toArray(async (req, result) => {
            if (result.length === 0) {
                res.status(403).send(
                    "<script>alert('아이디를 찾지 못했습니다.');location.href='/';</script>"
                );
            }
            if (await argon2.verify(result[0].password, password)) {
                res.send(
                    "<script>alert('로그인 성공!');location.href='/';</script>"
                );
            } else {
                res.status(403).send("패스워드가 틀립니다.");
            }
        });
});

app.get("/list", (req, res) => {});
