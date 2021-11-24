using System;
class class1
{
public void incr(ref int i)
{
i=i+5;
Console.WriteLine(i);
}
}
class class2
{
    static void Main()
{
class c1= new class1();
int j=100;
c1.incr(ref j);
Console.WriteLine(i);
}
}
