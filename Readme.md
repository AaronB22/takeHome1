# Support Ticket API

This is a Node.js procject in the mvc structure style. This app builds a support ticket api. 
The goal of the api is to allow the user to send a support ticket to the server

## API Structure

The Api uses a handful of fields. First field is an id that will be use to track and modify each entry in the database.
A ttile which acts as the name of the support ticket
priority field which sets how important each ticket is
assignee, the creater of the ticket
createdAt, which tracks the timestamp of the creation of the ticket
tags, which help orginize tickets

## API Endpoints

Listed below are the endpoints that this API currently supports

```
GET /status/health
GET /api/tickets
GET /api/tickets/:id
GET /api/tickets/:id/tags

```
## Endpoint Definitions

GET /status/health
Checks if server is running
Example Call: http://localhost:8080/health/status
Example Responce:
json{
    "ok": true,
    "service": "Support Ticket Api"
}

GET /tickets
Gets all tickets
QUERIES: ?sort (Sorts responce by giving query)| ?status ?priority ?assignee (Filters that can be passed it to filtr the responce) | ?fields (allows the user to limit what fields on the object are returned)
Example Call: http://localhost:8080/api/ticket/tickets?sort=assignee&status=open&priority=high
Example Responce:[
        {
        "id": 101,
        "title": "VPN not connecting from home",
        "status": "open",
        "priority": "high",
        "assignee": "jdoe",
        "createdAt": "2025-01-05T09:12:00Z",
        "tags": [
            "vpn",
            "network",
            "remote"
        ]
    },
        {
        "id": 103,
        "title": "Cannot access shared drive",
        "status": "open",
        "priority": "high",
        "assignee": "jdoe",
        "createdAt": "2025-01-06T11:03:00Z",
        "tags": [
            "fileshare",
            "permissions",
            "network"
        ]
    },
]


GET /api/tickets/:id
Gets a ticket by id
PARAMS: One param "id" is used to querry the database to find a ticket with matching id
HTTP: Status(200)
Example Call: http://localhost:8080/api/ticket/121
Example Responce:{
    "id": 121,
    "title": "Mobile app fails to sync data",
    "status": "open",
    "priority": "high",
    "assignee": "jdoe",
    "createdAt": "2025-01-06T09:55:00Z",
    "tags": [
        "mobile",
        "sync",
        "api"
    ]
}

GET /tickets/:id/tags
Gets the tags from a ticket with provided id
PARAMS: One param "id" is used to querry the database to find a ticket with matching id
HTTP: Status(200)
Example Call: http://localhost:8080/api/ticket/121/tags
Example Responce:
[
    "mobile",
    "sync",
    "api"
]

## Postman Link:
https://aaronbailey-2317086.postman.co/workspace/Aaron-Bailey's-Workspace~af93c633-a305-43d2-882e-18d01c142179/collection/45548159-6bdd45ed-3974-4c3c-a202-b03174387548?action=share&source=copy-link&creator=45548159 

The exported JSON is also in root dict of project.