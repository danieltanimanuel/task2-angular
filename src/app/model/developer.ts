export interface Developer{
    id: number;
    name: string;
    phone: string;
    skill: string;
    notes: string;
}

export class DeveloperModel{

    constructor(
        public name: string,
        public phone: string,
        public skill: string,
        public notes: string
    ){
        
    }
}

export class DeveloperModelUpd{

    constructor(
        public id: number,
        public name: string,
        public phone: string,
        public skill: string,
        public notes: string
    ){
        
    }
}

