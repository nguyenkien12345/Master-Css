// const phoneNumber = "123-456-789";

// const phoneNumbers = [
//     '097.123.1234',
//     '091-303-0001',
//     '0123 123 324'
// ];

// Xoá dấu gạch ngang 
// function removeHyphens(str){
//     return str.replace(/-/g, '');
// }

// Xoá dấu gạch ngang, khoảng trắng, dấu chấm
// function sanitize(phoneNumbers){
//     return phoneNumbers.map(phoneNumber => {
//         return phoneNumber.replace(/[. -]/g,'');
//     });
// }

// console.log(removeHyphens(phoneNumber))
// console.log(sanitize(phoneNumbers))

const phone = "0981284476"

const phoneNumberRegex = /^0[0-9]{9}$/

console.log(phoneNumberRegex.test(phone))