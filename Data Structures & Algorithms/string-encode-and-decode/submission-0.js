class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length ===0) return '';
        // if the input list is empty,return an empty string
        let sizes=[],parts=[];

        for (let s of strs){
            sizes.push(s.length);
        }
        for(let sz of sizes){
            parts.push(String(sz),',');
        }

        parts.push('#', ...strs);
        return parts.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length ===0) return [];
        let sizes=[],res=[],i=0;

        while(str[i] !== '#'){
            let j=i;
            while(str[j] !== ',' && str[j] !== '#'){
                j++;
            }
            sizes.push(parseInt(str.substring(i,j),10));
            i=j+1;
        }
        i++;

        for (let sz of sizes){
            res.push(str.substring(i,i+sz));
            i+=sz;
        }
        return res;
    }
}