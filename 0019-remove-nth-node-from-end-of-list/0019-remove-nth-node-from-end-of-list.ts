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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let fast = head;
    let slow = head;
    let temp = null;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast !== null) {
        temp = slow
        fast = fast.next;
        slow = slow.next;
    }
    temp ? temp.next= slow.next : head = slow.next
    return head
};