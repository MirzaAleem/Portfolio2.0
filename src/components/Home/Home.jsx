import "./home.css";
import { useEffect} from "react";
  
function Home() {
  
  useEffect(() => {
    const handleScroll = () => {
      let text = document.getElementById('greet')
      let leftTree = document.getElementById('tree-left')
      let rightTree = document.getElementById('tree-right')
      let leftGate = document.getElementById('gate-left')
      let rightGate = document.getElementById('gate-right')

      const currentScrollTop = window.scrollY; 
      text.style.marginTop = currentScrollTop * 1.2 + 'px'
      leftTree.style.left = currentScrollTop * -0.5 + 'px'
      rightTree.style.left = currentScrollTop * 0.5 + 'px'
      leftGate.style.left = currentScrollTop * 0.5 + 'px'
      rightGate.style.left = currentScrollTop * -0.5 + 'px'
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax">
      <h2 id="greet"  >Welcome to My Portfolio</h2>
      <img id="tree-left" src="assets/images/tree-left.png" alt="left-tree" />
      <img id="gate-left" src="assets/images/gate-left.png" alt="left-gate" />
      <img id="tree-right" src="assets/images/tree-right.png" alt="right-tree" />
      <img id="gate-right" src="assets/images/gate-right.png" alt="right-gate" />
      <img id="grass" src="assets/images/grass.png" alt="grass" />
    </div>
  )
}

export default Home