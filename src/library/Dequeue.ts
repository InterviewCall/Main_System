class Dequeue<T> {
    private items: T[] = [];

    pushBack(item: T) {
        this.items.push(item);
    }

    pushFront(item: T) {
        this.items.unshift(item);
    }

    popBack() {
        return this.items.pop();
    }

    popFront() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

export default Dequeue;