import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  const openResume = () => {
    window.open('/pdf/mahercv.pdf', '_blank');
  };
  function myFunction() {
    alert("maher.guerfali@gmail.com")
}
  return (

    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a className="po" href="#portfolio">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a onClick={openResume} href="#Apps">Resume</a>
          
        </li>
        
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
