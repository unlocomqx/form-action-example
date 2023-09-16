export const actions = {
  default: () => {
    return {success: true}
  }
}

export const load = async () => {
  return {
    // the timeout is just to simulate a slower response
    time: new Promise((resolve) => {
      setTimeout(() => resolve(Date.now()), 200)
    })
  }
}
