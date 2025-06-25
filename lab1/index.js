//spread and rest operator 
const arr1=[1,4,234,53,3,4]
const arr2=[34,2,432,234,24]


//spreaded operator (...)
console.log("array 1",arr1)
console.log("spreaded element : ", ...arr2)

//merging two 
const mergedarr=[...arr1,...arr2]
console.log("merged array :",mergedarr)

//rest operatotr - multiple value lai add garera array banauxa 
const addNumber=(...values)=>{
    let sum=0;
    values.forEach(
        (ele,index)=>{
            sum=sum+ele
        }
    )
    return sum
}
const result = addNumber(2423,534,623451)
console.log("result :",result)

const vegetable =["tomato","potato","brinjal","onion","carrot"]
const newVegetable = vegetable.map(
    (ele,index)=>{
        return ele.toUpperCase()
    }
)
console.log("new vegetables : ",newVegetable)

let student ={
    name:"ravi",
    age:22,
    marks:80
}

//accessing objects key value
//1.dot notaiton
console.log("name :",student.name)
//2.bracket notaiton
console.log("marks:",student["marks"])
//adding new key value pair
student["address"]="kathmandu"
console.log("student:",student)

//updating key value pair
student["age"]=43
console.log("updated age:",student.age)

//deleting key value pair
delete student["address"]
console.log("after deletion :",student)

//conveting objects to array 
const key =Object.keys(student)
console.log("keys: ",key)
const values =Object.values(student)
console.log("Value :",values)
const entries=Object.entries(student)
console.log("entries :",entries)

entries.forEach(
    ({key,value})=>{
        console.log("entries key",key,"value:",value)
    }
)
