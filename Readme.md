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
GET /tickets
GET /tickets/:id
GET /tickets/:id/tags

```
## Endpoint Definitions

GET /status/health
Checks if server is running
Example:
json{
    "ok": true,
    "service": "Support Ticket Api"
}

GET /tickets
Gets all tickets
Example:[
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
        "id": 102,
        "title": "Email client crashes on startup",
        "status": "resolved",
        "priority": "medium",
        "assignee": "asmith",
        "createdAt": "2025-01-04T14:45:00Z",
        "tags": [
            "email",
            "outlook",
            "crash"
        ]
    },
]


GET /tickets/:id
Gets a ticket by id
Example:{
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
Example:
[
    "mobile",
    "sync",
    "api"
]