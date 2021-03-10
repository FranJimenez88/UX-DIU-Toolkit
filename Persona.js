/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU3.FLR";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/FranJimenez88/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "José-Pedro Villanueva",
				Photo: "jose.jpg",
				Quote: "Never surrender",
				Age: 45,
				Occupation: "Profesor de educación primaria",
				Family: "Casado desde hace 15 años, dos hijos uno de 12 y otro de 15 años",
				Location: "A Coruña(Monte Alto)",
				Character: "Le gusta pasar tiempo con su familia y enseñar a sus alumnos",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 1 }
				], 
				Goals: ["Viajar a Japón con su familia", "Ser director del colegio"],
				Frustrations: ["Es el único que trabaja en la familia, pero tiene bastante dinero ahorrado", "Le gustaría que cambiase el sistema educativo del país"],
				Bio: "Es de Murcia pero vive en Monte Alto(A Coruña) ya que es donde le asignaron cuando hizo las oposiciones y ahí conocio a su esposa, como le gustaba la ciudad decidio quedarse ahí, actualmente lleva trabajando en el colegio de sus propios hijos durante 10 años, ha establecido muchas amistades y es muy querido por los de su barrio",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Su sueño siempre ha sido viajar a Japón y como lleva un tiempo sin unas vacaciones por la pandemia y quiere darle una sorpresa a la familia con el viaje a Japón",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Sara Gil",
				Photo: "sara.jpg",
				Quote: "Tempus fugit",
				Age: 21,
				Occupation: "Estudiante de Enfermería",
				Family: "Padre y madre, y una hermana pequeña",
				Location: "Málaga",
				Character: "Pensamiento crítico e insegura",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Aprobar las oposiciones y encontrar trabajo", "Dejar de ser insegura", "Independizarse", "Encontrar el amor de su vida"],
				Frustrations: ["Le gustaría tener mas concentración para poder sacar las oposiciones a la primera ", "Le da miedo que su futuro trabajo no le llene tanto"],
				Bio: "Reside desde su nacimiento en Málaga, siempre ha sido una buena estudiante y una persona sin maldad, pero problemas de bullying en primaria le ha hecho más insegura aunque actualmente a encontrado a una buenas amigas en la facultad",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos:   "Su sueño es dejar de teneer inseguridades, encontrar un trabajo que le guste hasta su jubilación y hacer un viaje con sus amigas" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])