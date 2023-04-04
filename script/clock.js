setInterval(getCurrentDate, 1000)

function getCurrentDate()
{
    var combined = "";
    var hour = "";
    var minute = "";
    var second = "";
    
    var now = new Date();

    hour = now.getHours();
    minute = now.getMinutes();
    second = now.getSeconds();

    if(hour < 10)
    {
        hour = "0" + hour
    }


    if(minute < 10)
    {
        minute = "0" + minute
    }

    if(second < 10)
    {
        second = "0" + second
    }

    document.getElementById("combined").innerHTML = hour + ":" + minute + ":" + second


}
