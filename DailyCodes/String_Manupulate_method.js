let new_user_name=" orginal Gangstar ";
console.log(new_user_name.length);
console.log(new_user_name.charAt(4));
console.log(new_user_name.trim( ));
console.log(new_user_name.toLowerCase());
console.log(new_user_name.toUpperCase());
console.log(new_user_name.startsWith(" "));
console.log(new_user_name.lastIndexOf(" "));

//repalce and  padding

let phoneNumber="949-395-8284";
console.log(phoneNumber.replaceAll("-",""));
console.log(phoneNumber.padStart(20,"0"));
console.log(phoneNumber.padEnd(20,"0"));

// string sliceing slice(start,end)

let FullName="Sri Krishna Devarayulu";
console.log(FullName.slice(2,10));
console.log(FullName.slice(-11));
let firstname=FullName.slice(0,FullName.indexOf(" "));
let lastname=FullName.slice(FullName.indexOf(" ")+1,);
console.log(firstname);
console.log(lastname);














