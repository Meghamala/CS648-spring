var int1, int2;

int1 = window.prompt("Enter the first integer");
int1 = parseInt(int1);
int2 = window.prompt("Enter the second integer");
int2 = parseInt(int2);

if( int1 == int2){
    document.write("Both integers are equal");
}
else {
if( int1 < int2 ){
    document.write("Interger "+ int2 + " is larger");
}
else document.write("Interger "+ int1 + " is larger");
}