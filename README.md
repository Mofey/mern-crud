# mern-crud
mern practice (CRUD)

# Day1 3/10/2024
First, we created 2 folders named backed and frontend
2) We installed node version 20.17 using nvm after which we installed the node packages into our project using the command line; npm init -y and npm install express mongoose dotenv.

3) Wrote the script for our server, tested it and it was a success as localhost 5000 showed in the browser after which, we then proceeded to in stall nodemon so how servers can recognise changes to our code in real time.
Then we created a folder named config which holds the file that connects to our database serving as the entry point of our api.

4) We created our cluster in mongodb for our project and we successfully connected to the mongodb cluster using the MONGO_URI varaiable that has been assigned the value of the connection string in our ".env" file.

5) Finally, we pushed our project to a github repository


# Day2 7/10/2024
1) Today, we created our schema in the models folder. This schema specifies the data our api expects from the client side. If the a required information in the user data is missing, the requests results in a failure of status 404 else if all the necessary information required is sent to the api, then it results in success status of 201 which represents data creation.

2) Then we imported the schema in our server side script and also installed the postman extension to see if our code works by making a post request and it worked as we could see our product in our collections of the mongodb cluster.