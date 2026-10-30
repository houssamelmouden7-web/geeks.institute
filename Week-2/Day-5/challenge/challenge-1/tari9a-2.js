const totalRows = 6;

for (let i = 1; i <= totalRows; i++) {
  let row = ""; 
  
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  
  console.log(row);
}