type Item = { [key: string]: string }

const ROW_SIZE = 6

export const getGridData = (data: Item[]) => {
  let stack: Item[] = []

  return data.reduce((accum: Item[][], current: Item) => {
    stack.push(current)

    if (stack.length >= ROW_SIZE) {
      accum.push(stack)
      stack = []
    }

    return accum
  }, [])
}
