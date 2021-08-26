#include <iostream>
#include <string>
using namespace std;

void printFB(string output)
{
    cout << output << endl;
}

void fizzBuzz()
{
    for(int i = 1; i < 101; i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            printFB("FizzBuzz");
        }
        else if (i % 3 == 0)
        {
            printFB("Fizz");
        }
        else if (i % 5 == 0)
        {
            printFB("Buzz");
        }
        else
        {
            printFB(to_string(i));
        }
    }
}

int main()
{
    fizzBuzz();
    return 0;
}