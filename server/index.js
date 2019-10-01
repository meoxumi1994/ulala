const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fs = require("fs");

mongoose.connect("mongodb://localhost/ulala");
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(3333, () =>
    console.log("ulala listening on port 3333!")
);
const io = require("socket.io").listen(server);

io.on("connection", socket => {
    const use_socket = path => {
        if (path.includes(".js")) {
            const mdl = require(path);
            for (let method in mdl) {
                socket_url = path.slice(2, -3) + "/" + method
                console.log("socket_url = " + socket_url)
                socket.on(socket_url, action => {
                    let _id = undefined;
                    if (action["x-ulala-token"]) {
                        try {
                            const decode = jwt.verify(
                                action["x-ulala-token"],
                                process.env.USER_SECRET_KEY
                            );
                            _id = decode._id;
                        } catch (err) {
                        }
                    }
                    delete action["x-ulala-token"];

                    console.log(action)

                    mdl[method](action.data, socket, io, _id)
                        .then(() => {
                            const { actions_after_finish } = action;
                            if(actions_after_finish){
                                action_after_finish.map(ac => {
                                    socket.emit("action", ac);
                                });
                            }
                        })
                        .catch(err => {
                            console.error(action.type);
                            console.error(err);
                            socket.emit("action", {
                                type:
                                    "client/" +
                                    action.type.substr(7, action.type.length),
                                error: err
                            });
                        });
                });
            }
        } else {
            const folder = fs.readdirSync(path);
            folder.map(file => {
                use_socket(path + "/" + file);
            });
        }
    };

    use_socket("./socket");
});
