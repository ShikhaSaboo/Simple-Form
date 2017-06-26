var app = angular.module("myApp",[]);
app.controller("myController",function(){

	var vm = this;
			vm.myValue=false;
			vm.checkValue=true;
			vm.editActive=false;
			vm.gender="male";
			vm.male=true;
			vm.formTitle="Create Form";
			vm.userArray=[];
			id=0;
			vm.userShampoo=[{id_shampoo: 3, title: "Head and Shoulder"},{id_shampoo: 4, title: "Himalaya"}];
			vm.editFormAcivated=false;	
			vm.formType="";
			var getId=function(){
				return id++;
			};
			vm.submit=function(userDetails,formType){
				
				vm.myValue = true;
				console.log("userDetails",userDetails.id);
				if(formType=="create")
				{	
					userDetails.id=getId();
					vm.userArray.push(userDetails);
					
					vm.resetUserDetails();
				}
				else if(formType="edit")
				{	
					for(var i=0;i<vm.userArray.length;i++){
						if(vm.userArray[i].id==userDetails.id)
						{
							vm.userArray[i]=userDetails;
							vm.formTitle="Create Form";
							vm.editFormAcivated=false;
							vm.editActive=false;
							break;			
						}
					}
					
					vm.resetUserDetails();	
				}
				console.log("userArray..",vm.userArray);
			}

			vm.resetUserDetails = function(){
				vm.user =   {
					id:"",
					firstName:"",
					lastName:"",
					userRole:"user role",
					phoneNumber:"",
					shampoo:""	
				};
				
			}
			 vm.user =   {
				id:"",
				firstName:"",
				lastName:"",
				userRole:"user role",
				phoneNumber:"",
				shampoo:""	
			};
			vm.checkClick=function(){
				if(vm.male){
					vm.female=true;
					vm.male=false;
					vm.gender="female";
					vm.userShampoo=[{id_shampoo: 1, title: "Pantene"},{id_shampoo: 2, title: "Sunsilk"}];
					console.log("user shampoo in female",vm.userShampoo[1].title);
				}
				else if(!vm.male){
					vm.female=false;
					vm.male=true;
					vm.gender="male";
					vm.userShampoo=[{id_shampoo: 3, title: "Head and Shoulder"},{id_shampoo: 4, title: "Himalaya"}];
				}
			};
			vm.editForm=function(user){
				//v.editFormAcivated=true;
				vm.editActive=true;
				vm.user={
					id:user.id,
					firstName:user.firstName,
					lastName:user.lastName,
					userRole:user.userRole,
					phoneNumber:user.phoneNumber,
					shampoo:user.shampoo		
				}
				vm.formTitle="Edit Form";				
				vm.copyUser=angular.copy(vm.user);
			};
			vm.cancel=function(user){
				vm.user={
					id:user.id,
					firstName:user.firstName,
					lastName:user.lastName,
					userRole:user.userRole,
					phoneNumber:user.phoneNumber,
					shampoo:user.shampoo		
				}			
			};
			vm.onChange=function(){

			}
			
});