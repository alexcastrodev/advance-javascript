import {CharClassType, Constants, PatternType} from "./constants.ts"
import { TreePattern } from "./interfaces.ts"

class Compile {
    private index_pattern = 0;
    private index_compile = 0;
    private pattern: string;
    private tree: TreePattern[] = [];
  
    constructor(pattern: string) {
      this.pattern = pattern;
    }
  
    private isNotEnd() {
      return this.index_pattern < this.pattern.length;
    }
  
    compile() {
      while (
        this.isNotEnd() &&
        this.index_compile < Constants.MAX_REGEXP_OBJECTS
      ) {
        const patternChar = this.pattern[this.index_pattern];
  
        switch (patternChar) {
          case CharClassType.BEGIN: {
            this.tree[this.index_compile] = { type: PatternType.BEGIN };
            break;
          }
          default: {
            this.tree[this.index_compile] = { type: PatternType.UNUSED };
            break;
          }
        }
  
        this.index_pattern++;
        this.index_compile++;
      }
  
      if (this.index_compile >= Constants.MAX_REGEXP_OBJECTS) {
        throw new Error('Maximum number of regular expression objects exceeded.');
      }
    }
    getTree() {
      return this.tree;
    }
  }
  
export default Compile;