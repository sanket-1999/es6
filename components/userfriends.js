export function userfriends ( username, ...names) {

document.write("User :" +username+"<br>");


document.write(" Friends :");
for (let i=0 ; i < names.length ; i++)
{
    document.write( names[i]+ " ");
}

}

 //userfriends( "George", "Riya", "Pooja", "Priyanka", "Raj", "Neha", "Cherese");

 