export interface ILocation {
    country?:string;
    source?:string;
    count:number;
    percent:number;
}

export interface IViews {
    [key:string]:string
}

export interface IData {
    graph_data: {
        views: IViews
    }
    
    top_locations: ILocation[];
    top_sources: ILocation[]
    }