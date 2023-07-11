import React from "react";

function Footer() {
  return (
    <footer className="bg-emerald-100  rounded-lg shadow mt-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://www.facebook.com/profile.php?id=100078836844899" className="hover:underline">
            Apisit
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
