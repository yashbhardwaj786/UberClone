export const filterData = [ {name:"Ride",image: require('../../assets/ride.png'), id:"0"},
                            {name:"Food",image:require("../../assets/food.png"),id:"1"},
                            {name:"Package",image:require("../../assets/package.png"),id:"2"},
                            {name:"Reserve",image:require("../../assets/reserve.png"),id:"3"}
                          
                           ];


export const rideData =[
    {street:"Exam Warriors",area:"Madhav Vihar, Kotputli, Rajasthan",id:"0"},
    {street:"Daily Khhana",area:"Madhav Vihar, Kotputli, Rajasthan",id:"1"},
    {street:"Narayan Singh Circle",area:" Rambagh, Jaipur, Rajasthan",id:"2"},
    {street:"Pareek & Co. Law",area:"O-16, Ashok Marg, Panch Batti, C Scheme, Jaipur, Rajasthan",id:"3"},
    {street:"Prem Bekery",area:"34, Mangalam Vihar -D benar Road, Near Kasturi Palace, Jaipur, Rajasthan",id:"4"},
];

export const carTypeData =[
    {title:"Popular",
     data:[
    {name:"Uber Go",group :2, price:7,image: require('../../assets/uberGo.png'),note:"Affordable.compact rides",promotion:5 ,time:"20:19",id:"0"},
    {name:"UberX",group :3, price:5.5,image: require('../../assets/uberX.png'),note:"Affordable everyday trips",promotion:0,time:"20:20", id:"1"},
    {name:"Connect", group:0, price:12.6,image: require('../../assets/uberConnect.png'),note:"Send and receive packages",promotion:10,time:"20:33", id:"2"}
     ]
    },

    {title:"Premium",
    data:[
   {name:"Black",group :3, price:17.4,image: require('../../assets/uberBlack.png'),note:"Premium trips in luxury cars",promotion:0,time:"20:31",id:"3"},
   {name:"Van", group:6, price:22.3,image: require('../../assets/uberVan.png'),note:"Rides for groups up to 6",promotion:12,time:"20:31", id:"4"},
    ]
   },

   {title:"More",
   data:[
  {name:"Assist",group :3, price:35.3,image: require('../../assets/uberAssist.png'),note:"Special assistance from certified drivers",promotion:26,time:"20:25",id:"5"},
   ]
  },

];

 export const requestData = [{
    name:"For Me",id:0
},
{
    name:"For Someone",id:1
}

]

export const rideOptions = [{name:"Personal",icon:"account", id:"0"},
{name:"Business",icon:"briefcase", id:"1"},  

];

export const paymentOptions = [{image:require('../../assets/visaIcon.png'),text:"Visa ...0476"},
                                {image:require('../../assets/cashIcon.png'),text:"Cash"}]

export const availableServices = ["Uber Go","UberX","Uber connect","Uber Black","Uber Van","Uber Assist"]

export const carsAround = [
    {latitude:27.69755,longitude:76.19599},
    {latitude:27.698569,longitude:76.196996},
    {latitude:27.696459,longitude:76.195308},
    {latitude:27.697382,longitude:76.195989},
    {latitude:27.697413,longitude:76.194812},
    {latitude:27.697981,longitude:76.195142},
    {latitude:27.698887,longitude:76.196480},
]