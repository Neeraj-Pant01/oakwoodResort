
import './Service.css'
import { IoFishSharp, } from "react-icons/io5";
import { GiForestCamp , GiCottonFlower ,GiCampfire,GiMountainClimbing  ,GiHummingbird } from "react-icons/gi";

const Services = () => {
  return (
    <div style={{width:"100%"}}>
        {/* for showing all services  */}
     <div style={{width:"100%",marginTop:"3rem",padding:'20px'}}>
        <div style={{marginBottom:'2rem',display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div style={{color:'#FEA116',fontWeight:600,lineHeight:'35px',borderBottom:'2px solid #FEA116'}}>Our Services</div>
            <div style={{fontSize:'32px',fontWeight:600}}>Explore Our <span className="text-uppercase" style={{color:'#FEA116'}}>Services</span></div>
        </div>
        <div className="container">
    <div className="row">
        {/* for camp fire  */}
        <div className="col-md-4" >
            <div className="card mb-4 hover-state" style={{border:"none",boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
        }}>
                <div className="card-body" style={{paddingTop:'30px',display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <div style={{marginBottom:'1.5rem',display:'flex',justifyContent:"center",padding:'5px',alignItems:"center",border:"1px solid #dee2e6"}}>
                    <GiCampfire className="icon" style={{padding:'5px',color:'#FEA116',fontSize:'50px',border:"1px solid #dee2e6"}}/>
                    </div>
                    <h5 className="card-title" style={{fontSize:"20px",fontWeight:"600"}}>Camp fire</h5>
                    <p className="card-text" style={{padding:'15px',color:"gray",textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem similique, fuga accusamus, magni reiciendis veniam voluptas tempore aliquam consequatur dolorum aspernatur quasi nostrum vel ab ad placeat libero incidunt harum.</p>
                </div>
            </div>
        </div>

        {/* for rainbow trout fish  */}
        <div className="col-md-4" >
            <div className="card mb-4 hover-state" style={{border:"none",boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
        }}>
                <div className="card-body" style={{paddingTop:'30px',display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <div style={{marginBottom:'1.5rem',display:'flex',justifyContent:"center",padding:'5px',alignItems:"center",border:"1px solid #dee2e6"}}>
                    <IoFishSharp className="icon" style={{padding:'5px',color:'#FEA116',fontSize:'50px',border:"1px solid #dee2e6"}}/>
                    </div>
                    <h5 className="card-title" style={{fontSize:"20px",fontWeight:"600"}}>Camp fire</h5>
                    <p className="card-text" style={{padding:'15px',color:"gray",textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem similique, fuga accusamus, magni reiciendis veniam voluptas tempore aliquam consequatur dolorum aspernatur quasi nostrum vel ab ad placeat libero incidunt harum.</p>
                </div>
            </div>
        </div>

        {/* for camping  */}
        <div className="col-md-4" >
            <div className="card mb-4 hover-state" style={{border:"none",boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
        }}>
                <div className="card-body" style={{paddingTop:'30px',display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <div style={{marginBottom:'1.5rem',display:'flex',justifyContent:"center",padding:'5px',alignItems:"center",border:"1px solid #dee2e6"}}>
                    <GiForestCamp className="icon" style={{padding:'5px',color:'#FEA116',fontSize:'50px',border:"1px solid #dee2e6"}}/>
                    </div>
                    <h5 className="card-title" style={{fontSize:"20px",fontWeight:"600"}}>Camp fire</h5>
                    <p className="card-text" style={{padding:'15px',color:"gray",textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem similique, fuga accusamus, magni reiciendis veniam voluptas tempore aliquam consequatur dolorum aspernatur quasi nostrum vel ab ad placeat libero incidunt harum.</p>
                </div>
            </div>
        </div>

        {/* for orchid  */}
        <div className="col-md-4" >
            <div className="card mb-4 hover-state" style={{border:"none",boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
        }}>
                <div className="card-body" style={{paddingTop:'30px',display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <div style={{marginBottom:'1.5rem',display:'flex',justifyContent:"center",padding:'5px',alignItems:"center",border:"1px solid #dee2e6"}}>
                    <GiCottonFlower className="icon" style={{padding:'5px',color:'#FEA116',fontSize:'50px',border:"1px solid #dee2e6"}}/>
                    </div>
                    <h5 className="card-title" style={{fontSize:"20px",fontWeight:"600"}}>Camp fire</h5>
                    <p className="card-text" style={{padding:'15px',color:"gray",textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem similique, fuga accusamus, magni reiciendis veniam voluptas tempore aliquam consequatur dolorum aspernatur quasi nostrum vel ab ad placeat libero incidunt harum.</p>
                </div>
            </div>
        </div>

        {/* for bid watching  */}
        <div className="col-md-4" >
            <div className="card mb-4 hover-state" style={{border:"none",boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
        }}>
                <div className="card-body" style={{paddingTop:'30px',display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <div style={{marginBottom:'1.5rem',display:'flex',justifyContent:"center",padding:'5px',alignItems:"center",border:"1px solid #dee2e6"}}>
                    <GiHummingbird className="icon" style={{padding:'5px',color:'#FEA116',fontSize:'50px',border:"1px solid #dee2e6"}}/>
                    </div>
                    <h5 className="card-title" style={{fontSize:"20px",fontWeight:"600"}}>Camp fire</h5>
                    <p className="card-text" style={{padding:'15px',color:"gray",textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem similique, fuga accusamus, magni reiciendis veniam voluptas tempore aliquam consequatur dolorum aspernatur quasi nostrum vel ab ad placeat libero incidunt harum.</p>
                </div>
            </div>
        </div>

        {/* for treeking  */}
        <div className="col-md-4" >
            <div className="card mb-4 hover-state" style={{border:"none",boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
        }}>
                <div className="card-body" style={{paddingTop:'30px',display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <div style={{marginBottom:'1.5rem',display:'flex',justifyContent:"center",padding:'5px',alignItems:"center",border:"1px solid #dee2e6"}}>
                    <GiMountainClimbing  className="icon" style={{padding:'5px',color:'#FEA116',fontSize:'50px',border:"1px solid #dee2e6"}}/>
                    </div>
                    <h5 className="card-title" style={{fontSize:"20px",fontWeight:"600"}}>Camp fire</h5>
                    <p className="card-text" style={{padding:'15px',color:"gray",textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem similique, fuga accusamus, magni reiciendis veniam voluptas tempore aliquam consequatur dolorum aspernatur quasi nostrum vel ab ad placeat libero incidunt harum.</p>
                </div>
            </div>
        </div>

       
        
    </div>
</div>
     </div>
    </div>
  )
}

export default Services
