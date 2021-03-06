export const range = (from: number, to?: number, step = 1): Array<number> => {
    if (!to) {
        ;[from, to] = [0, from]
    }
    const size = Math.floor((to - from) / step)
    return [...Array(size).keys()].map((k) => from + k * step)
}
