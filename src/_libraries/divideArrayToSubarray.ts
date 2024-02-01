export default function divideArrayToSubArray<T>({ array, subArrayCount }: { array: T[], subArrayCount: number }): T[][] {
  const itemsPerSubArray = Math.floor(array?.length / subArrayCount)

  let subArrays: T[][] = []
  let indexStart = 0

  for (let i = 0; i < subArrayCount; i++) {
    let indexEnd = indexStart + itemsPerSubArray

    if (i === subArrayCount - 1) {
      subArrays = [...subArrays, array.slice(indexStart)]
      break
    }

    subArrays = [...subArrays, array.slice(indexStart, indexEnd)]
    indexStart += itemsPerSubArray
  }

  return subArrays
}