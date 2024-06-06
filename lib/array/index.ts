export function gtValue<T> (value: T[]): { [key: number]: T } {
    const map = new Map<number, T>()
    value.forEach((item, index) => {
        map.set(index, item)
    })
    return Object.fromEntries(map.entries())
}

// export function groupBy(target:Array<Record<any, any>>, key) {
//
// }
