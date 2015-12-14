//simple function to call alert()
function sayHello()
{
	alert( 'Hello!' );
}

//function with arguments
function sayHelloWithName( myName )
{
	if( "" != myName )
		alert( 'Hello ' + myName + '!' );
	else
		alert( 'Please enter your name!' );
}

//function returns some value when it is called
function concatenate( firstname, lastname )
{
	return firstname + ' ' + lastname;	
}

//function having nested function inside it
function nestedFunction( a, b )
{
	function square( x )
	{
		return x * x;
	}

	return Math.sqrt( square( a ) + square( b ) );
}

//calling constructor function
var multiplyFunction = new Function( "a", "b", "return a * b;" );

function constructorFunction( a, b )
{
	return multiplyFunction( a, b );
}

//function literal in javascript
var func = function( a, b ){ return a + b };

function callFunctoinLiteral( a, b )
{
	return func( parseInt( a ), parseInt( b ) );
}