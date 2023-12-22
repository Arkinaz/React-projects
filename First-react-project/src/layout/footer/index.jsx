import React from "react";
import ButtonThing from "../../components/buttons/button";
import "./footer.scss";

function Footer() {
  return (
    <section id="footer">
      <div className="cont">
        <div className="footer">FOOTER</div>
        <ButtonThing nameBtn="FOOTER" />
      </div>
    </section>
  );
}

export default Footer;
