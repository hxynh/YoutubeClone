export function FormatTimeElapsed (postedDate){
    var dateNow = Date.now();
    var timeDiff = (dateNow - postedDate) /1000 // Difference in seconds

    if (timeDiff/86400 > 1) //Days/Years:
    {
        if ((timeDiff/86400) >= 365)
            return (parseInt((timeDiff/86400)/365)+" years");
        else if ((timeDiff/86400)>30)        
            return (parseInt((timeDiff/86400)/30)+" months");
        return (parseInt(timeDiff/86400)+" days");
    }
    else if (timeDiff/3600 > 1)//Hours
    {
        return (parseInt(timeDiff/3600)+" hrs");
    }
    else if(timeDiff/60 > 1) //Minutes
    {
        return (parseInt(timeDiff/60)+" mins");
    }
    return((parseInt(timeDiff)+" secs")); //Seconds
}