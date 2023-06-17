// import React from "react";
// import { Link } from "react-router-dom";
// import Input from "../../components/Input";
// import Button from "../../components/Button";
// import s from "./SettingsPage.module.scss"

// function SettingsPage(){
//     return(
//         <div className={s.wrapper}>
//       <div className={s.settings_block}>
//         <div className={s.settings_main}>
//           {/* <Link
//             to="/settings"
//           >
//             Settings
//           </Link> */}
   
//           <Input className={s.email} placeholder="Your E-mail"
//           label="Email address"/>
//            <Input className={s.avatar} placeholder="Your avatar"
//           label="Avatar"/>
//                  <Input className={s.name} placeholder="Your name"
//           label="Name"/>
//                  <Input className={s.description} placeholder="Your description"
//           label="Description"/>
//           <Button className={s.saveButton}>Save</Button>
//           <Button className={s.logOut}>Log Out</Button>
//         </div>
//         {/* {<Settings/>} */}
//       </div>
//     </div>
//     )
// }
// export default SettingsPage;



import React,{useState} from "react";

import { useDispatch,useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import Input from "../../components/Input";
import Button from "../../components/Button";

import s from "./SettingsPage.module.scss"

import { changeUser } from "../../store/userSlice";
import { logOut } from "../../store/userSlice";

function SettingsPage(){
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error } = useSelector((store) => store.user);

  const [email, setEmail] = useState("");
  const[userName,setUserName] = useState("");
  const[avatar,setAvatar]= useState("");
  const[description,setDescription]=useState("");

  const [users, setUsers] = useState({});

  const onEmailChange = (event) => {
      setEmail(event.target.value);
  };
  const onUserNameChange = (event) => {
      setUserName(event.target.value);
  };
  const onAvatarChange = (event) => {
      setAvatar(event.target.value);
  };
  const onDescriptionChange = (event) => {
      setDescription(event.target.value);
  };
  const onLogOut = () => {
    dispatch(logOut())
  }
  const onSubmit = async (event) => {
      event.preventDefault();
      // if (!email) {
      //     enqueueSnackbar({ message: "There is no E-mail", variant: "error" });
      //     return;
      // }
      // if (!password) {
      //     enqueueSnackbar({ message: "There is no Password", variant: "error" });
      //     return;
      // }
      dispatch(changeUser({ login: email, userName,avatar,description }));
  };
return (
  <form className={s.wrapper} onSubmit={onSubmit}>
    <div className={s.settings_block}>
    <div className={s.settings_main}>
      <Input
      value={email} 
      onChange={onEmailChange} 
      placeholder="Hello anime@mail.ru"
      label="Email Address" 
      className={s.email}
      />
      <Button type="submit" className={s.saveButton}>Save
    </Button>
      <Input
        value={avatar}
        onChange={onAvatarChange}
        placeholder="http://anime.best.png"
        label="Avatar"
        className={s.avatar}
      />
      <Button type="submit" className={s.saveButton}>Save
    </Button>
      <Input
        value={userName}
        onChange={onUserNameChange}
        placeholder="Irvin"
        label="Name"
        className={s.name}
      />
      <Button type="submit" className={s.saveButton}>Save
    </Button>
    
    <textarea
        value={description}
        onChange={onDescriptionChange}
        placeholder="Hi there!"
        label="Description"
        className={s.name}
      />
    <Button type="submit" className={s.saveButton}>
      Save
    </Button>
    
    <Button className={s.logOut} nClick={onLogOut} >Logout</Button>
    </div>
    </div>
  </form>
);
}
export default SettingsPage;