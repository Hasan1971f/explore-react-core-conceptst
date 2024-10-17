// export default function Todo({task, isDone}){
   
//     return(
//         <li>Task: {task}</li>
//     )
// }

//  Conditional rendaring option 1
// export default function Todo({task, isDone}){
   
//    if(isDone === true){
//     return <li>finished: {task}</li>
//    }
//    else{
//     return <li>work on : {task}</li>
//    }
// }


// export default function Todo({task, isDone}){
   
//    if(isDone === true){
//     return <li>finished: {task}</li>
//    }
//    else{
//     return <li>work on : {task}</li>
//    }
// }

// conditional rendering 2 / Ternery operator
// export default function Todo({task, isDone}){
   
//         return (
//             <li> {isDone ? 'finished' : 'work on'} : {task}</li>
//         )
 
         
// }

// conditional rendering && operator
// export default function Todo({task, isDone}){
   
//         return(
//             <li> {task} {isDone && ': Done'}</li>
//         )
//     }

// conditional rendering || operator
    export default function Todo({task, isDone}){
   
        return(
            <li> {task}{ isDone || ': Do it'}</li>
        )
    }
