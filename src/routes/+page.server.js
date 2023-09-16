export const actions = {
  default: () => {
    return {success: true}
  }
}

export const load = async () => {
  return {
    time: new Promise((resolve) => {
      setTimeout(() => resolve(Date.now()), 300)
    })
  }
}
