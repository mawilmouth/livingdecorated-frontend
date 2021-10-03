type LoopWithLimitCallbackType = (item: any, index: number) => void;
type ExitConditionCallback = (item: any, index: number) => boolean;

const loopWithBreak = <ItemType>(
  arr: ItemType[],
  callback: LoopWithLimitCallbackType,
  exitConditionCallback: ExitConditionCallback
): void => {
  for (let i: number = 0; i < arr.length; i++) {
    const currentItem: ItemType = arr[i];

    if (exitConditionCallback(currentItem, i)) break;
    
    callback(currentItem, i);
  }
}

export default loopWithBreak;