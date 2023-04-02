export class ClientError {
  public status: number
  public message: string
  constructor(status: number, message: string) {
    this.status = status
    this.message = message
  }
}

export class RouteNotFoundError extends ClientError {
  constructor(route: string) {
    super(404, `route ${route} not found`)
  }
}

export class VideoNotFoundError extends ClientError {
  constructor(videoID: string) {
    super(404, `video id: ${videoID} was not found`)
  }
}

export class UserNotLoggedError extends ClientError {
  constructor() {
    super(404, `route  not found`)
  }
}
