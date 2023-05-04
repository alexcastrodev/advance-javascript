class SkipListNode {
    constructor(value) {
        this.value = value
        this.foward = null
    }
}

class SkipList {
    constructor() {
        this.head = {
            level: 0
        }
        this.nodes = [new SkipListNode(null)]
    }

    insert(value) {
        let node = this.nodes[this.head.level]
        let i = 0
        
        while (node.foward !== null) {
            i += 1
            node = node.foward
        }
        node.foward = new SkipListNode(value)
    }
}

export default SkipList
export { SkipListNode }