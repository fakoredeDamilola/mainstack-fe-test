
export interface IChild {
    name:string;
    icon:any;
    link:string;
}

export interface ILinks {
parent?:string;
children: IChild[]
}

const listLinks:ILinks[] = [
    {
        children: [
            {name:"Dashboard",icon:'dashboard',link:'/'},
            {name:"Item 1",icon:'edit',link:'#'},
            {name:"Item 2",icon:'group',link:'#'},
            {name:"Item 3",icon:'hourglass_empty',link:'#'},

        ]
    },
    {
        parent:"OTHERS 1",
        children: [
            {name:"Item 4",icon:'add_a_photo',link:'#'},
            {name:"Item 5",icon:'delete',link:'#'},
        ]

    },
    {
        parent:"OTHER 2",
        children: [
            {name:"Item 6",icon:'subscriptions',link:'#'},
            {name:"Item 7",icon:'file_present',link:'#'},
            {name:"Item 8",icon:'alarm',link:'#'},
        ]

    }

]

const dashboardDays = [
    {text:"1 Day",value:"1"},
    {text:"3 Days",value:"3"},
    {text:"7 Days",value:"7"},
    {text:"30 Days",value:"30"},
    {text:"All Time",value:"all"},
    {text:"Custom Date",value:"custom"},
]

const recognizedCountries = ["Nigeria","United States","Netherlands","Andorra"]
export {listLinks,dashboardDays,recognizedCountries}