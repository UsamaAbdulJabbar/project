import React from "react";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
   

} from "firebase/auth";
import app from "./firebaseConfig";


import {
    getDatabase,
    ref,
    set,
    onValue,
    push,
    get,
    child,
    remove,


} from "firebase/database";






//Firebase Authentication

const auth = getAuth(app);
const database = getDatabase(app);


//Save Data 
let saveData = ( nodeName,userObj, uid) => {
    userObj.id = uid;
    set(ref(database,`${nodeName}/${uid}`),userObj);
};

//Get Data 
let getData = (nodeName,uid)=>{
  const starCountRef = ref(database, `${nodeName}/${uid}`);
    return new Promise ((resolve,reject)=>{

        onValue(starCountRef, (snapshot) => {
       const data = snapshot.val();
       resolve(data);
       
    }); 
});
}


//User SingUp
let signUpUser = (userObj) => {
    return new Promise(()=>{
        createUserWithEmailAndPassword(auth, userObj.email, userObj.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user.uid)
          saveData("users",userObj,user.uid).then(()=>{
              
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
         
          // ..
        });
    })
   

}


//User Login

let login = (userObj) => {
    

        return new Promise((resolve,reject)=>{
            signInWithEmailAndPassword(auth, userObj.email, userObj.password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // ...
              getData("users",user.uid).then((res)=>{
                
                resolve(res);
                
              
              }).catch((err)=>{
                console.log(err);
                reject(err)
              });
              
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            
            });
        });
        
    };


    //save student data in firebase database
    let sendData = (obj, nodeName, id) => {
      if (!id) {
        // for id/key start
        let postListRef = ref(database, nodeName);
        obj.id = push(postListRef).key;
        console.log(obj.id);
        // for id/key end
      }
      let newpostListRef = ref(database, `${nodeName}/${id ? id : obj.id}`);
      return set(newpostListRef, obj);
    };

    //get student data from firebase

    let getStudentData = async (nodeName, id) => {
      const dbRef = ref(database);
      return new Promise((resolve, reject) => {
        get(child(dbRef, `${nodeName}/${id ? id : ""}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              let arr;
              if (id) {
                arr = snapshot.val();
                resolve(arr);
                //console.log(arr)
              } else {
                arr = Object.values(snapshot.val());
                resolve(arr);
                //console.log(arr)
              }
            } else {
              reject("No Data");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }


    //DELETE DAT FROM FIREBASE
    let deleteData = (nodeName, id) => {
      const refrence = ref(database, nodeName + "/" + id);
      return remove(refrence);
  };

//export of functions

export { signUpUser, login,saveData,sendData,getStudentData,getData,deleteData };