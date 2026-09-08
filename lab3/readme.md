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
