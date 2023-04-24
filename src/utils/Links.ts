
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

export {listLinks}