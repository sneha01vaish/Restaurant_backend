# Restaurant_backend
Restaurant_backend>> HERE IS ALL THE APIS OF ORBASED RESTAURANT,

-----------------------------REGISTRATION/SIGNUP API-----------------------------
API URL=  http://localhost:8000/api/user/register
METHOD=POST
HEADERS {type:accept
        value:application/json} 
Body: JSON format {
    "username":"Nirupama12",
    "email": "singhnirupama9651@gmail.com",
    "password": "password123",
    "password_confirmation": "password123",
    "phone_number": "1230567890",
    "role": "employee"
}

verification link will sent to your registered mail""
----------------------------------LOGIN API-----------------------------------------
API URL=  http://localhost:8000/api/user/login
METHOD=POST
HEADERS {type:accept
        value:application/json} 
Body: JSON format >>{
  "email": "raj189978@gmail.com",
  "password": "password123"
}
Response: {
    "status": "Success",
    "message": "Login successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NmQ3ZjY0Y2Q5NmU2OTc4NTg5OGU1ZDgiLCJyb2xlIjoib3duZXIiLCJpYXQiOjE3MjU0ODE1NjYsImV4cCI6MTcyNTQ4NTE2Nn0.K9iHeh6RWMBc0bd86tbAf15QbjSBz89nztRzv1_9eIk"
}

-------------------------------------------verify mail api---------------------------------------
API URL=  http://localhost:8000/api/user/verify-email?token={{token}}

METHOD=GET
HEADERS {type:accept
        value:application/json} 
Body: None
Response: {
    "status": "Success",
    "message": "Login successfully",
    "token": "Verified Successfully"
    }
