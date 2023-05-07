class SkipNode {
    constructor(value, level) {
      this.value = value;
      this.forward = new Array(level + 1);
    }
  }
  
  class SkipList {
    constructor() {
      this.head = new SkipNode(-1, 0);
      this.level = 0;
    }
  
    randomLevel() {
      let level = 0;
      while (Math.random() < 0.5 && level < 16) {
        level++;
      }
      return level;
    }
  
    insert(value) {
        let level = this.randomLevel();
        const newNode = new SkipNode(value, level);
      
        let current = this.head;
        const update = new Array(level + 1);
      
        for (let i = this.level; i >= 0; i--) {
          while (current.forward[i] && current.forward[i].value < value) {
            current = current.forward[i];
          }
          update[i] = current;
        }
      
        for (let i = 0; i <= level; i++) {
          if (update[i]) {
            newNode.forward[i] = update[i].forward[i];
            update[i].forward[i] = newNode;
          } else {
            newNode.forward[i] = null;
            this.head.forward[i] = newNode;
          }
        }
      
        if (level > this.level) {
          this.level = level;
        }
      }
  
    search(value) {
      let current = this.head;
      for (let i = this.level; i >= 0; i--) {
        while (current.forward[i] && current.forward[i].value < value) {
          current = current.forward[i];
        }
      }
      current = current.forward[0];
      if (current && current.value === value) {
        return current;
      }
      return null;
    }
  
    delete(value) {
      let current = this.head;
      const update = new Array(this.level + 1);
  
      for (let i = this.level; i >= 0; i--) {
        while (current.forward[i] && current.forward[i].value < value) {
          current = current.forward[i];
        }
        update[i] = current;
      }
  
      current = current.forward[0];
  
      if (current && current.value === value) {
        for (let i = 0; i <= this.level; i++) {
          if (update[i].forward[i] !== current) {
            break;
          }
          update[i].forward[i] = current.forward[i];
        }
  
        while (this.level > 0 && this.head.forward[this.level] === null) {
          this.level--;
        }
        return true;
      }
      return false;
    }
  
    print() {
      for (let i = this.level; i >= 0; i--) {
        let current = this.head.forward[i];
        let levelStr = `Level ${i}: `;
        while (current) {
          levelStr += `${current.value} `;
          current = current.forward[i];
        }
        console.log(levelStr);
      }
    }
}

export default SkipList;