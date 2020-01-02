import React from 'react';

//const Component1 = (props) => {
const Component1 = ({components1, deleteRecord}) => {
    
    //console.log(this.props);
    //const{ components1 } = props;

    // if condition
    const component1List = components1.map(component1 =>{
       if(component1.age > 20){ 
            return (
                    <div className="component1" key={ component1.id }>
                        <div>Name:{component1.name }</div>
                        <div>Age:{component1.age }</div>
                        <div>Eye: {component1.eye}</div>
                        <button onClick={ ()=>{deleteRecord(component1.id)} }>Delete</button>
                    </div> 
            )
        }else{return null}    
    })

    // 2nd condition
    // const component1List = components1.map(component1 =>{
    //     return component1.age > 20 ? (
    //         <div className="component1" key={ component1.id }>
    //             <div>Name:{component1.name }</div>
    //             <div>Age:{component1.age }</div>
    //             <div>Eye: {component1.eye}</div>
    //         </div> 
    //     ) : null;
    // })

    return(
        <div className="component1List">
            { component1List }
        </div>
    )

    // nested all together
    // return(
    //     <div className="component1List">
    //         { 
    //             components1.map(component1 =>{
    //                 return component1.age > 20 ? (
    //                     <div className="component1" key={ component1.id }>
    //                         <div>Name:{component1.name }</div>
    //                         <div>Age:{component1.age }</div>
    //                         <div>Eye: {component1.eye}</div>
    //                     </div> 
    //                 ) : null;
    //             })
    //          }
    //     </div>
    // )
    
}

export default Component1;