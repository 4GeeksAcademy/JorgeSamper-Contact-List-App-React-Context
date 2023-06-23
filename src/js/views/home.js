import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/home.css";
import "../../styles/img.css";
import image from "../../img/perfil.png"

export const Home = () => (
  <div className="text-center mt-5">
    <h1>Hello Rigo!</h1>


<div class="row border m-4 rounded-3">
  	<div class="col">
	  <img src={image} alt="Imagen de perfil" className="img-fluid smaller-image" />
  	</div>
  	<div class="col text-start text-secondary">
  		<li class="list-group-item fw-bold">
				Mike Anamendolla
			</li>
			<li class="list-group-item">
				<i class="fas fa-map-marker"></i> Ubicacion
			</li>
			<li class="list-group-item">
				<i class="fas fa-phone"></i> 478 834 827
			</li>
			<li class="list-group-item">
				<i class="fas fa-envelope"></i> MikeAnamendolla@gmail.com
			</li>
  		</div>
	</div>
</div>
);
