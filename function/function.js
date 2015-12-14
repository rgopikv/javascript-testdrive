function sayHello()
{
	alert( 'Hello!' );
}

function sayHelloWithName( myName )
{
	if( "" != myName )
		alert( 'Hello ' + myName + '!' );
	else
		alert('Please enter your name!');
}

function concatenate( firstname, lastname )
{
	return firstname + ' ' + lastname;	
}

function nestedFunction( a, b)
{
	function square(x)
	{
		return x * x;
	}

	return Math.sqrt( square(a) + square(b) );
}