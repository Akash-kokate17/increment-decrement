const p = document.getElementById
('count')

let c = 0;
function increment ()
{
    c=c+1;
    p.textContent=c;
    if(c>20){
        document.write('not valid number')
    }
}

function decrement ()
{
    c=c-1;
    p.textContent=c;
    if(c<-20){
        document.write('not valid  number')
    }
}

function reset ()
{
    c=0;
    p.textContent=c;
}





