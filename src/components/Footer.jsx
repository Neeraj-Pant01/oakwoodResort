const Footer = () => {
  return (
    <div className="container pt-1 p-4" style={{background:'#0F172B',color:"white"}}>

  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3" >
      <li className="nav-item" ><a href="#"  style={{color:"white"}} className="nav-link px-2 ">Home</a></li>
      <li className="nav-item"><a href="#"  style={{color:"white"}} className="nav-link px-2 ">Features</a></li>
      <li className="nav-item"><a href="#"  style={{color:"white"}} className="nav-link px-2 ">Pricing</a></li>
      <li className="nav-item"><a href="#"  style={{color:"white"}} className="nav-link px-2 ">FAQs</a></li>
      <li className="nav-item"><a href="#" style={{color:"white"}} className="nav-link px-2 ">About</a></li>
    </ul>
    <p className="text-center ">© 2023 Company, Inc</p>
  </footer>
</div>

  )
}

export default Footer
