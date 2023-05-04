import { describe, it } from 'node:test'
import { deepEqual } from 'node:assert'
import SkipList, { SkipListNode } from './skiplist.js'

describe('skiplist', () => {
    it('Should create Skiplist instance', () => {
        const skiplist = new SkipList()
        const expected = new SkipListNode(null, 1)
        deepEqual(skiplist.nodes[0], expected)
    })
    it('Should create Skiplist node', () => {
        const skiplist = new SkipList()
        skiplist.insert(1)
        deepEqual(skiplist.nodes[0].foward.value, 1)

        skiplist.insert(2)
        skiplist.insert(4)
        console.log(JSON.stringify(skiplist))
        deepEqual(skiplist.nodes[0].foward.foward.value, 2)
        deepEqual(skiplist.nodes[0].foward.foward.foward.value, 4)
        deepEqual(skiplist.nodes[0].foward.foward.foward.foward, null) // SENTINEL
    })
})