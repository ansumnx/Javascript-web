const USERNAME = "ansumnxcut";
const USERPSWD = "ansumnxcut3112";

// const info1={
//     username:"",
//     userpswd:"",
//     set information(value){
//         this.username = value.username;
//         this.userpswd = value.userpswd;
//     },
//     get infor(){
//         return{ username:this.username , userpswd:this.userpswd};
//     }
// };

function usermsg(msg) {
  document.getElementById("user").value = msg;
}
function pswdmsg(msg) {
  document.getElementById("pwd").value = msg;
}

function mylogin() {
  let name = document.getElementById("user").value;
  let pswd = document.getElementById("pwd").value;
  // let rem = document.getElementById("Remember");

  if (name.length === 0) {
    usermsg("Enter your Username!");
    setTimeout(() => {
      usermsg("");
    }, 1000);
    return;
  } else if (pswd.length === 0) {
    pswdmsg("Enter your Password");
    setTimeout(() => {
      pswdmsg("");
    }, 1000);
    return;
  }
  // info1.information={username:name , userpswd:pswd};

  if (name == USERNAME && pswd == USERPSWD) {
    usermsg("");
    pswdmsg("");
    setTimeout(() => {
      usermsg("");
      pswdmsg("");
    }, 1000);
    window.location.href = "ansumnxcut.html";
  } else {
    if (name !== USERNAME) {
      usermsg("Enter Correct UserName!");
    }
    if (pswd !== USERPSWD) {
      pswdmsg("Enter Correct Password!");
    }
    setTimeout(() => {
      usermsg("");
      pswdmsg("");
    }, 1000);
  }

  // window.onload = function(){
  //     let storeusername = localStorage.getItem("username");
  //     let storepassword = localStorage.getItem("userpswd");
  //     if(storeusername){
  //         document.getElementById("user").value = storeusername;
  //     }
  //     if(storepassword)
  //     {
  //         document.getElementById("pwd").value = storepassword;
  //     }
  // }
}

function lostpassword() {
  window.location.href = "lostpswd.html";
}

function lost(msg) {
  document.getElementById("para").innerHTML = msg;
}

function recover() {
  let name = document.getElementById("username").value;
  if (name.length === 0) {
    lost("Enter UserName!");
  } else {
    if (name == USERNAME) {
      lost(USERPSWD);
      setTimeout(() => {
          window.location.href = "login.html";
        
      }, 3000);
    } else {
      lost("Check your UserName!");
    }
  }
  setTimeout(() => {
    lost("");
    document.getElementById("username").value = "";
  }, 3000);
}
