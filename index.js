const WebSocket = require('ws')

const server = new WebSocket.Server({
    port: 443
}, () => {
    console.log('server started at port 443')
})

const users = new Set()

const sendEnterRoom = (message) => {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message))
    })
}

const sendStartGame = (message) => {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message))
    })
}

const sendQnDone = (message) => {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message))
    })
}

const sendCloseRoom = (message) => {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message))
    })
}

const sendQuestion = (message) => {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message))
    })
}

const sendTimeout = (message) => {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message))
    })
}

const sendScores = (message) => {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message))
    })
}

const sendQnCorrect = (message) => {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message))
    })
}

const sendAns = (message) => {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message))
    })
}

const sendVote = (message) => {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message))
    })
}

const sendLog = (message) => {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message))
    })
}

const sendUpScore = (message) => {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message))
    })
}

const sendKick = (message) => {
    users.forEach((user) => {
        user.ws.send(JSON.stringify(message))
    })
}

server.on('connection', (ws) => {
    const userRef = {
        ws,
    }

    users.add(userRef)

    ws.on('message', (message) => {
        const data = JSON.parse(message)
        console.log(data)
        if(data.msgType === 'joinroom') {
            try {
                console.log(`${data.username} has connected to room-${data.roomId}`)
                sendEnterRoom({
                    roomId: data.roomId,
                    username: data.username,
                    msgType: data.msgType
                })
            } catch(err) {
                console.error(err)
            }
        } else if(data.msgType === 'startgame') {
            try {
                console.log(`${data.username} has connected to room-${data.roomId}`)
                sendStartGame({
                    roomId: data.roomId,
                    msgType: data.msgType
                })
            } catch(err) {
                console.error(err)
            }
        } else if(data.msgType === 'qndone') {
            try {
                console.log(`${data.username} has connected to room-${data.roomId}`)
                sendQnDone({
                    roomId: data.roomId,
                    msgType: data.msgType,
                    numComplete: data.numComplete,
                })
            } catch(err) {
                console.error(err)
            }
        } else if(data.msgType === 'closeroom') {
            try {
                console.log(`${data.username} has connected to room-${data.roomId}`)
                sendCloseRoom({
                    roomId: data.roomId,
                    msgType: data.msgType,
                })
            } catch(err) {
                console.error(err)
            }
        } else if(data.msgType === 'questiondata') {
            try {
                console.log(`${data.username} has connected to room-${data.roomId}`)
                sendCloseRoom({
                    roomId: data.roomId,
                    msgType: data.msgType,
                    img: data.img,
                    options: data.options
                })
            } catch(err) {
                console.error(err)
            }
        } else if(data.msgType === 'timeout') {
            try {
                console.log(`${data.username} has connected to room-${data.roomId}`)
                sendTimeout({
                    roomId: data.roomId,
                    msgType: data.msgType
                })
            } catch(err) {
                console.error(err)
            }
        } else if(data.msgType === 'scores') {
            try {
                console.log(`${data.username} has connected to room-${data.roomId}`)
                sendScores({
                    roomId: data.roomId,
                    msgType: data.msgType,
                    score: data.score,
                    name: data.name
                })
            } catch(err) {
                console.error(err)
            }
        } else if(data.msgType === 'qncorrect') {
            try {
                console.log(`${data.username} has connected to room-${data.roomId}`)
                sendQnCorrect({
                    roomId: data.roomId,
                    msgType: data.msgType,
                    username: data.username
                })
            } catch(err) {
                console.error(err)
            }
        } else if(data.msgType === 'sendans') {
            try {
                console.log(`${data.username} has connected to room-${data.roomId}`)
                sendAns({
                    roomId: data.roomId,
                    msgType: data.msgType,
                    username: data.username,
                    ans: data.ans
                })
            } catch(err) {
                console.error(err)
            }
        } else if(data.msgType === 'vote') {
            try {
                console.log(`${data.username} has connected to room-${data.roomId}`)
                sendVote({
                    roomId: data.roomId,
                    msgType: data.msgType,
                    voted: data.voted
                })
            } catch(err) {
                console.error(err)
            }
        } else if(data.msgType === 'consolelog') {
            try {
                console.log(`${data.username} has connected to room-${data.roomId}`)
                sendLog({
                    roomId: data.roomId,
                    msgType: data.msgType,
                    msg: data.msg
                })
            } catch(err) {
                console.error(err)
            }
        } else if(data.msgType === 'upscore') {
            try {
                console.log(`${data.username} has connected to room-${data.roomId}`)
                sendUpScore({
                    roomId: data.roomId,
                    msgType: data.msgType,
                    name: data.name
                })
            } catch(err) {
                console.error(err)
            }
        } else if(data.msgType === 'kick') {
            try {
                console.log(`${data.username} has connected to room-${data.roomId}`)
                sendKick({
                    roomId: data.roomId,
                    msgType: data.msgType,
                    username: data.username
                })
            } catch(err) {
                console.error(err)
            }
        }
        
    })
})