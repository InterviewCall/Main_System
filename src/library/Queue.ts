class Queue<T> {
    private items: T[] = [];

    push(item: T) {
        this.items.push(item);
    }

    pop() {
        return this.items.shift();
    }

    top() {
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

export default Queue;