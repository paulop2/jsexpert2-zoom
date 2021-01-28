class Business {
    constructor({ room, media, view, socketBuilder }) {
        this.room = room
        this.media = media
        this.view = view

        this.socketBuilder = socketBuilder
            .setOnUserConnected(this.setOnUserConnected())
            .setOnUserDisconnected(this.setOnUserDisconnected())
            .build()
        this.socketBuilder.emit('join-room', this.room, 'teste01')
        this.currentStream = {}
    }

    static initialize(deps) {
        const instance = new Business(deps)
        return instance._init()
    }

    async _init() {
        this.currentStream = this.media.getCamera()
        this.addVideoStream('test01')
    }

    addVideoStream(userId, stram = this.currentStream) {
        this.view.renderVideo({
            userId,
            stream,
            isCurrentId
        })
    }

    onUserConnected = function () {
        return userId => {
            console.log('user connected!', userId)
        }
    }

    onUserDisconnected = function () {
        return userId => {
            console.log('user disconnected!', userId)
        }
    }
}