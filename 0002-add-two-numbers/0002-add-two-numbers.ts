/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0
    let dummyNode = new ListNode(0)
    let current = dummyNode

    while (l1 !== null || l2 !== null || carry) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0

        let sum = (val1 + val2 + carry) 
        carry = Math.floor(sum / 10)

        //  current.val = sum
        current.next = new ListNode(sum % 10)
        current = current.next
        if(l1) l1=l1.next
        if(l2) l2=l2.next
    }
    return dummyNode.next
};