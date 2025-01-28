const arr1=[
    "Sivanaidu",
    "Nagamani",
    "Radha Krishna"
]
const arr2=[
    "gopala krishna",
    "mohan",
    "Sivanaidu"
]

function mergeNames(a,b) {
    const merge=[...a,...b];
    const uniqe=[...new Set(merge)];
    return uniqe;
}
console.log(mergeNames(arr1,arr2))  

