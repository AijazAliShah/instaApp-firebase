import React, { Component } from 'react';
import {Image, Table} from 'react-bootstrap';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class LeftSideBar extends Component {



    render() {

    return (
        <div >  
            
            <div  className="leftSidebar">
                <div className="picCircle">
                    <Image src={this.props.userDetails.picture} roundedCircle height="60px" width="60px"/>
                </div>              
                <br/>

                <div>
                    <h6><b>{this.props.userDetails.name}</b></h6>
                    <p>{this.props.userDetails.address}</p>
                </div>
                    
                <br/>
                
                <div>
                    <Table className="table">
                        <tbody>
                            <tr>
                                <th>Post</th>
                                <th>Followers</th>
                                <th>Following</th>                         
                            </tr> 
                            <tr>
                                <td>{this.props.userDetails.noOfPosts}</td>
                                <td>{this.props.userDetails.noOfFollowers}</td>
                                <td>{this.props.userDetails.noOfFollowing}</td>
                            </tr>
                            
                        </tbody>
                    </Table>  
                </div>  
            </div>  

            <div className="leftSidebar1">
            
                {   
                    this.props.links.map((link, index) =>
                    <div key={link.id}>
                        <a href={link.link}  className="a"><FontAwesomeIcon icon={link.icon} /> {link.text}</a>
                        <br/>
                        <br/>
                    </div>    
                    )
                } 
               
            </div>
      </div>
    )
  }
}

export default LeftSideBar;