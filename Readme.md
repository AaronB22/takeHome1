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