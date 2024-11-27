/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    // obstacles remain same pos
    // stones and empty spaces will change
    
    /*
        Step 1: Process the moves horizontally
        Step 2: Rearrange the rows to cols 
    */
    
    const rows = boxGrid.length;
    const cols = boxGrid[0].length;
    const ans = new Array(cols).fill().map(() => new Array(rows).fill(0));
    
    // Step 1: Process the moves horizontally
    for (let row of boxGrid) {
        // Two pointers
        let l = cols - 2, r = cols - 1;            
        
        while (l >= 0) {
            // Scenario #1
            if (row[r] !== '.') {
                // position r is obstacle or stone
                r--;
                l = r - 1;
            } else {
                // position r is empty space
                if (row[l] === '.') {
                    // position l is empty space
                    l--;
                } else if (row[l] === '*') {
                    // position l is obstacle
                    r = l;
                    l--;
                } else {
                    // position l is stone
                    row[r] = '#';
                    row[l] = '.';
                    r--;
                    l--;
                }

            }            
        }
        
        // rotate each row using two pointers
        // ex1: [ # , * , . , . , . , . , # ]
        //                        l   
        //                            r 
        

        /* Capture all scenarios
           If row[r] = obstacle or stone, then r-- and l = r - 1
           
           If row[r] = empty space, 
              then keep decrementing l until row[l] = stone or obstacle
            
             -if row[l] = stone, 
               row[r] = # (stone falls to position r)
               row[l] = '.' (empty space replaces stone)
               r = r - 1
               l = l - 1
              
             -if row[l] = obstacle, 
               r = l,
               l = l - 1
             
             -if row[l] = empty space, then
               l = l - 1       
        
         
            Convert rows to cols
            1 x 3 -> 3 x 1
            [[#,.,#]] -> [[.], [#], [#]]
            # row 
            row[0] -> row'[0][0]
            row[1] -> row'[1][0]
            row[2] -> row'[2][0]
            

        */
    }
    // console.log(boxGrid)

    // Step #2: Process ans
    for (let r = 0; r < rows; r++) {
       for (let c = 0; c < cols; c++) {
            // ...processing origRow to ans
            ans[c][rows - (r + 1)] = boxGrid[r][c];

            // ans[0][0] = box[0][0] = '.'
            // ans[1][0] = box[0][1] = '#'
            // ans[2][0] = box[0][2] = '#'
       }
    }
    // console.log(ans)
    
    return ans;
};