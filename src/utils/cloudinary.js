import {v2 as cloudinary} from "cloudinary";

import fs from "fs";

   

    const uploadOnCloudinary = async (localFilePath) => {
       await cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

        try{
            if(!localFilePath)
                 return null;

         const response =await    cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            })
            // file has been uploaded successfully
            console.log("file is uploaded on cloudinary" , response.url);
            return response;
        }catch(error){
            fs.unlinkSync(localFilePath)
            return null;
        }
    }


    export {uploadOnCloudinary};





/*cloudinary.v2.uploader.upload("https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg",
    {
        public_id: "happy_people"
    },
    function(error, result) {console.log(result, error);}
);*/