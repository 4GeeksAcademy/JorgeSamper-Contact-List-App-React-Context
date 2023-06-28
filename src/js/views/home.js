import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/home.css";
import "../../styles/img.css";
import image from "../../img/perfil.png"
import { Context } from "../store/appContext";

export const Home = () => {
	const { store } = useContext(Context);

	const { contacts} = store;

	console.log({ contacts });

	return <div className="text-center mt-5">
		{contacts.map((contact) => {
		return (
			<span>
				<img
				alt="img alt"
				height="50px"
				width="50px"
				style={{ borderRadius: "50%"}} src="../../img/perfil.png"/>
				<section>
					<h5>{contact.full_name}</h5>
					<p>{contact.address}</p>
					<p>{contact.email}</p>
				</section>
				<section>
					<i class="far fa-edit"></i>
					<i class="fas fa-transh-alt"></i>
				</section>
			</span>
		);
	})}

	</div>;
};




// (
//   <div className="text-center mt-5">
//     <h1>Hello Rigo!</h1>


// <div class="row border m-4 rounded-3 p-3">
//   	<div class="col-lg-4">
// 	  <img src={image} alt="Imagen de perfil" className="img-fluid smaller-image" />
//   	</div>
//   	<div class="col-lg-6 text-start text-secondary">
//   			<li class="list-group-item fw-bold text-dark">
// 				Mike Anamendolla
// 			</li>
// 			<li class="list-group-item">
// 				<i class="fas fa-map-marker"></i> Ubicación
// 			</li>
// 			<li class="list-group-item">
// 				<i class="fas fa-phone"></i> 878 834 827
// 			</li>
// 			<li class="list-group-item">
// 				<i class="fas fa-envelope"></i> MikeAnamendolla@gmail.com
// 			</li>
//   		</div>

// 		<div class="col-lg-1 d-flex justify-content-end align-items-start">
// 			<i class="fas fa-pencil-alt mr-0"></i> 
//   		</div>

// 		<div class="col-lg-1 d-flex justify-content-end align-items-start">
// 			<i class="fas fa-trash ml-auto"></i> 
//   		</div>
// 	</div>
	
// </div>
// );
