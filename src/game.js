/*
const board=[
    ["O",0,"O"],
    [0,"O",0],
    ["O",0,0] ]

    */
// for checking X winning
const checkForWinnerAsX = (board) =>
{
    const r=board.length;
    const c=board[0].length;

    //row checking
    for(let i=0;i<r;i++) 
    {
        let win=true;
        for (let j=0;j<c;j++) 
        {
            if(board[i][j]==="O" || board[i][j]===0)
            {
                win=false;
                break;
            }
        }
        if(win===true)
            return "row "+i;
    }

    //column checking
    for(let i=0;i<r;i++) 
    {
        let win=true;
        for (let j=0;j<c;j++) 
        {
            if(board[j][i]==="O" || board[j][i]===0)
            {
                win=false;
                break;
            }
        }
        if(win===true)
            return "col "+i;
    }

    //right diagnol
    let i=0;
    let j=0;
    let win=true;
    while(i<=2)
    {
        if(board[i][j]==="O" || board[i][j]===0)
        {
            win=false;
            break;
        }
        i++;
        j++;
    }
    if(win===true)
        return "right";

    //left digonal
    i=0;
    j=2;
    win=true;
    while(i<=2)
    {
        if(board[i][j]==="O" || board[i][j]===0)
        {
            win=false;
            break;
        }
        i++;
        j--;
    }
    if(win===true)
        return "left";
    return "no";
}

// for checking O winning
const checkForWinnerAsO = (board) =>
{
    const r=board.length;
    const c=board[0].length;

    //row checking
    for(let i=0;i<r;i++) 
    {
        let win=true;
        for (let j=0;j<c;j++) 
        {
            if(board[i][j]==="X" || board[i][j]===0)
            {
                win=false;
                break;
            }
        }
        if(win===true)
            return "row "+i;
    }

    //column checking
    for(let i=0;i<r;i++) 
    {
        let win=true;
        for (let j=0;j<c;j++) 
        {
            if(board[j][i]==="X" || board[j][i]===0)
            {
                win=false;
                break;
            }
        }
        if(win===true)
            return "col "+i;
    }

    //right diagnol
    let i=0;
    let j=0;
    let win=true;
    while(i<=2)
    {
        if(board[i][j]==="X" || board[i][j]===0)
        {
            win=false;
            break;
        }
        i++;
        j++;
    }
    if(win===true)
        return "right";

    //left digonal
    i=0;
    j=2;
    win=true;
    while(i<=2)
    {
        if(board[i][j]==="X" || board[i][j]===0)
        {
            win=false;
            break;
        }
        i++;
        j--;
    }
    if(win===true)
        return "left";
    return "no";
}

export {checkForWinnerAsO,checkForWinnerAsX};