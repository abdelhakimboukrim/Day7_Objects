profile={name:"ahmed ",age:19,email: "gmail", isactive: true }
function datavalidation(prof){
let v=false
 v= prof.name.length>0 && prof.age>0 &&(prof.isactive == true || prof.isactive== false )
return v; }

console.log(datavalidation(profile))
    

