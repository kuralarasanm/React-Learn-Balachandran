const ApiRequest =async (url ='' ,optionsObj=null,errorMsg=null) => {
    try {
        
        const response=await fetch(url,optionsObj)
        if(!response.ok) throw Error("please reload the app")
    } catch (error) {
        errorMsg=error.Message
    }finally{
        return errorMsg
    }
    
}
 
export default ApiRequest;