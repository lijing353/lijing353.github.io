document.onmousemove=function (ev)
{
    var div=document.getElementById('island1');

    div.style.left=ev.clientX+'px';
    div.style.top=ev.clientY+'px';
};

