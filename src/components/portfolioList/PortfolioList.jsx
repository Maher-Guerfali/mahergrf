import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
   
     //<img className="dar" src="assets/housephoto.png" alt=""/>
  <div
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
      
    </div>
   
  
    
  );
}
