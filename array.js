let employee=[  {
                 id:101,
                 name:"test1",
                  age:20,
                  salary:2000,
                },
                {
                  id:102,
                   name:"test2",
                   age:21,
                  salary:2000,
    
  },
{
    id:103,
    name:"test3",
    age:22,
    salary:3000,
},
{
    id:104,
    name:"test4",
    age:23,
    salary:4000,
},
{
  id:105,
    name:"test5",
    age:24,
    salary:5000,
},{
id:106,
name:"test6",
age:24,
salary:5000,
}
]
 
//1 to insert new employee
employee.push( {name:"test6"})
console.log(employee)

//2 to display employee list
console.log(employee)

//3 to remove specific id
employee.splice((2,2))
console.log(employee)

   // 4 update the data
   let  newarray = employee.map(function(curr,index,arr){
    if( curr.id ===104){
      curr.name="javascript"
      return curr
    }
    else{
      return curr;
    }  
   }
   )
   console.log(" after changing name employee=",newarray)

//5 finding the employee who has mix salary
    let foundemployee = employee.filter(function(curr,index,arr){
          if(curr.salary > 4000){
            return curr.id
          }
    })
    console.log(foundemployee)

// 6 finding min salary
let listemployee = employee.filter(function(curr,index,arr){
  if(curr.salary < 4000){
    return curr.id
  }
})
console.log(listemployee)