import { toast } from "react-toastify";

 function handleSuccess(msg){
    toast.success(msg,{
        position:'top-right'
    })
}

 function handlefail(msg){
    toast.error(msg,{
        position:'top-right'
    })
}

module.exports={handleSuccess,handlefail}