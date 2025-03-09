let passwords = [
    { passowrd: "Computer123@", desc: "false" },
    { passowrd: "Laptop@1234", desc: "true" },
    { passowrd: "Ipad@2345", desc: "false" },
  ];
  
  let username = "ahmad";
  
  let password = "Laptop@1234"

  if(username === "ahmad" && passwords.some((p) => p.passowrd === password)){
    console.log(password);
    console.log(username)
  }

  let n = passwords.reduce((a1,a2)=>a1+a2.passowrd)

console.log(n)