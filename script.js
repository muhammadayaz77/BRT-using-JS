function com(){
    let km = document.querySelector(".km").value;
km = Number(km);
if(km<5)
{
    document.querySelector(".para").innerHTML = "RS : 15";
}
else if(km>=5.1 && km<10)
{
    document.querySelector(".para").innerHTML = "RS : 20";
}
else if(km>=10.1 && km<15)
{
    document.querySelector(".para").innerHTML = "RS : 25";
}
else if(km>=15.1 && km<20)
{
    document.querySelector(".para").innerHTML = "RS : 30";
}
else if(km>=20.1 && km<25)
{
    document.querySelector(".para").innerHTML = "RS : 35";
}
else if(km>=25.1 && km<30)
{
    document.querySelector(".para").innerHTML = "RS : 40";
}
else if(km>=30.1 && km<35)
{
    document.querySelector(".para").innerHTML = "RS : 45";
}
else if(km>=35.1 && km<40)
{
    document.querySelector(".para").innerHTML = "RS : 50";
}
else if(km>40.1)
{
    document.querySelector(".para").innerHTML = "RS : 55";
}
}