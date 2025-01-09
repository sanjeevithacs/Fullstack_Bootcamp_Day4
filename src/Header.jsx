import React from 'react';   // type rafc - for arrow function

const Header = () => {         // functional component
  //   let data = [1, 2, 3, 4, 5];
  //  return(
  //   <div>
  //       {data.map((i, k) => {  // Corrected syntax: added parentheses around (i, k)
  //           return(
  //               <li key={k}>{i}</li>  // Corrected key usage and syntax
  //           );
  //       })}
  //   </div>
  //  );



/*
  //                                            DAY - 4

  if(true){
    return(
      <h1>its' for client</h1>
    )
  }
  else{

  }



let data = true  // if only data is 'true' , then o/p - 'rendering' | 'false' - no o/p
return(
  <>
  {
    data &&
    <h1>rendering</h1>
  }
  </>
)
 

let data1 = [{id:1,username:"john"}]    //o/p - rendering
return(
  <>
  {
    data1 &&
    <h1>rendering</h1>
  }
  </>
)



let data2 = []    //o/p - rendering
return(
  <>
  {
    !data2.length > 0 &&
    <h1>rendering</h1>
  }
  </>
)



let data3 = []    //o/p - no data
return(
  <>
  {
    data3.length > 0 ?        //for o/p - there is data use '!data3.length > 0'
    <h1>there is data</h1> : <h1>no data</h1>
  }
  </>
)

*/

let data4 = [{id:2,name:"alice"}]    //o/p - there is data
return(
  <>
  {
    data4.length > 0 ?        //also for o/p - there is data use '!data3.length > 0'
    <h1>there is data</h1> : <h1>no data</h1>
  }
  </>
)


};

export default Header;    // default export       // to export to other files
//export { Header };         //named export  












//{} - used for rendering
// <></> - fragments 

/*
import React from 'react'      // type rfce - anonumous function

function Header() {
  return (
    <div>Header</div>
  )
}

export default Header

*/