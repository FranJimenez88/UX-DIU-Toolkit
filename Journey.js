/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU3.FLR";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/FranJimenez88/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "José-Pedro Villanueva",
                Photo: "jose.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere realizar un viaje con su familia a Japón",
                touch1: "Agenda",
                feel1: "3",
                con1: "Encontrar un viaje decente que pueda pagar con sus ahorros",
                ima1: "cartoon-thinking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca una agencia de viaje que le busque el mejor vuelo y estancia en Tokio(Japón) ",
                touch2: "Servicio(agencia)",
                feel2: "4",
                con2: "La agencia le ofrece varios viajes con un buen precio pero no sabe cual elegir",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Consulta con su familia y deciden quedarse con la opción que mas se ajusta a su presupuesto",
                touch3: "Reunion familiar",
                feel3: "5",
                con3: "Piensa que ha encontrado vuelo y alojamiento perfecto, pero le falta planear tour por Tokio",
                ima3: "cartoon-happy.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca en internet(Viator) los mejores tours que puede realizar",
                touch4: "Ordenador(Viator)",
                feel4: "3",
                con4: "Demasiados tours que elegir",
                ima4: "cartoon-deciding.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Consigue filtrar según precio y valoración, quedandose con 3 tours que se adecuan a los gustos de toda la familia",
                touch5: "Ordenador(Viator)",
                feel5: "3",
                con5: "Le ha costado mucho tiempo, tenía que decidirlo rápido para que no aumentase el precio del vuelo",
                ima5: "cartoon-PChard.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Logra comprar el billete de vuelo y reservar todos los tours en la página web",
                touch6: "móvil(Llamada agencia) y ordenador(Viator)",
                feel6: "5",
                con6: "Esta contento de realizar el viaje de sus sueños con su familia, además se siente seguro porque todos los tours cumplen las medidas de seguridad del COVID-19",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Sara Gil",
                Photo: "sara.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quieren realizar un viaje con sus amigas de la facultad en las vacaciones",
                touch1: "Agenda",
                feel1: "4",
                con1: "Quiere intentar ir a las costas de Portugal",
                ima1: "cartoon-writting2.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca transporte y alojamiento en El Algarve, Portugal",
                touch2: "Móvil(internet)",
                feel2: "3",
                con2: "No saben si ir en bus, en coche o en tren",
                ima2: "cartoon-phone-sitting.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Se reuné con sus amigas para discutir el mejor medio transporte y alojamiento",
                touch3: "Discord",
                feel3: "2",
                con3: "No se aclaran y deciden esperar a saber cual va a ser el total de los gastos",
                ima3: "cartoon-teamthinking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca en internet los tours que pueden hacer en Algarve",
                touch4: "Móvil(Viator)",
                feel4: "3",
                con4: "Hay muchos tours chulos pero solo pueden quedarse con 2 de ellos, ya que se pasaría de su presupuesto",
                ima4: "cartoon-Pchard.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Vuelve a reunirse con sus amigas para decidir que tours elegir",
                touch5: "Discord",
                feel5: "2",
                con5: "Discuten ya que cada una quiere una cosa",
                ima5: "cartoon-talking.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Eligen por votación los tours y reservan el transporte y alojamiento más baratos ya que los tours son más caros",
                touch6: "Ordenador (reserva OK)",
                feel6: "4",
                con6: "Han encontrado unos tours bastante bonitos y entretenidos, aunque no le guste al grupo entero, consiguiendo al mismo tiempo un alojamiento y desplazamiento mediocre",
                ima6: "cartoon-shaking.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



