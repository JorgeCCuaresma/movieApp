export interface DataResponse {
    d: D[];
}

export interface D {
    i:    I;
    id:   string;
    l:    string;
    q:    string;
    qid:  string;
    rank: number;
    s:    string;
    y:    number;
}

export interface I {
    height:   number;
    imageUrl: string;
    width:    number;
}