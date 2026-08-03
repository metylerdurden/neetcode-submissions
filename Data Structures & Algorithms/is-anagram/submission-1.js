class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        const count=new Array(26).fill(0);
        //create a frequency array count 26 and intialized to 0
        for(let i=0;i<s.length;i++){
            count[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
            count[t.charCodeAt(i)-'a'.charCodeAt(0)]--;

            
        }
        return count.every((val) => val ===0);
    }
}
