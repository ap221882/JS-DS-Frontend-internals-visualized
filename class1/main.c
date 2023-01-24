#include <stdio.h>

//~* Function returning the sum of two numbers
int sum(int a, int b)
{
  return a + b;
}

int main()
{
  //~^ main's Execution Context(stackframe)
  int a, b;
  a = 3;
  b = 4;
  printf("Hello, world!\n");
  //~^ sum's Execution Context() will be created in the next line
  sum(8, b);
}

// Debug from the breakpoints and observe