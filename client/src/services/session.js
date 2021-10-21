import router from "../router";

const session = {
    user: null,
    messages: [
        {text :"Hello world", type}
    ],
    Login(handle, password){
        
        try{
        const response = Login(handel, password)
        this.user = user.user;
        router.push(this.toRoute)
        }
        catch{
            this.messages.push({text: Error})
        }
    }

}

export default session;

