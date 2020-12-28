export class NumberCollection{
  constructor(public data: number[]){}

  get length(){
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean{
    return this.data[rightIndex] < this.data[leftIndex]
  }

  swap(leftIndex: number, rightIndex: number): void{
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}