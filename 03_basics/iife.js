// Immediately Invoked Function Expressions (IIFE)

// iife 1:-
// isme function ko (function) ko parenthesis ke under dal diye h and () isse call ho rhe h functionn. iife ka basic structure aisa hota h --> (function)().
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//--> // two iife ke ek sath likha h to unke bich ';' ye aana cahiye wrna error dega //


// iife 2:-
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')