export interface PollResponse {
    /*"id": 1,
        "title": "Poll 1",
        "summary": "My First Poll",
        "isPublished": true,
        "startsAt": "2025-09-17",
        "endsAt": "2025-09-17",*/
    id : number,
    title : string,
    summary: string,
    isPublished: boolean,
    startsAt: Date,
    endsAt: Date
}
