import React, { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { netFlixLogo, SUPPORTEDD_LANGUAGES } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
// import { SUPPORTEDD_LANGUAGES } from "../utils/Constants";
const Header = () => {
  const dispatcher = useDispatch();

  const [signOutBtn, setSignOutBtn] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    setSignOutBtn(false);
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    //     const auth = getAuth();
    //Here we are updating the redux store with the values by passing the addUser reducer action
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatcher(
          addUser({ uid: uid, email: email, displayName: displayName })
        );
        navigate("/browse");
      } else {
        dispatcher(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleGptSearchClick = () => {
    dispatcher(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatcher(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute top-0 px-8 py-2 bg-gradient-to-b from-black z-20 w-full flex justify-between">
      <img src={netFlixLogo} alt="NetflixLogo" className="w-40 "></img>
      {signOutBtn && user ? (
        <div className="flex p-2">
          <select
            className="rounded-lg bg-gray-700 m-2 text-yellow-50 p-2"
            onChange={handleLanguageChange}
          >
            {SUPPORTEDD_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="bg-purple-800 py-2 px-4 mx-4 my-2 rounded-lg text-white"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <button
            onClick={handleSignOut}
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 "
          >
            Sign Out
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
