# Express 

1.create project folder
2.goto project and open terminal 
3.execute `npm init-y`
4.install `npm i nodemon -D`
5.open package.json
  a.change `type:'module'`
  b.update script{
    "start":"node prg1.js",
    "dev":"nodemon prg1.js"
  }
6.create prg1.js in folder 
7.add folderName/node_modules in .gitignore  
8.send function is used to revert back contents to the client , it may be html, json, Html file, plain text we can also add status code with status function, it can be change to any function