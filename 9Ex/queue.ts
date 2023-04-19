interface iQueue<T>{
    enqueue(item: T):void
    dequeue():T | undefined
    size():number
}
class Queue<T> implements iQueue<T> {
    private storage: T[] = [];
  
    constructor(private capacity: number = Infinity) {}
  
    enqueue(item: T): void {
      if (this.size() === this.capacity) {
        throw Error("Queue has reached max capacity, you cannot add more items");
      }
      this.storage.push(item);
    }
    dequeue(): T | undefined {
      return this.storage.shift();
    }
    size(): number {
      return this.storage.length;
    }
  }
  
  const queue = new Queue<string>();
  
  queue.enqueue("A");
  queue.enqueue("B");
  
  console.log(queue.size());   
  console.log(queue.dequeue());
  console.log(queue.size());   
  console.log(queue.dequeue());
  
  const queue = new Queue<number>();
  
  queue.enqueue("A");
  queue.enqueue("B");
  
  console.log(queue.size());   
  console.log(queue.dequeue());
  console.log(queue.size());   
  console.log(queue.dequeue());
  