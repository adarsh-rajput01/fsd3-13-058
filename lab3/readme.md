local host - url
127.0.0.1- ip address

ctrl+c - stop the server 

every request from client has a pair of {rrquest,response}

##npm - Node Package Manager
used to install ,run, uninstall any program/project and package 
-npm install <packageName>
-npm unistall <packageName>

to use npm,the project must be npm project ,
to create npm project we can use 
-npm init -y
-it creates a pakage.json file automatically package.json holds all the information related to install
package from npm
-update package.json, set type = 'module'
-it also creates a folder node_modules automatically
-node_modules holds the package/library files
-generally we ingone the node_modules by .gitignore


-Nodemon - it restart the server automatically when file changes, to install

>Note: -D flag will install this packages as developer dependency

- to execute ay program ,update the pakages.json file then start the server as 

<b>npm run dev</b>

-start -> it will execute the app on deployement 
-dev -> it will start server  in deployement phase (only fro developer)

-res : it will return containes (json/html/plain)to the user /client 
-req :it will retrive the infofrmation 
from  client to the server 
-server send  also statusCodes to the  client ,that indicates the error /success message
## status codes 
-200->ok
-201->Created
-400->BAd request
-402->Undauthorized
-403-> forbidden
-404->not found
-500->internal server error
#context type
-text /plain 
-text /html
-application /json
-text /css


teh content type and status code can be send  back to client by two ways 
1.res.writeHead
2.res.setHolder
3.res.statusCode

## Send html file to client
1. html file
-read html file using createReadstream
-pipe it with res object

2. html content
  send any html tags/content by using 
  res.end('<any html tag>')

## JSON  ( Java Script Object Notation)
server returns data only not Html content because html contents will be written by frontend developer.The data is in Json format 
- Json always stores data in key value pair inclosed by {}
- Array can be stored by []
- one pair of curly bracket will represent one object and its property will be seperated by,

    ```
    {
     id:1,
     name:'Mobile,
     price:25000,
     rating:4.5,
     review:200
    }
    ```