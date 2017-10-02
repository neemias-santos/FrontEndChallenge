# Part 1

1. Using responsive design techniques, create a simple webpage that implements the flexible layout described in the 3 attached screenshots (1024.png, 800.png, 320.png).
2. Do not use any external CSS libraries.
3. Add some JavaScript to your webpage that displays the width and height for each section whenever the window is resized. See dimensions.png for an example.

Using external libraries (eg: JQuery) is fine here.

# Part 2

1. Write a JavaScript function that takes a variable number of arguments and prints each one on a new line.

       print_me('foo');
       // foo

       print_me('foo', 'bar');
       // foo
       // bar

2. Expand the function so that when an argument is an array, each item in the array is also printed on a new line.

       print_me('foo', ['bar', 'baz']);
       //  foo
       //  bar
       //  baz

3. Expand your function to be recursive, like this:

       print_me('foo')('bar');
       //  foo
       //  bar
