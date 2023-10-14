class Queue{
    constructor(){
        this.queue = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(elem){
        this.queue[this.tail] = elem;
        this.tail++;
    }
    
    dequeue(){
        let item = this.queue[this.head];
        delete this.queue[this.head];
        this.head++;
        return item;
    }

    front(){
        return this.queue[this.head];
    }

    isEmpty(){
        return this.length === 0;
    }

    size(){
        return this.tail - this.head;
    }

    print(){
        let k = this.head;
        while(k < this.tail){
            //console.log(this.queue[k]);
            process.stdout.write(this.queue[k] + " ")
            k++;
        }
        console.log("");
    }
}
const queue  = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
console.log("Front element: " + queue.front());
queue.dequeue();
queue.print();
console.log("Queue size: " + queue.size());