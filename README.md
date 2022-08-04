
# PORTAL FOR TEACHERS 

This is a prototype for a digital platform  for the Government teachers of Bihar, India.


## Motivation:

 The teachers of Bihar have a short hand when it comes to use digital things.
 Although they are good at their work, but because they don't know the impact digitalization can have on their life
 they have to face  difficulties.
 Be it a basic salary statement to the very basic details of his job He had to give money to retrieve the data.
 This platform deals with the basic problems of maintaining and retrieval of the data of the teachers, so that all these 
 corruptions can be minimized and the Government teachers of Bihar can also cope up with the fast moving world.

## Screenshots

[Click Here](https://www.flickr.com/photos/196191297@N05/52262855906/in/album-72177720301059369/)

## Table of Contents
1. [Features](#Features)
2. [Tech-Stack-Used](#Tech-Stack-Used)
3. [Contributors](#Contributors)
4. [Installation](#Installation)
<a name ="Features"> </a>
## Features
#### Present : 
Admin (Senior) Can  
- Login/Signup with the facility of jwt authentication 
- can see the number of teachers that have signed-up for the website till time. 
- Add a new Teacher Detail 
- View different Details of all the teachers which are enrolled in the organization in the form of a table
- View Details of a specific teachers
- View Complaints given by the fellow junior teachers to a specific senior
- Create Report Forms Using the google forms.
- Share the report form through the website
- Can view the responses to  a particular report 
- Can see all the reports till date

Admin (Senior) Can't  
- Change a teachers details as it can cause data inconsistency,
- can't see a complaint which is sent to other admin,
- delete a complaint,

#### Future Features : 

- change the password of a junior if the junior permits in case junior forgets the password
- can fill the increment percentages and the salaries automatically get incremented according to the previous salarie of an individual
- can feature notices in the feed area
 






<a name="Installation"></a>
## Installation
1) Clone the repository using:
```bash
  https://github.com/sri-5169/Portal_for_t.git
```
2) Run following in both "client" and "server" folders:
```bash
npm install 
```
3) Start MongoDB and set up following ENV files:
#### Server-side
```
DB_USERNAME 
DB_PASSWORD 
PORT 
ACCESS_SECRET_KEY 
REFRESH_SECRET_KEY 
```
<a name="Tech-Stack-Used"> </a>
## Tech-Stack-Used
* NodeJS (ExpressJS)
* React JS
* JavaScript
* MongoDB (as Database)


<a name="Contributors"> </a>

## Contributors

  * [Ritik Raj](https://github.com/rit1311raj)
  * [Shashank Shekhar](https://github.com/shekhar5004)
  * [Srinath Pandey](https://github.com/sri-5169)
  
[client side](https://github.com/sri-5169/Portal_for_teachers_client)