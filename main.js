const employees = [
  { id: 1, name: "Ahmed", department: "Sales", salary: 8500, experience: 5, performance: 4.7, isActive: true },
  { id: 2, name: "Sara", department: "Marketing", salary: 9200, experience: 3, performance: 4.1, isActive: false },
  { id: 3, name: "Omar", department: "IT", salary: 12500, experience: 6, performance: 4.8, isActive: true },
  { id: 4, name: "Laila", department: "Sales", salary: 7800, experience: 2, performance: 3.9, isActive: true },
  { id: 5, name: "Mostafa", department: "IT", salary: 14000, experience: 8, performance: 4.9, isActive: true },
  { id: 6, name: "Heba", department: "HR", salary: 6900, experience: 4, performance: 4.3, isActive: false },
  { id: 7, name: "Khaled", department: "Marketing", salary: 10200, experience: 7, performance: 4.6, isActive: true },
  { id: 8, name: "Mona", department: "HR", salary: 8000, experience: 5, performance: 4.5, isActive: true }
];

// (performance >= 4.5) لاظهار الموظفين النشيطين فقط و اللى اداؤهم اقل من 4.5 filter
let Active_Employees=employees.filter((employe)=>employe.isActive===true && employe.performance>=4.5)
// reduce متوسط الرواتب لهؤلاء الموظفين باستخدام 
let total_reduce=Active_Employees.reduce((acc,emp1) => acc + emp1.salary,0);
let avg=total_reduce/Active_Employees.length;
console.log("متوسط المرتبات",avg);

// %لعرض اسماء الموظفين و القسم و مرتبهم الجديد بعد زيادة 10 map استخدام 
let total_map=Active_Employees.map((emp2)=>{
let add_salary=emp2.salary*1.10;
 console.log(`Name:${emp2.name}-department:${emp2.department}-New Salary:${add_salary}`);
})
// لحساب اعلى اداء للموظف فى الشركه 
  let max_Performance=Math.max(...employees.map((emp3)=>emp3.performance));
  // لايجاد موظف اعلى اداء find تم استخدام 
  let find_Performance =employees.find((emp4)=> emp4.performance===max_Performance);
  console.log("الموظف الأعلى أداءً في الشركة",find_Performance);
  
