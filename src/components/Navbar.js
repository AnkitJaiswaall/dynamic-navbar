import { useState } from "react";
export default function Navbar() {
  const [btnToggle, setBtnToggle] = useState(false);
  const [cssClass, setCssClass] = useState("navbar");

  const toggleNavbar = () => {
    if (cssClass == "navbar") {
      setBtnToggle(!btnToggle);
      setCssClass("navbar responsive");
    } else {
      setBtnToggle(!btnToggle);
      setCssClass("navbar");
    }
  };

  return (
    <div>
      <div className={cssClass} id="myNavbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#" className="additional-items">
          Item 1
        </a>
        <a href="#" className="additional-items">
          Item 2
        </a>
        <a href="#" className="additional-items">
          Item 3
        </a>
        <a href="#" className="more" onClick={toggleNavbar}>
          More
        </a>
      </div>
    </div>
  );
}
